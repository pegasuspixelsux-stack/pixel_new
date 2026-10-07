"use client";

import { motion } from "motion/react";
import { Filter, GitPullRequest, LayoutGrid, MessageSquare } from "lucide-react";

const viewport = { once: true, margin: "-80px" };

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 24 } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const services = [
  {
    id: "01",
    title: "Catálogos Digitales",
    subheading: "Exposición Inteligente de Inventario",
    description:
      "Presentación visual de alta velocidad adaptada a móviles. Organiza tus productos o propiedades con navegación fluida para que el cliente encuentre exactamente lo que busca antes de contactarte.",
    icon: LayoutGrid,
    card: "hover:border-yellow-500/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]",
    iconBox: "group-hover:text-yellow-400 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30",
    accent: "text-yellow-500",
  },
  {
    id: "02",
    title: "Agente de Calificación",
    subheading: "Filtro & Captura en Tiempo Real",
    description:
      "Flujos de preguntas estructuradas multiopción que guían al visitante. Identifica la intención real de compra y elimina la pérdida de tiempo con prospectos no calificados.",
    icon: Filter,
    card: "hover:border-yellow-500/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]",
    iconBox: "group-hover:text-yellow-400 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30",
    accent: "text-yellow-500",
  },
  {
    id: "03",
    title: "Conexión Directa",
    subheading: "Cierre Comercial en Un Clic",
    description:
      "Entrega instantánea de datos al vendedor vía WhatsApp. El cliente llega a tu canal de ventas con la ficha técnica completa de lo que necesita, listo para concretar la transacción.",
    icon: MessageSquare,
    card: "hover:border-yellow-500/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]",
    iconBox: "group-hover:text-yellow-400 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30",
    accent: "text-yellow-500",
  },
  {
    id: "04",
    title: "Pipeline de Seguimiento",
    subheading: "Estandarización & Trazabilidad",
    description:
      "Control total sobre la gestión comercial. Tu equipo opera bajo un estándar único y fácil de usar, asegurando que cada oportunidad reciba el recontacto adecuado sin fricción.",
    icon: GitPullRequest,
    card: "hover:border-yellow-500/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]",
    iconBox: "group-hover:text-yellow-400 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30",
    accent: "text-yellow-500",
  },
];

export default function ConversionEcosystem() {
  return (
    <section id="ecosistema" className="bg-section relative scroll-mt-24 border-t border-fg/10 py-16 md:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
        className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 lg:gap-16 lg:px-16"
      >
        <motion.div variants={rise} className="flex max-w-3xl flex-col gap-6">
          <span className="block text-xs font-medium tracking-widest text-yellow-500 uppercase">
            Ecosistema digital de conversión
          </span>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.01em] lg:text-5xl">
            <span className="italic">Infraestructura comercial</span> diseñada <br className="hidden md:block" />para captar, calificar y cerrar.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={rise}
                className={`group relative flex flex-col gap-6 rounded-2xl border border-fg/10 bg-surface/60 p-8 backdrop-blur-md transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 ${item.card}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-wider text-fg/50">{item.id}</span>
                  <div
                    className={`rounded-xl border border-fg/10 bg-fg/5 p-3 text-fg/60 transition-all duration-300 ${item.iconBox}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-2xl leading-snug">{item.title}</h3>
                  <p className={`font-mono text-xs tracking-wider uppercase ${item.accent}`}>{item.subheading}</p>
                </div>

                <p className="text-sm leading-relaxed text-fg/70 transition-colors duration-300 group-hover:text-fg/90">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
