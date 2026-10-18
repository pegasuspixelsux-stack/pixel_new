import { ArrowDown, MessageCircle } from "lucide-react";
import { ctaButton, secondaryButton } from "@/components/landing-styles";
import { menuAuditWhatsappHref } from "@/components/services/menu-engineering/whatsapp";

// Editorial hero: badge, headline, subheadline and the two CTAs (WhatsApp lead flow / jump to the sample report).
export default function MenuEngineeringHero() {
  return (
    <section className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
      <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-accent uppercase">
        <span aria-hidden className="size-1.5 rounded-full bg-accent" />
        Consultoría Financiera Gastronómica
      </span>
      <h1 className="font-inter-display max-w-4xl text-[2.2rem] leading-[1.05] font-medium tracking-[-0.03em] sm:text-5xl lg:text-6xl">
        Dejá de regalar margen en tu cocina.{" "}
        <span className="text-accent">Descubrí la rentabilidad real de cada plato.</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-fg/85 md:text-lg">
        Transformamos la carta de tu restaurante o food truck en una matriz de alta rentabilidad. Modelamos tus costos
        de insumos, estandarizamos porciones y optimizamos tus precios sin fricción operativa ni instalaciones en tu
        local.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href={menuAuditWhatsappHref} target="_blank" rel="noopener noreferrer" className={ctaButton}>
          <MessageCircle size={16} aria-hidden />
          Solicitar Auditoría Sin Costo
        </a>
        <a href="#entregables" className={secondaryButton}>
          Ver Ejemplo de Reporte
          <ArrowDown size={16} aria-hidden />
        </a>
      </div>
    </section>
  );
}
