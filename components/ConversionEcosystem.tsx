"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LazyPhoto from "@/components/LazyPhoto";
import * as m from "motion/react-m";
import { useCenterLit } from "@/components/useCenterLit";

const viewport = { once: true, margin: "-80px" };

const rise = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 22 },
  },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

// TEMPORARY placeholder photos, stored locally as WebP in /public/photos. Replace with real imagery.
const services = [
  {
    id: "01",
    // Phone mockup (pasta menu) on a white card, two columns: mockup on the left, text on the right, no gradient, no border, no glow.
    image: "/services_images/pasta_mockup.webp",
    imageClassName: "scale-[1.4] object-contain object-center p-2",
    bg: "bg-white",
    split: true,
    // "Ver más" goes to the Merkado landing, the product shown in the mockup.
    href: "/merkado",
    title: "Diseño Web",
    description:
      "Interfaces de alta gama, ultrarrápidas, diseñadas para un impacto visual máximo y una conversión móvil impecable.",
    card: "",
  },
  {
    id: "02",
    // Same layout as the Diseño Web card: inventory screen mockup on the left, text on the right, white card.
    image: "/services_images/inventario_mockup.webp",
    imageClassName: "scale-[1.4] object-contain object-center p-2",
    bg: "bg-white",
    split: true,
    // "Ver más" goes to the Dealio landing, the product shown in the mockup.
    href: "/dealio",
    title: "Bases de Datos",
    description:
      "Estructuras de datos dedicadas y robustas que garantizan control absoluto y una memoria de negocio confiable.",
    card: "",
  },
  {
    id: "03",
    image: "/services_images/automation_web.webp",
    title: "Automatizaciones",
    description:
      "Flujos inteligentes 24/7 y conexión directa a WhatsApp que transforman consultas en ventas listas para cerrar.",
    card: "lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]",
  },
];

function ServiceCard({ item }: { item: (typeof services)[number] }) {
  const [ref, lit] = useCenterLit<HTMLDivElement>();
  const split = item.split === true;
  return (
    <m.div
      ref={ref}
      data-lit={lit}
      variants={rise}
      className={`group relative flex ${split ? "flex-row justify-end" : "flex-col justify-end"} gap-6 isolate overflow-hidden rounded-2xl aspect-square ${split ? "" : "border border-fg/15"} ${item.bg ?? "bg-neutral-900"} p-5 pb-4 ${split ? "text-black" : "text-white"} lg:p-8 lg:pb-6 transition-all duration-300 ease-out motion-safe:lit:-translate-y-1 ${item.card}`}
    >
      <LazyPhoto
        src={item.image}
        sizes="(min-width: 640px) 50vw, calc(100vw - 3rem)"
        margin="300px"
        imageClassName={item.imageClassName}
        wrapperClassName={split ? "inset-y-0 left-0 w-1/2" : undefined}
      />
      {!split && (
        <>
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-black/5 via-black/5 to-transparent" />
          {/* Brown vertical gradient at the bottom, behind the white text */}
          <div
            aria-hidden
            className="absolute inset-x-0 -bottom-[20%] -z-10 h-3/5 bg-gradient-to-t from-[#5C3A21] via-[#5C3A21]/85 to-transparent"
          />
        </>
      )}

      <div className={`relative z-10 flex flex-col gap-1 lg:gap-2 ${split ? "w-1/2 self-center px-1.5 lg:px-2" : "w-full"}`}>
        <div className="flex flex-col gap-0 lg:gap-0.5">
          <h3 className={`font-serif leading-tight lg:text-3xl lg:leading-snug ${split ? "text-3xl" : "text-4xl"}`}>{item.title}</h3>
        </div>

        <p className={`-mt-0.5 text-sm leading-snug lg:-mt-1 lg:text-base lg:leading-normal ${split ? "text-black/70" : "text-white"}`}>
          {item.description}
        </p>
        {item.href && (
          <>
            <hr className="mt-3 border-0 border-t border-black/15 lg:mt-4" />
            <Link
              href={item.href}
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-black transition-[gap] duration-200 hover:gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Ver más
              <ArrowRight size={16} aria-hidden />
            </Link>
          </>
        )}
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
            para tu industria.
          </h2>
        </m.div>

        {children}
      </m.div>
    </section>
  );
}
