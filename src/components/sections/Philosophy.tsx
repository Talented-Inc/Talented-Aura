"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Philosophy() {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative aspect-[4/5] bg-neutral-900 overflow-hidden"
                    >
                        {/* Raw Materials Image */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/raw_materials.png"
                                alt="Raw Materials"
                                fill
                                className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-serif text-white leading-tight"
                        >
                            Beyond the <span className="text-primary italic">Disposable</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6 text-neutral-400 font-light leading-relaxed text-lg"
                        >
                            <p>
                                In a world of mass production, we believe that true luxury lies in the details.
                                The weight of the paper, the texture of the weave, the scent that lingers
                                long after the moment has passed.
                            </p>
                            <p>
                                Aura creates amenities that are not merely functional, but foundational to
                                the guest narrative. We treat every sachet, every kit, and every slipper
                                as an opportunity to deepen the connection between host and guest.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="pt-4"
                        >
                            <div className="h-[1px] w-24 bg-primary mb-6" />
                            <p className="text-xs uppercase tracking-[0.2em] text-white">The Aura Philosophy</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
