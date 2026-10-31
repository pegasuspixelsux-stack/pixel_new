"use client";

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
    image: "/hero/app_mockup_1.webp",
    title: "Diseño Web",
    description:
      "Interfaces de alta gama, ultrarrápidas, diseñadas para un impacto visual máximo y una conversión móvil impecable.",
    card: "lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]",
  },
  {
    id: "02",
    image: "/photos/1519389950473-47ba0277781c.webp",
    title: "Arquitectura de Bases de Datos",
    description:
      "Estructuras de datos dedicadas y robustas que garantizan control absoluto y una memoria de negocio confiable.",
    card: "lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]",
  },
  {
    id: "03",
    image: "/photos/1556761175-5973dc0f32e7.webp",
    title: "Automatizaciones",
    description:
      "Flujos inteligentes 24/7 y enrutamiento directo a WhatsApp que transforman consultas en pedidos listos para cerrar.",
    card: "lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]",
  },
];

function ServiceCard({ item }: { item: (typeof services)[number] }) {
  const [ref, lit] = useCenterLit<HTMLDivElement>();
  return (
    <m.div
      ref={ref}
      data-lit={lit}
      variants={rise}
      className={`group relative flex flex-col justify-between gap-6 isolate overflow-hidden rounded-2xl aspect-square border border-fg/15 bg-neutral-900 p-5 pb-4 text-white lg:p-8 lg:pb-6 transition-all duration-300 ease-out motion-safe:lit:-translate-y-1 ${item.card}`}
    >
      <LazyPhoto src={item.image} sizes="(min-width: 640px) 50vw, calc(100vw - 3rem)" margin="300px" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-black/5 via-black/5 to-transparent" />
      {/* Dark grey corner glow behind the number */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_320px_at_0_0,rgba(64,64,64,0.85),transparent)]"
      />

      <div className="flex items-center justify-between">
        <span className="font-inter-display text-[min(8.55vw,2.5rem)] relative z-10 leading-none font-medium tracking-[-0.03em] text-white md:text-[min(4.6vw,4.5rem)]">
          {item.id}
        </span>
      </div>

      <div className="relative z-10 flex w-1/2 flex-col gap-1 sm:w-3/4 lg:gap-2">
        <div className="flex flex-col gap-0 lg:gap-0.5">
          <h3 className="font-serif text-xl leading-snug lg:text-3xl">{item.title}</h3>
        </div>

        <p className="-mt-0.5 text-xs leading-snug text-slate-200 lg:-mt-1 lg:text-base lg:leading-normal transition-colors duration-300 group-lit:text-white">
          {item.description}
        </p>
      </div>
    </m.div>
  );
}

export function ServiceGrid() {
  return (
    <m.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
    >
      {services.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </m.div>
  );
}

export default function ConversionEcosystem({ children }: { children: React.ReactNode }) {
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

        {children}
      </m.div>
    </section>
  );
}
