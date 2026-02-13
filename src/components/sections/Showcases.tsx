"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const showcases = [
    {
        id: "morning-ritual",
        title: "The Morning Ritual",
        description: "Coffee sachets, stirrers, and napkins designed to start the day with intention.",
        image: "bg-neutral-800", // Placeholder class
        link: "/collection/morning-ritual"
    },
    {
        id: "evening-unwind",
        title: "Evening Unwind",
        description: "Bath salts, slippers, and eye masks for the ultimate turn-down service.",
        image: "bg-neutral-700", // Placeholder class
        link: "/collection/evening-unwind"
    },
    {
        id: "dining-experience",
        title: "Dining Experience",
        description: "Textured menus, coasters, and cutlery sleeves that complement the culinary art.",
        image: "bg-neutral-600", // Placeholder class
        link: "/collection/dining-experience"
    }
];

export function Showcases() {
    return (
        <section className="py-0 bg-background relative z-10">
            {showcases.map((item, index) => (
                <ShowcaseItem key={item.id} item={item} index={index} />
            ))}
        </section>
    );
}

function ShowcaseItem({ item, index }: { item: typeof showcases[0]; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className="relative group overflow-hidden min-h-[80vh] flex items-center">
            {/* Background Image Placeholder */}
            <div className={`absolute inset-0 z-0 ${item.image} transition-transform duration-1000 group-hover:scale-105`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700" />
            </div>

            <div className={`container relative z-10 mx-auto px-6 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl bg-black/20 backdrop-blur-md p-10 border border-white/10"
                >
                    <span className="text-primary text-xs tracking-widest uppercase mb-4 block">Collection 0{index + 1}</span>
                    <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">{item.title}</h3>
                    <p className="text-lg text-white/80 font-light mb-8 leading-relaxed">
                        {item.description}
                    </p>
                    <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors uppercase tracking-widest text-sm group-link"
                    >
                        View Collection <ArrowRight size={16} className="transition-transform group-link-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
