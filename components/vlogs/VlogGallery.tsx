"use client";

import { useState } from "react";
import { X } from "lucide-react";

const galleryRows = [
  // Row 1
  [
    { id: 1, src: "/images/vlogs/1.jpg", alt: "Vlog 1", flex: 1.333 }, // 4:3
    { id: 2, src: "/images/vlogs/2.jpg", alt: "Vlog 2", flex: 0.5625 }, // 9:16
    { id: 3, src: "/images/vlogs/3.jpg", alt: "Vlog 3", flex: 1.6 }, // 16:10
    { id: 4, src: "/images/vlogs/4.jpg", alt: "Vlog 4", flex: 1.777 }, // 16:9
  ],
  // Row 2
  [
    { id: 5, src: "/images/vlogs/5.jpg", alt: "Vlog 5", flex: 1 }, // 1:1
    { id: 6, src: "/images/vlogs/6.jpg", alt: "Vlog 6", flex: 2.333 }, // 21:9
    { id: 7, src: "/images/vlogs/7.jpg", alt: "Vlog 7", flex: 1.777 }, // 16:9
  ],
  // Row 3
  [
    { id: 8, src: "/images/vlogs/8.jpg", alt: "Vlog 8", flex: 0.75 }, // 3:4
    { id: 9, src: "/images/vlogs/9.jpg", alt: "Vlog 9", flex: 1.777 }, // 16:9
    { id: 10, src: "/images/vlogs/10.jpg", alt: "Vlog 10", flex: 1.777 }, // 16:9
  ],
];

export default function VlogGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-8 bg-white w-full max-w-7xl mx-auto">
        {galleryRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full h-auto sm:h-48 md:h-64 lg:h-80">
            {row.map((img) => (
              <div
                key={img.id}
                className="relative overflow-hidden cursor-pointer group rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 h-56 sm:h-full w-full sm:w-auto"
                style={{ flex: img.flex }}
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  // Use a placeholder logic just in case images are missing
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://assets.prebuiltui.com/components/blog-sections/blogImg_${(img.id % 3) + 1}.png`;
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12 transition-opacity"
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
              (e.target as HTMLImageElement).src = "https://assets.prebuiltui.com/components/blog-sections/blogImg_1.png";
            }}
          />
        </div>
      )}
    </>
  );
}
