"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export function RelatedItems({ currentSlug }: { currentSlug: string }) {
    // Simple logic to get related items (or just next items)
    // In a real app, use the `relatedProducts` field from data
    const currentProduct = products.find(p => p.slug === currentSlug);
    const relatedSlugs = currentProduct?.relatedProducts || [];
    const related = products.filter(p => relatedSlugs.includes(p.slug));

    if (related.length === 0) return null;

    return (
        <section className="py-24 border-t border-white/5 bg-neutral-900/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-serif text-white mb-12">Pairs Well With</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {related.map(product => (
                        <Link href={`/collection/${product.slug}`} key={product.id} className="group block">
                            <div className="aspect-[4/3] bg-neutral-800 mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-neutral-700 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-600 transition-colors">
                                    <span className="tracking-widest uppercase text-xs">Product Img</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-serif text-white group-hover:text-primary transition-colors">{product.name}</h3>
                            <span className="text-xs text-neutral-500 uppercase tracking-widest mt-2 block group-hover:text-white transition-colors flex items-center gap-2">
                                View <ArrowRight size={12} />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
