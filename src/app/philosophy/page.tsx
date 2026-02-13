import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />

            <section className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Our Philosophy</h1>
                    <p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto">
                        We believe that packaging is more than just a container; it&apos;s an extension of your brand&apos;s identity and a promise of quality to your customers.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
