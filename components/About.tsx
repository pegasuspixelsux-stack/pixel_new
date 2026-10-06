"use client";

import { motion } from "motion/react";

const pillars = [
  {
    title: "Operación Estandarizada",
    description:
      "Implementamos herramientas intuitivas para que cada miembro de tu equipo gestione leads, consultas y catálogos bajo un mismo protocolo, eliminando errores y acelerando la capacitación.",
  },
  {
    title: "Conversión de Leads",
    description:
      "Integramos widgets guiados de calificación que capturan requerimientos específicos del cliente en tiempo real y los derivan directamente a tu canal de atención o CRM.",
  },
  {
    title: "Catálogos Dinámicos",
    description:
      "Exhibe tus productos, inmuebles o servicios con interfaces modernas de alta velocidad, optimizadas para carga rápida en móviles y actualización instantánea.",
  },
  {
    title: "Presencia e Integración Social",
    description:
      "Conectamos tus canales digitales y redes sociales directamente a tu motor de captación, convirtiendo visitas casuales en solicitudes de atención estructuradas.",
  },
];

const viewport = { once: true, margin: "-80px" };

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 24 } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  return (
    <section id="nosotros" className="relative border-t border-fg/10 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.span variants={rise} className="mb-3 block text-xs font-medium tracking-widest text-emerald-500 uppercase">
              Quiénes Somos
            </motion.span>
            <motion.h2
              variants={rise}
              className="mb-6 font-serif text-3xl leading-tight tracking-[-0.01em] lg:text-4xl"
            >
              Tu Socio Tecnológico de Confianza
            </motion.h2>
            <motion.p variants={rise} className="leading-relaxed text-fg/70">
              En Pegasus Pixels no creamos páginas web estáticas; construimos la infraestructura digital que impulsa la operación diaria de tu negocio. Acompañamos a empresas avanzadas en su proceso de modernización, combinando diseño de nivel superior con herramientas prácticas que profesionalizan la venta, ordenan las solicitudes y elevan la productividad de tu equipo.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={rise}
                className="rounded-xl border border-fg/10 bg-surface/70 p-6 backdrop-blur-md transition-colors duration-300 hover:border-fg/20"
              >
                <div className="mb-4 font-mono text-sm text-emerald-500">[{String(index + 1).padStart(2, "0")}]</div>
                <h3 className="mb-2 text-base font-medium">{pillar.title}</h3>
                <p className="text-xs leading-relaxed text-fg/60">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
