import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import WhoWeAre from "@/components/WhoWeAre";
import Grid from "@/components/Grid";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar overHero />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Reveal>
          <ValueProposition />
        </Reveal>
        <Reveal>
          <WhoWeAre />
        </Reveal>
        <Reveal>
          <Grid />
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
