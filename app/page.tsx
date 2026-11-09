import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaptureSection from "@/components/CaptureSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import HowWeWork from "@/components/HowWeWork";
import HomeFaq from "@/components/HomeFaq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    // body_gradient: full-page navy background with the corner glows; every section below is transparent.
    <div className="body_gradient flex flex-1 flex-col">
      {/* Thin accent bar that fills as the page scrolls (CSS scroll-driven, see globals.css) */}
      <div aria-hidden className="scroll-progress" />
      <Navbar overHero />
      <main className="relative flex w-full flex-1 flex-col">
        <Hero />
        <Reveal>
          <CaptureSection />
        </Reveal>
        <Reveal>
          <ServicesSection />
        </Reveal>
        <Reveal>
          <ProductsSection />
        </Reveal>
        <Reveal>
          <HowWeWork />
        </Reveal>
        <Reveal>
          <HomeFaq />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Reveal>
        <Footer transparent />
      </Reveal>
    </div>
  );
}
