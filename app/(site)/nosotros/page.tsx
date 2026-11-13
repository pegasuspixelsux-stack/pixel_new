import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import MethodFlow from "@/components/MethodFlow";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Nosotros | Pegasus Pixels",
  description:
    "Pegasus Pixels es tu socio tecnológico de largo plazo: construimos sistemas robustos para acelerar las ventas y la gestión interna.",
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex w-full flex-1 flex-col">
        {/* 1. Hero: Quiénes Somos & Filosofía */}
        <section>
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 pt-24 pb-12 lg:px-16 lg:pt-32 lg:pb-16">
            <Reveal>
              <span className="block text-xs font-medium tracking-[0.18em] text-accent uppercase">
                Quiénes Somos &amp; Filosofía
              </span>
              <h1 className="mt-6 max-w-4xl font-inter-display text-4xl leading-[1.05] font-medium tracking-[-0.03em] md:text-6xl">
                Quiénes Somos &amp; Filosofía
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/70 md:text-lg">
                Pegasus Pixels es un socio tecnológico de largo plazo.
                Eliminamos la complejidad técnica de tu operación y construimos
                sistemas robustos, diseñados para acelerar las ventas y ordenar
                la gestión interna.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2. Quiénes somos: same section as the home page, minus the link back to this page */}
        <Reveal>
          <WhoWeAre showLink={false} />
        </Reveal>

        {/* 3. Qué hacemos: 3 módulos + servicios complementarios */}
        <Reveal>
          <Services />
        </Reveal>

        {/* 4. Cómo lo hacemos: proceso en 4 pasos */}
        <Reveal>
          <MethodFlow />
        </Reveal>

        {/* 5. Cierre: diagnóstico o WhatsApp */}
        <Reveal>
          <CtaBanner tone="warm" />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
