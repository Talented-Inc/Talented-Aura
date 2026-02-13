"use client";

import { motion } from "framer-motion";

const clients = [
    "Ritz-Carlton",
    "Four Seasons",
    "St. Regis",
    "Mandarin Oriental",
    "Rosewood",
    "Aman Resorts"
];

export function SocialProof() {
    return (
        <section className="py-20 bg-neutral-950 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-xs font-serif uppercase tracking-[0.2em] text-white/40">Trusted by the Exceptional</span>
                </div>

                <div className="flex flex-wrapjustify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* In a real scenario, use <Image /> with SVG logos. 
               For now, using text representations that look like premium wordmarks */}
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 w-full">
                        {clients.map((client, index) => (
                            <motion.div
                                key={client}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-xl md:text-2xl font-serif text-primary/80 hover:text-primary cursor-default whitespace-nowrap"
                            >
                                {client}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
