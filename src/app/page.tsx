import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { SocialProof } from "@/components/sections/SocialProof";
import { Showcases } from "@/components/sections/Showcases";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <Hero />
      <SocialProof />
      <Philosophy />
      <Showcases />
      <Footer />
    </main>
  );
}
