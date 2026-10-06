"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const steps = [
  { number: "01", title: "Diagnóstico & Arquitectura" },
  { number: "02", title: "Despliegue de Catálogos & Herramientas" },
  { number: "03", title: "Estandarización & Capacitación" },
  { number: "04", title: "Medición & Escalabilidad Continua" },
];

const STEP_MS = 1600;

const viewport = { once: true, margin: "-80px" };

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 24 } },
} as const;

export default function MethodFlow() {
  const [active, setActive] = useState(0);

  // Cycles 01 → 02 → 03 → 04 → 01 forever. Users who prefer reduced motion keep the first step lit.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="metodologia" className="relative scroll-mt-24 border-t border-fg/10 py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col gap-6"
        >
          <motion.span variants={rise} className="block text-xs font-medium tracking-widest text-emerald-500 uppercase">
            Proceso y metodología
          </motion.span>
          <motion.h2 variants={rise} className="font-serif text-4xl leading-tight tracking-[-0.01em] md:text-5xl">
            Un flujo estandarizado para transformar tu operación digital.
          </motion.h2>
          <motion.p variants={rise} className="max-w-md leading-relaxed text-fg/70">
            Desplegamos un método paso a paso que minimiza la fricción, asegura la adopción de tu equipo y deja tu
            infraestructura funcionando bajo un mismo estándar desde el primer día.
          </motion.p>
        </motion.div>

        <ol className="flex flex-col gap-4">
          {steps.map((step, index) => {
            const isActive = index === active;
            return (
              <li
                key={step.number}
                aria-current={isActive ? "step" : undefined}
                className={`flex items-center gap-6 rounded-2xl border bg-surface/70 p-6 backdrop-blur-md transition-[opacity,border-color,box-shadow] duration-500 ease-out ${
                  isActive
                    ? "border-sky-400/60 opacity-100 shadow-[0_0_28px_rgba(56,189,248,0.25)]"
                    : "border-fg/10 opacity-40"
                }`}
              >
                <span
                  className={`font-mono text-4xl transition-colors duration-500 ${
                    isActive ? "text-sky-300" : "text-fg/60"
                  }`}
                >
                  {step.number}
                </span>
                <h3 className="text-base font-medium">{step.title}</h3>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
