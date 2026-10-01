import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Video, PartyPopper, Clapperboard, Smile } from "lucide-react";

export default function VlogsContent() {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <SectionTitle
                        eyebrow="Content"
                        title="What You'll Find"
                        className="text-center mb-16"
                    />
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-5 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                            <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl shrink-0">
                                <Video className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Day-in-the-life content</h3>
                                <p className="text-slate-600 leading-relaxed">Experience our daily routines and special moments.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                                <PartyPopper className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Challenges and events</h3>
                                <p className="text-slate-600 leading-relaxed">Fun community events and crazy challenges we do together.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                            <div className="p-4 bg-orange-50 text-orange-600 rounded-2xl shrink-0">
                                <Clapperboard className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Behind-the-scenes</h3>
                                <p className="text-slate-600 leading-relaxed">See what happens behind the camera during streams and tournaments.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                            <div className="p-4 bg-green-50 text-green-600 rounded-2xl shrink-0">
                                <Smile className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Unfiltered, real moments</h3>
                                <p className="text-slate-600 leading-relaxed">Authentic experiences and interactions with the Fam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
