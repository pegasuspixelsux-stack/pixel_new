"use client";

import * as m from "motion/react-m";

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
    <section id="propuesta" className="relative scroll-mt-24 border-t border-fg/10 py-12 md:py-14 lg:py-16">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
        className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-16"
      >
        <m.div variants={rise} className="flex flex-col gap-6 lg:col-span-5">
          <span className="block text-xs font-medium tracking-widest text-accent uppercase">
            Optimización comercial digital
          </span>
          <h2 className="font-inter-display text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-5xl">
            El estándar digital que tu equipo necesita para captar y cerrar más clientes.
          </h2>
        </m.div>

        <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7 lg:self-center">
          <p className="leading-relaxed text-fg/70">
            Potenciamos la cara visible de tu negocio mediante catálogos inteligentes, fichas de inventario ágiles y flujos de calificación automatizados. Guiamos a tu visitante desde la primera impresión hasta el contacto directo, garantizando que tu equipo reciba prospectos calificados, listos para comprar, con el seguimiento organizado y toda la información clave para cerrar el trato al instante.
          </p>
          <p className="leading-relaxed text-fg/70">
            Creamos aplicaciones a la medida de industrias que conocemos a fondo. Tomamos una arquitectura sólida y probada, la adaptamos visualmente a tu marca y la configuramos para que salgas al mercado en días, no en meses.
          </p>
        </div>
      </m.div>
    </section>
  );
}
