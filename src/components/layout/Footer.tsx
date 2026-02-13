import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="text-3xl font-serif text-white tracking-widest block mb-6">
                            AURA
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Elevating the guest experience through exquisite, custom-branded amenities for the world&apos;s most prestigious hospitality brands.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-serif mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/collection" className="hover:text-primary transition-colors">The Collection</Link></li>
                            <li><Link href="/atelier" className="hover:text-primary transition-colors">The Atelier</Link></li>
                            <li><Link href="/philosophy" className="hover:text-primary transition-colors">Philosophy</Link></li>
                            <li><Link href="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/inquire" className="hover:text-primary transition-colors">Inquire</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><a href="mailto:hello@aura-packaging.com" className="hover:text-primary transition-colors">hello@aura-packaging.com</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Aura Custom Packaging. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <span>New York</span>
                        <span>Paris</span>
                        <span>Tokyo</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
