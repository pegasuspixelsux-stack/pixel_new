"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { initialProjects } from "@/config/projects";
import ProjectCard from "@/components/ProjectCard";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 24 },
  },
} as const;

export default function Grid() {
  // 2 columns x 2 rows on desktop: four featured case studies.
  const featured = initialProjects.filter((project) => project.featured).slice(0, 4);

  return (
    <section id="proyectos" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-6 py-24 lg:px-16 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 160, damping: 24 }}
        className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <h2 className="font-serif text-4xl leading-tight tracking-[-0.01em] md:text-5xl">Proyectos destacados</h2>
        <p className="max-w-sm text-sm leading-relaxed text-fg/60">
          Casos reales de infraestructura digital implementada para empresas de distintos rubros.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.07 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {featured.map((project, index) => (
          <motion.div key={project.id} variants={cardVariants} whileHover={{ y: -4 }}>
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/proyectos"
          className="flex items-center gap-2 rounded-full border border-fg/30 px-8 py-3.5 text-sm font-medium transition-[background-color,transform] duration-200 ease-out hover:bg-fg/10 active:scale-[0.97]"
        >
          Ver todos los proyectos
          <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
