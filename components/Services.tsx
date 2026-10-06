"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

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
    <section id="servicios" className="relative scroll-mt-24 border-t border-fg/10 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mb-14 max-w-2xl"
        >
          <motion.span variants={rise} className="mb-3 block text-xs font-medium tracking-widest text-emerald-500 uppercase">
            Ecosistema Integral
          </motion.span>
          <motion.h2 variants={rise} className="mb-4 font-serif text-4xl leading-tight tracking-[-0.01em] md:text-5xl">
            Tres módulos centrales para digitalizar tu negocio.
          </motion.h2>
          <motion.p variants={rise} className="text-sm leading-relaxed text-fg/60">
            Desplegamos el motor completo de captación y venta, respaldado por servicios de infraestructura técnica según las necesidades de tu empresa.
          </motion.p>
        </motion.div>

        {/* Core offer: three modules */}
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {modules.map((module, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.li
                key={module.number}
                variants={rise}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                aria-current={isActive ? "true" : undefined}
                className={`flex flex-col gap-5 rounded-2xl border p-8 backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out ${
                  isActive
                    ? "scale-[1.02] border-sky-400/60 bg-slate-900/90 shadow-[0_0_30px_-5px_rgba(56,189,248,0.25)]"
                    : "border-fg/10 bg-surface/70"
                }`}
              >
                <span
                  className={`w-fit rounded-md border px-2.5 py-1 font-mono text-xs transition-colors duration-300 ${
                    isActive
                      ? "border-sky-400/60 bg-sky-400/10 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                      : "border-fg/15 text-fg/60"
                  }`}
                >
                  Módulo {module.number}
                </span>
                <h3 className="font-serif text-2xl leading-snug">{module.title}</h3>
                <p className="text-sm leading-relaxed text-fg/60">{module.description}</p>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Complementary services */}
        <div className="mt-16 flex flex-col gap-6">
          <h3 className="font-mono text-xs tracking-widest text-fg/50 uppercase">Servicios complementarios</h3>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {addons.map((addon) => (
              <motion.li
                key={addon.title}
                variants={rise}
                className="flex flex-col gap-2 rounded-xl border border-fg/10 bg-fg/5 p-5"
              >
                <span className="text-sm font-medium">{addon.title}</span>
                <span className="text-xs leading-relaxed text-fg/50">{addon.detail}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
