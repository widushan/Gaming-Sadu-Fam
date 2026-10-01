import Container from "@/components/ui/Container";

export default function VlogsHero() {
    return (
        <section className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden bg-[url('/images/vlogs/vlogsHero.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
            
            <Container className="relative z-10 text-center flex flex-col items-center">
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-slate-900 drop-shadow-sm">
                    Our <span className="text-purple-600">Vlogs</span>
                </h1>
                <div className="space-y-4 bg-white/70 backdrop-blur-md px-8 py-6 rounded-2xl shadow-sm inline-block border border-white/50">
                    <p className="text-xl md:text-2xl text-slate-900 font-bold">
                        More Than Just Gaming -
                    </p>
                    <p className="text-lg md:text-xl text-slate-800 italic max-w-xl mx-auto leading-relaxed font-medium">
                        Follow Sandu & Tharu's real life — now trusted by 44K+ subscribers.
                    </p>
                </div>
            </Container>
        </section>
    );
}
