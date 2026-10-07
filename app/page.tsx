import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import WhoWeAre from "@/components/WhoWeAre";
import ConversionEcosystem from "@/components/ConversionEcosystem";
import Grid from "@/components/Grid";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
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
          <Grid />
        </Reveal>
        <Reveal>
          <WhoWeAre />
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
