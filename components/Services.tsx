"use client";

import { useEffect, useState } from "react";
import * as m from "motion/react-m";

const modules = [
  {
    number: "01",
    title: "Creación de Contenido & Branding",
    description:
      "Producción de piezas gráficas y flyers estandarizados para tus productos, inmuebles o inventario, optimizados para redes sociales y catálogo.",
  },
  {
    number: "02",
    title: "Publicación de Inventario & Captura de Leads",
    description:
      "Catálogo digital dinámico (para vehículos, propiedades o servicios) con widgets de calificación e interacción que capturan requerimientos y estructuran las consultas.",
  },
  {
    number: "03",
    title: "Automatización & Follow-up Comercial",
    description:
      "Flujo automatizado de respuesta inmediata y seguimiento continuo (follow-up) de prospectos para acompañar al cliente durante todo el ciclo de venta hasta el cierre.",
  },
];

const addons = [
  {
    title: "Configuración de Correo Comercial & Profesional",
    detail: "Google Workspace / Microsoft 365",
  },
  {
    title: "Registro, Gestión y Configuración de Dominios",
    detail: "DNS, SSL, Infraestructura",
  },
  {
    title: "Diseño & Desarrollo Web a Medida",
    detail: "Sitios corporativos y landing pages específicas",
  },
  {
    title: "Meta Ads & Publicidad Geolocalizada",
    detail: "Campañas en Instagram/Facebook con Geo-Targeting exacto",
  },
];

const CYCLE_MS = 2200;

const viewport = { once: true, margin: "-80px" };

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 24 } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Services() {
  // Cycles through the three modules. Hovering a card holds the highlight on it until the cursor leaves.
  const [cycle, setCycle] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setCycle((current) => (current + 1) % modules.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  const activeIndex = hovered ?? cycle;

  return (
    <section id="servicios" className="relative scroll-mt-24 py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mb-10 max-w-3xl lg:mb-14"
        >
          <m.span variants={rise} className="mb-3 block text-xs font-medium tracking-widest text-accent uppercase">
            Ecosistema Integral
          </m.span>
          <m.h2 variants={rise} className="mb-4 font-inter-display text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-5xl">
            Tres módulos centrales para digitalizar tu negocio.
          </m.h2>
          <m.p variants={rise} className="max-w-2xl text-base leading-relaxed text-fg/70 md:text-lg">
            Desplegamos el motor completo de captación y venta, respaldado por servicios de infraestructura técnica según las necesidades de tu empresa.
          </m.p>
        </m.div>

        {/* Core offer: three modules */}
        <m.ol
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {modules.map((module, index) => {
            const isActive = index === activeIndex;
            return (
              <m.li
                key={module.number}
                variants={rise}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                aria-current={isActive ? "true" : undefined}
                className={`flex flex-col gap-5 rounded-2xl border p-8 backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out ${
                  isActive
                    ? "scale-[1.02] border-accent/60 bg-fg/[0.08] shadow-[0_0_30px_var(--accent-glow)]"
                    : "border-fg/10 bg-fg/[0.05]"
                }`}
              >
                <span
                  className={`w-fit rounded-md border px-2.5 py-1 font-mono text-xs transition-colors duration-300 ${
                    isActive
                      ? "border-accent/60 bg-accent/10 text-accent shadow-[0_0_12px_var(--accent-glow)]"
                      : "border-fg/15 text-fg/60"
                  }`}
                >
                  Módulo {module.number}
                </span>
                <h3 className="font-serif text-2xl leading-snug">{module.title}</h3>
                <p className="text-sm leading-relaxed text-fg/60">{module.description}</p>
              </m.li>
            );
          })}
        </m.ol>

        {/* Complementary services */}
        <div className="mt-16 flex flex-col gap-6">
          <h3 className="font-mono text-xs tracking-widest text-fg/50 uppercase">Servicios complementarios</h3>
          <m.ul
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {addons.map((addon) => (
              <m.li
                key={addon.title}
                variants={rise}
                className="flex flex-col gap-2 rounded-xl border border-fg/10 bg-fg/5 p-5"
              >
                <span className="text-sm font-medium">{addon.title}</span>
                <span className="text-xs leading-relaxed text-fg/50">{addon.detail}</span>
              </m.li>
            ))}
          </m.ul>
        </div>
      </div>
    </section>
  );
}
