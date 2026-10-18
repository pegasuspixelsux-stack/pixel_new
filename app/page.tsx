import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ConversionEcosystem from "@/components/ConversionEcosystem";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* Thin accent bar that fills as the page scrolls (CSS scroll-driven, see globals.css) */}
      <div aria-hidden className="scroll-progress" />
      <Navbar overHero />
      <main className="relative flex w-full flex-1 flex-col">
        <Hero />
        <Reveal>
          <ValueProposition />
        </Reveal>
        <Reveal>
          <ConversionEcosystem />
        </Reveal>
        <Reveal>
          <CtaBanner />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
