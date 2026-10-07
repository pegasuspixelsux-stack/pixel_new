import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
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
        <section className="bg-section">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 pt-24 pb-16 lg:px-16 lg:pt-32">
            <Reveal>
              <span className="block font-mono text-xs tracking-widest text-yellow-500 uppercase">
                Quiénes Somos &amp; Filosofía
              </span>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
                Quiénes Somos &amp; Filosofía
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg/70">
                Pegasus Pixels es un socio tecnológico de largo plazo.
                Eliminamos la complejidad técnica de tu operación y construimos
                sistemas robustos, diseñados para acelerar las ventas y ordenar
                la gestión interna.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2. Qué hacemos: 3 módulos + servicios complementarios */}
        <Reveal>
          <Services />
        </Reveal>

        {/* 3. Cómo lo hacemos: proceso en 4 pasos */}
        <Reveal>
          <MethodFlow />
        </Reveal>

        {/* 4. Cierre: diagnóstico o WhatsApp */}
        <Reveal>
          <CtaBanner />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
