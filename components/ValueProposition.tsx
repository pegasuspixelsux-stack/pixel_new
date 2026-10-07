"use client";

import { motion } from "motion/react";

const viewport = { once: true, margin: "-80px" };

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 24 } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ValueProposition() {
  return (
    <section id="propuesta" className="relative scroll-mt-24 border-t border-fg/10 py-16 md:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
        className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-16"
      >
        <motion.div variants={rise} className="flex flex-col gap-6 lg:col-span-5">
          <span className="block text-xs font-medium tracking-widest text-yellow-500 uppercase">
            Optimización comercial digital
          </span>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.01em] lg:text-5xl">
            El estándar digital que tu equipo necesita para captar y cerrar más clientes.
          </h2>
        </motion.div>

        <motion.p variants={rise} className="leading-relaxed text-fg/70 lg:col-span-6 lg:col-start-7 lg:self-center">
          Potenciamos la cara visible de tu negocio mediante catálogos inteligentes, fichas de inventario ágiles y flujos de calificación automatizados. Guiamos a tu visitante desde la primera impresión hasta el contacto directo, garantizando que tu equipo reciba prospectos calificados, listos para comprar, con el seguimiento organizado y toda la información clave para cerrar el trato al instante.
        </motion.p>
      </motion.div>
    </section>
  );
}
