"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useCenterLit } from "@/components/useCenterLit";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 24 },
  },
} as const;

interface FeaturedProject {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  href: string;
  /** Card background photo in /public. Cards without one get a gradient. */
  image?: string;
  /** Hover classes: border color + glow, and the accent color for badge and link. */
  glow: string;
  accent: string;
}

// Row 1: two wide cards. Row 2: three narrower cards.
const topRow: FeaturedProject[] = [
  {
    id: "01",
    badge: "Dealership OS",
    title: "Dealio",
    tagline: "Gestión automotriz de punta a punta",
    description:
      "Catálogo de vehículos, captura guiada de permutas y derivación directa de consultas a la fuerza de ventas.",
    category: "Automotriz",
    href: "/proyectos/dealio-automotriz",
    image: "/projects/dealio.png",
    glow: "lit:border-yellow-500/60 lit:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    accent: "text-yellow-500",
  },
  {
    id: "02",
    badge: "PropTech Portal",
    title: "Oikos",
    tagline: "Portal y catálogo inmobiliario",
    description:
      "Catálogo con filtrado avanzado, fichas descriptivas estandarizadas y captación automatizada de compradores.",
    category: "Inmobiliaria",
    href: "/proyectos/oikos-real-estate",
    image: "/projects/oikos.png",
    glow: "lit:border-yellow-500/60 lit:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    accent: "text-yellow-500",
  },
];

const bottomRow: FeaturedProject[] = [
  {
    id: "03",
    badge: "Digital Menu",
    title: "Hermio",
    tagline: "Menú digital y pedidos directos",
    description:
      "Catálogo interactivo de platos con pedidos estructurados y actualización en tiempo real para locales gastronómicos.",
    category: "Gastronomía",
    href: "/proyectos/hermio-gastronomia",
    image: "/projects/hermio.png",
    glow: "lit:border-yellow-500/60 lit:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    accent: "text-yellow-500",
  },
  {
    id: "04",
    badge: "Port Directory",
    title: "Nauta",
    tagline: "Guía y directorio operativo",
    description:
      "Directorio comercial e infraestructura de servicios para operaciones, embarcaciones y prestadores de servicios.",
    category: "Servicios",
    href: "/proyectos/nauta-pde-directorio",
    glow: "lit:border-yellow-500/60 lit:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    accent: "text-yellow-500",
  },
  {
    id: "05",
    badge: "Operations OS",
    title: "Talos",
    tagline: "Motor de operaciones",
    description:
      "El motor central sobre el que corren nuestras plataformas verticales: inventario, calificación de prospectos y seguimiento comercial.",
    category: "Operaciones",
    href: "/proyectos",
    glow: "lit:border-yellow-500/60 lit:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    accent: "text-yellow-500",
  },
];

function FeaturedCard({ project }: { project: FeaturedProject }) {
  const [ref, lit] = useCenterLit<HTMLAnchorElement>();
  return (
    <motion.div variants={cardVariants}>
      <Link
        ref={ref}
        data-lit={lit}
        href={project.href}
        className={`group relative flex aspect-square flex-col justify-between overflow-hidden rounded-2xl border border-fg/10 bg-[#0a0a0a] p-8 transition-all duration-300 ease-out motion-safe:lit:-translate-y-1 ${project.glow}`}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-lit:scale-105"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-slate-800 via-[#0a0a0a] to-[#000000]"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-transparent"
        />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <span
            className={`rounded-md border border-white/10 bg-slate-900/70 px-2.5 py-1 font-mono text-xs font-semibold tracking-wider uppercase backdrop-blur-md ${project.accent}`}
          >
            {project.badge}
          </span>
          <ArrowUpRight
            size={20}
            aria-hidden
            className="shrink-0 text-white/60 transition-[color,transform] duration-300 group-lit:translate-x-0.5 group-lit:-translate-y-0.5 group-lit:text-white"
          />
        </div>

        <div className="relative z-10 flex flex-col items-start gap-3 text-left text-white">
          <span className="font-mono text-xs tracking-wider text-white/50">
            {project.id}
          </span>
          <h3 className="font-serif text-3xl leading-tight tracking-[-0.01em]">
            {project.title}
          </h3>
          <p className={`text-sm font-medium ${project.accent}`}>
            {project.tagline}
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Grid() {
  return (
    <section id="proyectos" className="w-full scroll-mt-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-24 lg:px-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 160, damping: 24 }}
          className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex max-w-2xl flex-col gap-6">
            <span className="block text-xs font-medium tracking-widest text-yellow-500 uppercase">
              Plantillas core &amp; personalización
            </span>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.01em] md:text-5xl">
              Ecosistemas digitales preconstruidos para tu sector
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-fg/60">
            Creamos aplicaciones a la medida de industrias que conocemos a fondo. Tomamos una arquitectura sólida y
            probada, la adaptamos visualmente a tu marca y la configuramos para que salgas al mercado en días, no en
            meses.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.07 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {topRow.map((project) => (
              <FeaturedCard key={project.id} project={project} />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.07 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {bottomRow.map((project) => (
              <FeaturedCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/proyectos"
            className="flex items-center gap-2 rounded-full border border-fg/30 px-8 py-3.5 text-sm font-medium transition-[background-color,transform] duration-200 ease-out hover:bg-fg/10 active:scale-[0.97]"
          >
            Ver todos los proyectos
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
