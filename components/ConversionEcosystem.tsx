"use client";

import Image from "next/image";
import * as m from "motion/react-m";
import { useCenterLit } from "@/components/useCenterLit";

const viewport = { once: true, margin: "-80px" };

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 24 },
  },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// TEMPORARY placeholder photos, stored locally as WebP in /public/photos. Replace with real imagery.
const services = [
  {
    id: "01",
    image: "/photos/1460925895917-afdab827c52f.webp",
    title: "Catálogos Digitales",
    subheading: "Exposición Inteligente de Inventario",
    description:
      "Presentación visual de alta velocidad adaptada a móviles. Organiza tus productos o propiedades con navegación fluida para que el cliente encuentre exactamente lo que busca antes de contactarte.",
    card: "lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]",
    accent: "text-accent",
  },
  {
    id: "02",
    image: "/photos/1519389950473-47ba0277781c.webp",
    title: "Agente de Calificación",
    subheading: "Filtro & Captura en Tiempo Real",
    description:
      "Flujos de preguntas estructuradas multiopción que guían al visitante. Identifica la intención real de compra y elimina la pérdida de tiempo con prospectos no calificados.",
    card: "lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]",
    accent: "text-accent",
  },
  {
    id: "03",
    image: "/photos/1556761175-5973dc0f32e7.webp",
    title: "Conexión Directa",
    subheading: "Cierre Comercial en Un Clic",
    description:
      "Entrega instantánea de datos al vendedor vía WhatsApp. El cliente llega a tu canal de ventas con la ficha técnica completa de lo que necesita, listo para concretar la transacción.",
    card: "lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]",
    accent: "text-accent",
  },
  {
    id: "04",
    image: "/photos/1504384308090-c894fdcc538d.webp",
    title: "Pipeline de Seguimiento",
    subheading: "Estandarización & Trazabilidad",
    description:
      "Control total sobre la gestión comercial. Tu equipo opera bajo un estándar único y fácil de usar, asegurando que cada oportunidad reciba el recontacto adecuado sin fricción.",
    card: "lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]",
    accent: "text-accent",
  },
];

function ServiceCard({ item }: { item: (typeof services)[number] }) {
  const [ref, lit] = useCenterLit<HTMLDivElement>();
  return (
    <m.div
      ref={ref}
      data-lit={lit}
      variants={rise}
      className={`group relative flex flex-col justify-between gap-6 isolate overflow-hidden rounded-2xl aspect-square border border-fg/10 bg-black p-5 text-white lg:p-12 transition-all duration-300 ease-out motion-safe:lit:-translate-y-1 ${item.card}`}
    >
      <Image src={item.image} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

      <div className="flex items-center justify-between">
        <span className="font-mono text-xs tracking-wider text-white/70">
          {item.id}
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-xl leading-snug lg:text-4xl">{item.title}</h3>
          <p
            className={`font-mono text-xs tracking-wider uppercase ${item.accent}`}
          >
            {item.subheading}
          </p>
        </div>

        <p className="text-xs leading-snug text-white/80 lg:text-base lg:leading-relaxed transition-colors duration-300 group-lit:text-white">
          {item.description}
        </p>
      </div>
    </m.div>
  );
}

export default function ConversionEcosystem() {
  return (
    <section
      id="ecosistema"
      className="relative scroll-mt-24 border-t border-fg/10 py-16 md:py-24 lg:py-32"
    >
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
        className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 lg:gap-16 lg:px-16"
      >
        <m.div variants={rise} className="flex max-w-3xl flex-col gap-6">
          <span className="block text-xs font-medium tracking-widest text-accent uppercase">
            Ecosistema digital de conversión
          </span>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.01em] lg:text-5xl">
            <span className="italic">Infraestructura comercial</span> diseñada{" "}
            <br className="hidden md:block" />
            para captar, calificar y cerrar.
          </h2>
        </m.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </m.div>
    </section>
  );
}
