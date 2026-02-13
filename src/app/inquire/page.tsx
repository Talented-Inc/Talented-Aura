import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RFQForm } from "@/components/forms/RFQForm";

export default function InquirePage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />

            <section className="pt-32 pb-24 px-6 min-h-screen flex items-center">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Begin Your Journey</h1>
                            <p className="text-lg text-neutral-400 font-light">
                                Tell us about your project. Our specialists will curate a proposal tailored to your brand&apos;s unique narrative.
                            </p>
                        </div>

                        <RFQForm />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
