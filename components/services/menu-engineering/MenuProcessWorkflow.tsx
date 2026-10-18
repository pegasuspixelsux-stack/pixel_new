import { Building2 } from "lucide-react";
import LitCard from "@/components/LitCard";
import { cardHover, eyebrow, glass, h2 } from "@/components/landing-styles";

const steps = [
  {
    label: "Paso 1",
    title: "Envío de Datos",
    meta: "5 min",
    text: "Nos enviás la foto o el PDF de tu menú actual y tus facturas o la lista de tus insumos clave.",
  },
  {
    label: "Paso 2",
    title: "Análisis de Oficina (Back-Office)",
    meta: "En nuestra oficina",
    text: "Modelamos mermas, desglosamos porciones, asignamos arquetipos y cruzamos los precios del mercado.",
  },
  {
    label: "Paso 3",
    title: "Entrega y Diagnóstico Ejecutivo",
    meta: "Sin riesgo",
    text: "Presentamos la matriz en vivo o te enviamos el reporte en PDF. Abonás únicamente si el estudio te resulta de valor.",
  },
];

export default function MenuProcessWorkflow() {
  return (
    <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
      <div className="border-t border-fg/10 pt-20 md:pt-28">
        <div className="reveal-up">
          <p className={eyebrow}>Protocolo de back-office</p>
          <h2 className={`${h2} mt-4 max-w-3xl`}>Tres pasos, cero trabajo técnico en tu salón</h2>
          <p className="mt-6 flex max-w-3xl items-start gap-3 text-base leading-relaxed text-fg/85 md:text-lg">
            <Building2 size={22} aria-hidden className="mt-1 shrink-0 text-accent" />
            No hay instalaciones ni tareas técnicas en tu local: todo se procesa de forma privada en nuestra oficina.
          </p>
        </div>
        <ol className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <li key={step.title} className="reveal-up">
              <LitCard className={`${glass} ${cardHover} h-full rounded-2xl p-7`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm tracking-wider text-accent uppercase">{step.label}</span>
                  <span className="rounded-full border border-fg/20 px-3 py-0.5 text-xs text-fg/80">{step.meta}</span>
                </div>
                <h3 className="font-inter-display mt-5 text-xl leading-snug font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg/80">{step.text}</p>
              </LitCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
