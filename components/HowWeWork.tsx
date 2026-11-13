"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Consulta inicial & diagnóstico",
    time: "15 a 30 min",
    text: "Analizamos la estructura actual de tu negocio, evaluamos los cuellos de botella operativos y definimos el alcance exacto de la solución que necesitas.",
  },
  {
    title: "Propuesta & alcance estratégico",
    time: "24 a 48 hs",
    text: "Te presentamos un plan de trabajo detallado con la arquitectura del sistema, los entregables exactos, los tiempos de ejecución y la inversión final sin costos ocultos.",
  },
  {
    title: "Desarrollo, integración & pruebas",
    time: "Ejecución",
    text: "Construimos y configuramos la infraestructura (diseño, automatizaciones o plataformas verticales), realizando pruebas de velocidad, integración y carga en entornos de staging.",
  },
  {
    title: "Despliegue & acompañamiento",
    time: "Puesta en marcha",
    text: "Lanzamos tu sistema a producción en servidores optimizados y capacitamos a tu equipo para la gestión diaria. La plataforma queda totalmente bajo tu control operativo.",
  },
];

export default function HowWeWork() {
  // The step closest to the middle of the screen is the active one; the rest are dimmed.
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      // A thin band across the middle of the viewport.
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-trabajamos" className="relative scroll-mt-24 py-12 md:py-14 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 md:px-28 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-16">
        <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
          <span className="block text-xs font-medium tracking-widest text-accent uppercase">Pasos para contratarnos</span>
          <h2 className="font-inter-display text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-5xl">Cómo trabajamos.</h2>
          <p className="max-w-xl text-base leading-relaxed text-fg/70 md:text-lg">
            Un proceso directo, transparente y enfocado en desplegar soluciones listas para operar sin rodeos técnicos ni demoras innecesarias.
          </p>
        </div>

        {/* No boxes: a vertical line down the left side connects the numbered badges. Scrolling highlights the steps one after another and fills the line up to the active step. */}
        <ol className="flex flex-col">
          {steps.map((step, i) => {
            const on = i === active;
            const first = i === 0;
            const last = i === steps.length - 1;
            return (
              <li
                key={step.title}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                aria-current={on ? "step" : undefined}
                className="relative flex min-h-[38svh] flex-col justify-center py-8 pl-[4.5rem] lg:pl-24"
              >
                {/* Line through the badge: upper half joins the previous step, lower half the next one. */}
                {!first && <span aria-hidden className={`absolute top-0 left-6 h-1/2 w-px -translate-x-1/2 transition-colors duration-500 ${i <= active ? "bg-accent" : "bg-fg/25"}`} />}
                {!last && <span aria-hidden className={`absolute bottom-0 left-6 h-1/2 w-px -translate-x-1/2 transition-colors duration-500 ${i < active ? "bg-accent" : "bg-fg/25"}`} />}
                <span
                  className={`absolute top-1/2 left-0 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border font-inter-display text-lg font-medium transition-[background-color,color,border-color,box-shadow] duration-500 ${
                    on ? "border-accent bg-accent text-space-indigo-950 shadow-[0_0_24px_var(--accent-glow)]" : i < active ? "border-accent bg-canvas text-accent" : "border-fg/30 bg-canvas text-fg/60"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className={`flex flex-col gap-4 transition-opacity duration-500 ease-out ${on ? "opacity-100" : "opacity-35"}`}>
                  <span className="w-fit rounded-full border border-fg/25 px-3 py-1 text-xs font-medium tracking-wider text-fg/80 uppercase">{step.time}</span>
                  <h3 className="font-serif text-2xl leading-snug lg:text-3xl">{step.title}</h3>
                  <p className="max-w-xl leading-relaxed text-fg/70 md:text-lg">{step.text}</p>
                  <Link href="/#contacto" className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-[gap] duration-200 hover:gap-2.5">
                    Ver más
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
