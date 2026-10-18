"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LazyPhoto from "@/components/LazyPhoto";
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
    slug: "catalogos-digitales",
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
    slug: "agente-de-calificacion",
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
    slug: "conexion-directa",
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
    slug: "pipeline-de-seguimiento",
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
      className={`group relative flex flex-col justify-between gap-6 isolate overflow-hidden rounded-2xl aspect-square border border-fg/15 bg-canvas p-5 pb-4 text-fg lg:p-12 lg:pb-8 transition-all duration-300 ease-out motion-safe:lit:-translate-y-1 ${item.card}`}
    >
      <LazyPhoto src={item.image} sizes="(min-width: 640px) 50vw, calc(100vw - 3rem)" margin="300px" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-canvas via-canvas/70 via-34% to-transparent to-70%" />
      {/* Soft corner gradient under the number, so it reads on any photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_240px_at_0_0,color-mix(in_srgb,var(--canvas)_55%,transparent),transparent)]"
      />

      <div className="flex items-center justify-between">
        <span className="font-inter-display text-[min(8.55vw,2.5rem)] leading-none font-medium tracking-[-0.03em] text-fg md:text-[min(4.6vw,4.5rem)]">
          {item.id}
        </span>
      </div>

      <div className="flex flex-col gap-1 lg:gap-2">
        <div className="flex flex-col gap-0 lg:gap-0.5">
          <p
            className={`font-mono text-xs tracking-wider uppercase ${item.accent}`}
          >
            {item.subheading}
          </p>
          <h3 className="font-serif text-xl leading-snug lg:text-4xl">{item.title}</h3>
        </div>

        <p className="-mt-0.5 text-xs leading-snug text-fg lg:-mt-1 lg:text-base lg:leading-normal transition-colors duration-300 group-lit:text-fg">
          {item.description}
        </p>
        {/* The ::after stretches this link over the whole card, so the card itself is clickable */}
        <Link
          href={`/servicios/${item.slug}`}
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent after:absolute after:inset-0 after:content-['']"
        >
          Ver servicio
          <ArrowRight size={14} aria-hidden className="transition-transform duration-200 group-lit:translate-x-1" />
        </Link>
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
