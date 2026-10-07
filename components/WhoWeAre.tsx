"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    id: "mision",
    tag: "01 / MISIÓN",
    title: "Nuestra Misión",
    text: "Estandarizar y automatizar las operaciones digitales de empresas en crecimiento, eliminando cuellos de botella y maximizando la conversión de ventas.",
  },
  {
    id: "vision",
    tag: "02 / VISIÓN",
    title: "Nuestra Visión",
    text: "Ser el socio tecnológico de referencia en infraestructura digital y sistemas integrados de alto rendimiento en la región.",
  },
  {
    id: "valores",
    tag: "03 / VALORES",
    title: "Nuestros Valores",
    text: "Precisión técnica, diseño funcional de alto impacto, estandarización operativa y enfoque obsesivo en resultados comerciales.",
  },
];

// Time each pillar stays expanded, long enough to read it comfortably.
const ROTATE_MS = 6000;

export default function WhoWeAre() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotates the pillars. Visitors who prefer reduced motion keep the first card.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % pillars.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  // Stack order: the stripe above the active card, the active card, then the stripe below it.
  const n = pillars.length;
  const stack = [(activeIndex - 1 + n) % n, activeIndex, (activeIndex + 1) % n];

  return (
    <section id="quienes-somos" className="bg-section relative scroll-mt-24 border-t border-slate-800/80 py-16 md:py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-16">
        {/* Left: brand text and link to /nosotros */}
        <div className="flex flex-col gap-6 lg:col-span-6">
          <span className="block font-mono text-xs tracking-widest text-yellow-400 uppercase">Quiénes Somos</span>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.01em] md:text-5xl">
            Pegasus Pixels: Tu socio en infraestructura y arquitectura digital.
          </h2>
          <p className="text-sm leading-relaxed text-fg/70 md:text-base">
            Somos una firma especializada en diseñar, desplegar y estandarizar la infraestructura digital de empresas
            operativas. Automatizamos la captación de leads, la publicación de inventarios y los flujos comerciales para
            que todo tu equipo trabaje bajo un estándar único, eficiente y fácil de aprender.
          </p>
          <div>
            <Link
              href="/nosotros"
              className="group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-yellow-400"
            >
              Conoce más sobre nuestra visión y metodología
              <ArrowRight size={14} aria-hidden className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right: the active pillar opens in full; the other two collapse into stripes above and below it. */}
        <div className="flex flex-col gap-3 lg:col-span-6">
          {stack.map((index) => {
            const pillar = pillars[index];
            const isActive = index === activeIndex;

            if (!isActive) {
              return (
                <motion.button
                  key={pillar.id}
                  layout
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver ${pillar.title}`}
                  transition={{ layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
                  className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-slate-800/80 bg-slate-900/40 px-4 py-2.5 text-left opacity-40 backdrop-blur-md transition-opacity duration-300 hover:opacity-70"
                >
                  <span className="font-mono text-xs font-semibold text-slate-400">{pillar.tag}</span>
                </motion.button>
              );
            }

            return (
              <motion.div
                key={pillar.id}
                layout
                transition={{ layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
                className="flex h-auto flex-col gap-3 rounded-xl border border-yellow-500/60 bg-slate-900/95 p-6 shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)] backdrop-blur-md md:p-8"
              >
                <span className="font-mono text-xs font-semibold text-yellow-400">{pillar.tag}</span>
                <h3 className="text-lg font-bold text-white md:text-xl">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-slate-200 md:text-base">{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
