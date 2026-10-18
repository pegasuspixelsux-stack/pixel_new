import { ClipboardList, Printer, TrendingUp } from "lucide-react";
import LitCard from "@/components/LitCard";
import { cardHover, eyebrow, glass, h2 } from "@/components/landing-styles";

// Visual mock-ups of what the client receives. All names and figures are illustrative examples, not client data.

const dishes = [
  {
    name: "Smash Doble Cheddar",
    foodCost: 48,
    margin: 52,
    emoji: "🔴",
    verdict: "Riesgo / Ajustar $50",
    border: "border-rose-500/60 bg-rose-500/10",
    dot: "bg-rose-500",
  },
  {
    name: "Chivito al Pan",
    foodCost: 38,
    margin: 62,
    emoji: "🟡",
    verdict: "Aceptable",
    border: "border-amber-400/60 bg-amber-400/10",
    dot: "bg-amber-400",
  },
  {
    name: "Milanesa Napolitana",
    foodCost: 28,
    margin: 72,
    emoji: "🟢",
    verdict: "Óptimo",
    border: "border-emerald-500/60 bg-emerald-500/10",
    dot: "bg-emerald-500",
  },
];

const portions = [
  { item: "Carne", grams: "200 g" },
  { item: "Papas", grams: "180 g" },
  { item: "Queso", grams: "60 g" },
];

export default function DeliverablesShowcase() {
  return (
    <section id="entregables" className="relative mx-auto w-full max-w-[1100px] scroll-mt-24 px-6 pb-20 md:pb-28">
      <div className="border-t border-fg/10 pt-20 md:pt-28">
        <div className="reveal-up">
          <p className={eyebrow}>Entregables</p>
          <h2 className={`${h2} mt-4 max-w-3xl`}>Así se ve el reporte que recibís</h2>
          <p className="mt-6 inline-flex rounded-full border border-fg/20 px-4 py-1.5 text-xs tracking-wide text-fg/80">
            Ejemplo ilustrativo con datos ficticios
          </p>
        </div>

        {/* 1. Semáforo de Margen */}
        <div className="reveal-up mt-14 flex items-center gap-3">
          <span className="size-2 rounded-full bg-accent" aria-hidden />
          <h3 className="font-inter-display text-xl font-medium md:text-2xl">Semáforo de Margen</h3>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-6">
          {dishes.map((dish) => (
            <div key={dish.name} className="reveal-up">
              <LitCard as="article" className={`${cardHover} h-full rounded-2xl border p-6 backdrop-blur-md ${dish.border}`}>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span aria-hidden>{dish.emoji}</span>
                  {dish.verdict}
                </div>
                <h4 className="font-inter-display mt-4 text-xl leading-snug font-medium">{dish.name}</h4>
                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-fg/70">Food Cost</dt>
                    <dd className="font-inter-display text-2xl font-medium">{dish.foodCost}%</dd>
                  </div>
                  <div>
                    <dt className="text-fg/70">Margen</dt>
                    <dd className="font-inter-display text-2xl font-medium">{dish.margin}%</dd>
                  </div>
                </dl>
                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-fg/10" aria-hidden>
                  <div className={`h-full rounded-full ${dish.dot}`} style={{ width: `${dish.margin}%` }} />
                </div>
              </LitCard>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-6">
          {/* 2. Ficha técnica */}
          <div className="reveal-up">
            <LitCard as="article" className={`${glass} ${cardHover} h-full rounded-2xl p-7 md:p-9`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-inter-display text-xl font-medium md:text-2xl">Ficha Técnica para Cocina</h3>
                <Printer size={20} aria-hidden className="shrink-0 text-accent" />
              </div>
              <p className="mt-2 text-sm text-fg/80">Smash Doble Cheddar · hoja imprimible para el equipo</p>
              <ul className="mt-6 flex flex-col gap-3">
                {portions.map(({ item, grams }) => (
                  <li key={item} className="flex items-baseline gap-3 border-b border-dashed border-fg/20 pb-3">
                    <span className="text-base">{item}</span>
                    <span className="ml-auto font-mono text-lg font-medium text-accent">{grams}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-fg/70">Las porciones exactas evitan que el margen cambie según quién cocine.</p>
            </LitCard>
          </div>

          {/* 3. Plan de acción */}
          <div className="reveal-up">
            <LitCard as="article" className={`${glass} ${cardHover} h-full rounded-2xl p-7 md:p-9`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-inter-display text-xl font-medium md:text-2xl">Plan de Acción y Precios Sugeridos</h3>
                <ClipboardList size={20} aria-hidden className="shrink-0 text-accent" />
              </div>
              <div className="mt-6 flex items-center gap-4 rounded-xl border border-accent/40 bg-accent/10 p-5">
                <TrendingUp size={28} aria-hidden className="shrink-0 text-accent" />
                <div>
                  <p className="text-sm text-fg/80">Recupero estimado</p>
                  <p className="font-inter-display text-3xl font-medium">$35.000/mes</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-col gap-3 text-sm leading-relaxed text-fg/90">
                <li>🔴 Smash Doble Cheddar: ajustar el precio en $50.</li>
                <li>🟡 Chivito al Pan: mantener y vigilar el costo del pan y la carne.</li>
                <li>🟢 Milanesa Napolitana: destacarla en la carta como plato estrella.</li>
              </ul>
            </LitCard>
          </div>
        </div>
      </div>
    </section>
  );
}
