"use client";

import Image from "next/image";
import { motion } from "motion/react";

const spring = { type: "spring", stiffness: 180, damping: 26 } as const;

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

export default function Hero() {
  return (
    // Starts at the top of the viewport, underneath the 80px sticky navbar.
    <section className="relative isolate -mt-20 flex min-h-svh w-full items-center overflow-hidden pt-20 text-white">
      <Image
        src="/hero/punta%20(2).jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center motion-safe:animate-[hero-settle_2.4s_ease-out_both]"
      />
      {/* Dark wash on the left keeps the copy readable over the photo in both themes */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 to-transparent"
      />
      {/* Deep slate glow anchored to the bottom-left corner, fading out toward the top-right. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_100%,rgba(7,10,17,0.9)_0%,rgba(7,10,17,0.5)_50%,transparent_100%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-[1440px] px-6 lg:px-16"
      >
        <div className="max-w-xl">
          <motion.p variants={rise} className="mb-6 text-sm text-white/80">
            PEGASUS PIXELS
          </motion.p>

          <motion.h1
            variants={rise}
            className="mb-6 font-serif text-5xl leading-[1.05] tracking-[-0.02em] md:text-6xl lg:text-7xl"
          >
            <span className="text-emerald-300">Tu socio tecnológico.</span>{" "}
            <span className="italic">Diseñamos tu infraestructura digital.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mb-8 max-w-md text-base leading-relaxed text-white/80"
          >
            Modernizamos la operación de tu empresa integrando captación de clientes, catálogos digitales y automatización de procesos bajo un estándar único para todo tu equipo.
          </motion.p>

          <motion.div variants={rise} className="flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[#0D0E12] shadow-[0_0_0_rgba(255,255,255,0)] transition-[background-color,transform,box-shadow] duration-300 ease-out hover:bg-white/90 hover:shadow-[0_0_32px_rgba(255,255,255,0.22)] active:scale-[0.97]"
            >
              Agendar Diagnóstico
            </a>
            <a
              href="#proyectos"
              className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-medium transition-[background-color,transform] duration-200 ease-out hover:bg-white/10 active:scale-[0.97]"
            >
              Ver Casos de Éxito
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
