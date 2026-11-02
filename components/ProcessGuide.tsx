const steps = [
  {
    id: "01",
    title: "Conversamos",
    description:
      "Cuéntanos sobre tu negocio por WhatsApp o desde el formulario de contacto. Entendemos tu industria, tus clientes y qué necesitas lograr.",
  },
  {
    id: "02",
    title: "Diseñamos y construimos",
    description:
      "Te presentamos una propuesta clara con alcance, tiempos y precio. Al aprobarla, construimos tu plataforma y la adaptamos a tu marca, con avances que puedes revisar en el camino.",
  },
  {
    id: "03",
    title: "Lanzamos y damos soporte",
    description:
      "Publicamos tu sistema listo para captar clientes, capacitamos a tu equipo y damos seguimiento para que siga funcionando y creciendo contigo.",
  },
];

export default function ProcessGuide() {
  return (
    <section id="proceso" className="relative scroll-mt-24 border-t border-fg/10 py-12 md:py-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 lg:gap-14 lg:px-16">
        <div className="flex max-w-3xl flex-col gap-6">
          <span className="block text-xs font-medium tracking-widest text-accent uppercase">Cómo contratarnos</span>
          <h2 className="font-inter-display text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-5xl">
            Tres pasos para tener tu infraestructura digital funcionando.
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <li key={step.id} className="flex aspect-square flex-col justify-end gap-4 rounded-2xl border border-fg/15 p-6 transition-[border-color,box-shadow] duration-300 ease-out hover:border-accent/70 hover:shadow-[0_0_35px_var(--accent-glow)] lg:p-8">
              <span className="mb-auto self-start font-inter-display text-[min(8.55vw,2.5rem)] leading-none font-medium tracking-[-0.03em] text-accent lg:text-5xl">
                {step.id}
              </span>
              {/* Fixed-height text block: titles start at the same level; descriptions grow downward. */}
              <div className="flex min-h-[60%] flex-col gap-4">
                <h3 className="font-serif text-2xl leading-snug lg:text-3xl">{step.title}</h3>
                <p className="leading-relaxed text-fg/70">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
