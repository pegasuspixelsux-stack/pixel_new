// Two columns: eyebrow and heading on the left, support text on the right. Solid navy like the other dark sections.
export default function CaptureSection() {
  return (
    <section id="captacion" className="relative scroll-mt-24 py-12 md:py-14 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-6 lg:grid-cols-12 lg:gap-16 lg:px-16">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <span className="block text-xs font-medium tracking-widest text-accent uppercase">Optimización comercial digital</span>
          <h2 className="font-inter-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] lg:text-5xl">
            La infraestructura que conecta a tu comprador con tu equipo al instante.
          </h2>
        </div>
        <p className="leading-relaxed text-fg/70 md:text-lg lg:col-span-5 lg:col-start-8 lg:self-center">
          Potenciamos la cara visible de tu negocio mediante catálogos inteligentes, fichas de inventario ágiles y flujos de calificación automatizados. Guiamos a tu visitante desde la primera impresión hasta el contacto directo, garantizando que tu equipo reciba prospectos calificados, listos para comprar, con el seguimiento organizado y toda la información clave para cerrar el trato al instante.
        </p>
      </div>
    </section>
  );
}
