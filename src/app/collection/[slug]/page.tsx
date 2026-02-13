import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RelatedItems } from "@/components/sections/RelatedItems";
import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />

            <section className="pt-32 pb-16 md:pt-48 md:pb-32 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {/* Product Image Gallery Placeholder */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] bg-neutral-800 w-full relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                                <span className="text-2xl uppercase tracking-widest">Macro Shot</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-neutral-800" />
                            <div className="aspect-square bg-neutral-800" />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">
                        <Link href="/collection" className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white mb-6 transition-colors">
                            ← Back to Collection
                        </Link>
                        <span className="text-primary text-sm tracking-widest uppercase mb-4 block">{product.category}</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">{product.name}</h1>

                        <p className="text-lg text-neutral-300 leading-relaxed font-light mb-12 border-l-2 border-primary pl-6">
                            {product.longDescription}
                        </p>

                        {/* Specs */}
                        <div className="space-y-8 mb-12">
                            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-4">Specifications</h3>
                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-sm">
                                <div>
                                    <dt className="text-neutral-500 mb-1">Material</dt>
                                    <dd className="text-white">{product.specs.material}</dd>
                                </div>
                                <div>
                                    <dt className="text-neutral-500 mb-1">Dimensions</dt>
                                    <dd className="text-white">{product.specs.dimensions}</dd>
                                </div>
                                <div>
                                    <dt className="text-neutral-500 mb-1">Minimum Order</dt>
                                    <dd className="text-white">{product.specs.moq}</dd>
                                </div>
                                <div>
                                    <dt className="text-neutral-500 mb-1">Origin</dt>
                                    <dd className="text-white">{product.specs.origin}</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="flex gap-4">
                            <Button size="lg" className="w-full md:w-auto" asChild>
                                <Link href={`/inquire?product=${product.slug}`}>Request Quote</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="w-full md:w-auto">
                                Download Spec Sheet
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedItems currentSlug={product.slug} />

            <Footer />
        </main>
    );
}
