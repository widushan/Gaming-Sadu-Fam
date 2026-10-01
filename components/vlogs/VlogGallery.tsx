"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const images = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/images/vlogs/${i + 1}.jpg`,
  alt: `Vlog ${i + 1}`,
}));

const AUTO_MS = 2000; // time between automatic slides

// Design size (used on wide screens); everything scales down from here.
const CARD_W = 144;
const CARD_H = 224;
const GAP = 175;
const PERSPECTIVE = 1100;

const FALLBACK = (id: number) =>
  `https://assets.prebuiltui.com/components/blog-sections/blogImg_${(id % 3) + 1}.png`;

const scaleFor = (abs: number) => 0.95 + abs * 0.12;

export default function VlogGallery() {
  const [active, setActive] = useState(Math.floor(images.length / 2));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const [width, setWidth] = useState(1280);
  const wrapRef = useRef<HTMLDivElement>(null);
  const n = images.length;

  // Track container width so the layout can adapt on every screen size
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Fewer side cards on smaller screens
  const visibleSide = width < 560 ? 1 : width < 1000 ? 2 : 3;

  // Scale factor so the outermost visible card always fits inside the container
  const extent = visibleSide * GAP + (CARD_W * scaleFor(visibleSide)) / 2;
  const k = Math.min(1, (width / 2 - 8) / extent);

  const cardW = CARD_W * k;
  const cardH = CARD_H * k;
  const gap = GAP * k;
  const stageH = Math.round(cardH * scaleFor(visibleSide) * 1.2 + 16);

  // Auto-advance (pauses on mouse hover or while the lightbox is open)
  useEffect(() => {
    if (paused || selectedImage) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, selectedImage, n]);

  // Esc closes the lightbox
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Shortest signed distance from the centre card (wraps around)
  const offsetOf = (i: number) => ((i - active + n + n / 2) % n) - n / 2;

  return (
    <>
      <div
        ref={wrapRef}
        className="relative w-full max-w-7xl mx-auto overflow-hidden"
        onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setPaused(false)}
      >
        <div
          className="relative w-full"
          style={{ height: stageH, perspective: PERSPECTIVE * k }}
        >
          {images.map((img, i) => {
            const d = offsetOf(i);
            const abs = Math.abs(d);
            const visible = abs <= visibleSide;
            const dir = Math.sign(d);

            // Concave curve: cards grow and tilt inward toward the left/right edges
            const rotate = -dir * Math.min(abs, 3) * 16;
            const scale = scaleFor(abs);

            return (
              <button
                key={img.id}
                type="button"
                aria-label={d === 0 ? `Open ${img.alt}` : `Show ${img.alt}`}
                onClick={() => (d === 0 ? setSelectedImage(img.src) : setActive(i))}
                className="absolute left-1/2 top-1/2 rounded-2xl overflow-hidden shadow-md hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all duration-700 ease-out"
                style={{
                  width: cardW,
                  height: cardH,
                  transform: `translate(-50%, -50%) translateX(${d * gap}px) rotateY(${rotate}deg) scale(${scale})`,
                  zIndex: 10 - Math.round(abs),
                  opacity: visible ? 1 : 0,
                  pointerEvents: visible ? "auto" : "none",
                  cursor: "pointer",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK(img.id);
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK(1);
            }}
          />
        </div>
      )}
    </>
  );
}