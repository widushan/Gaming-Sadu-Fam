import Container from "@/components/ui/Container";

export default function VlogsCTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-purple-600 to-indigo-700 text-white text-center">
            <Container className="flex flex-col items-center gap-8 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-sm">Follow the Journey</h2>
                <p className="text-xl text-purple-100 leading-relaxed font-medium">
                    New vlogs dropping regularly — subscribe so you never miss what the Fam's up to next.
                </p>
                <a
                    href="https://www.youtube.com/@sanduandtharu100k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-purple-700 hover:bg-slate-50 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl mt-4"
                >
                    Subscribe Now
                </a>
            </Container>
        </section>
    );
}
