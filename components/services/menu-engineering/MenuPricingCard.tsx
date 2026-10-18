import { Check, MessageCircle, ShieldCheck } from "lucide-react";
import LitCard from "@/components/LitCard";
import { cardHover, ctaButton, eyebrow, glass, h2 } from "@/components/landing-styles";
import { menuAuditWhatsappHref } from "@/components/services/menu-engineering/whatsapp";

const plans = [
  {
    name: "Auditoría y Setup Inicial",
    price: "$299",
    period: "pago único",
    features: [
      "Diagnóstico completo de tu carta",
      "Estandarización de porciones",
      "Primer mes de servicio incluido",
    ],
  },
  {
    name: "Mantenimiento Mensual (Radar)",
    price: "$99",
    period: "/ mes",
    features: [
      "Recálculo por inflación de insumos",
      "Alertas de desvío de costos",
      "Reestructuración ilimitada ante cambios de menú",
    ],
  },
];

export default function MenuPricingCard() {
  return (
    <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
      <div className="border-t border-fg/10 pt-20 md:pt-28">
        <div className="reveal-up">
          <p className={eyebrow}>Precios y garantía</p>
          <h2 className={`${h2} mt-4 max-w-3xl`}>Transparencia total, sin pago por adelantado</h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="reveal-up">
              <LitCard as="article" className={`${glass} ${cardHover} h-full rounded-2xl p-7 md:p-9`}>
                <h3 className="font-inter-display text-xl leading-snug font-medium md:text-2xl">{plan.name}</h3>
                <p className="mt-5 flex items-baseline gap-2">
                  <span className="font-inter-display text-5xl font-medium tracking-[-0.03em] text-accent">{plan.price}</span>
                  <span className="text-sm text-fg/80">{plan.period}</span>
                </p>
                <p className="mt-5 text-xs tracking-wider text-fg/70 uppercase">Incluye</p>
                <ul className="mt-3 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-fg/90 md:text-base">
                      <Check size={18} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </LitCard>
            </div>
          ))}
        </div>

        <div className="reveal-up mt-6 flex flex-col items-center gap-6 rounded-3xl border border-accent/40 bg-accent/[0.08] p-8 text-center shadow-[0_0_60px_-20px_var(--accent-glow)] backdrop-blur-md md:flex-row md:gap-10 md:p-12 md:text-left">
          <ShieldCheck size={48} aria-hidden className="shrink-0 text-accent" />
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">Garantía risk-free</p>
            <p className="font-inter-display mt-2 text-3xl font-medium tracking-[-0.03em] md:text-4xl">$0 de pago por adelantado</p>
            <p className="mt-3 text-base leading-relaxed text-fg/90 md:text-lg">
              Primero procesamos el análisis. Abonás únicamente al momento de la entrega, y solo si la auditoría te
              aporta un valor claro.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href={menuAuditWhatsappHref} target="_blank" rel="noopener noreferrer" className={ctaButton}>
            <MessageCircle size={16} aria-hidden />
            Solicitar Auditoría Sin Costo
          </a>
        </div>
      </div>
    </section>
  );
}
