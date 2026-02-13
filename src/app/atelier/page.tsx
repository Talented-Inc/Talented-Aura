import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AtelierPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />

            <section className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">The Atelier</h1>
                    <p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto">
                        Where craftsmanship meets innovation. Our dedicated space for creating bespoke packaging solutions that elevate your brand.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
