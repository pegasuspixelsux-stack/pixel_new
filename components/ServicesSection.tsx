import { ServiceGrid } from "@/components/ConversionEcosystem";

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative scroll-mt-24 border-t border-fg/10 py-12 md:py-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 lg:gap-14 lg:px-16">
        <div className="flex max-w-3xl flex-col gap-6">
          <span className="block text-xs font-medium tracking-widest text-accent uppercase">Nuestros servicios</span>
          <h2 className="font-inter-display text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-5xl">
            Todo lo que tu negocio necesita para operar en digital.
          </h2>
        </div>
        <ServiceGrid />
      </div>
    </section>
  );
}
