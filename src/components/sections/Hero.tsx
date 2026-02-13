"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video/Image Placeholder */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 bg-neutral-900"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black opacity-80 z-10" />
                {/* Hero Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero_background.png"
                        alt="Abstract Luxury Texture"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 tracking-tight leading-tighter">
                        Elevate the <br />
                        <span className="italic text-primary">Ordinary</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                >
                    Bespoke amenities that transform daily rituals into unforgettable sensory experiences for the world&apos;s most discerning guests.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <Button size="lg" className="bg-white text-black hover:bg-neutral-200 min-w-[200px]" asChild>
                        <Link href="/collection">Explore The Collection</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
