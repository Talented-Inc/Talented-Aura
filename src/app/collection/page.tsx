import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { products, categories } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CollectionPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />

            {/* Header Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 container mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">The Collection</h1>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light">
                    A curated selection of sensory touchpoints, categorized by the moments that define the guest experience.
                </p>
            </section>

            {/* Categories */}
            {categories.map((category) => (
                <section key={category.id} className="py-16 md:py-24 border-t border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                            <div>
                                <span className="text-primary text-xs tracking-widest uppercase block mb-2">{category.name}</span>
                                <p className="text-3xl md:text-4xl font-serif text-white">{category.description}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {products
                                .filter((p) => p.category === category.name)
                                .map((product) => (
                                    <Link href={`/collection/${product.slug}`} key={product.id} className="group block">
                                        <div className="aspect-[4/5] bg-neutral-900 mb-6 overflow-hidden relative">
                                            {/* Image Placeholder */}
                                            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-700 transition-colors">
                                                <span className="tracking-widest uppercase text-sm">Product Img</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif text-white mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                            <p className="text-sm text-neutral-500 line-clamp-2 mb-4">{product.description}</p>
                                            <div className="text-xs uppercase tracking-widest text-white/60 flex items-center gap-2 group-hover:text-white transition-colors">
                                                View Details <ArrowRight size={12} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </section>
            ))}

            <Footer />
        </main>
    );
}
