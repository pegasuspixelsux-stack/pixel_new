import { HeartPulse, MapPinned, Radar, Scale } from "lucide-react";
import LitCard from "@/components/LitCard";
import { cardHover, eyebrow, glass, h2 } from "@/components/landing-styles";

const pillars = [
  {
    icon: HeartPulse,
    title: "Diagnóstico de Salud Financiera",
    text: "Cruzamos el precio de cada plato de tu carta con el costo real de sus ingredientes, para ver qué te deja margen y qué te lo quita.",
  },
  {
    icon: Scale,
    title: "Estandarización de Porciones y Fichas Técnicas",
    text: "Definimos con precisión los gramos de proteína y guarnición de cada plato, para que el margen no cambie según quién cocine.",
  },
  {
    icon: MapPinned,
    title: "Benchmarking de Mercado Local",
    text: "Contrastamos tus precios con los de la competencia regional en Maldonado, Punta del Este o el mercado que quieras atender.",
  },
  {
    icon: Radar,
    title: "Radar Mensual de Insumos",
    text: "Monitoreamos mes a mes la inflación mayorista (carne, aceites, lácteos) para que tus precios no se queden atrás.",
  },
];

export default function MenuValueProps() {
  return (
    <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
      <div className="reveal-up">
        <p className={eyebrow}>El problema y la solución</p>
        <h2 className={`${h2} mt-4 max-w-3xl`}>Cuatro frentes para proteger tu margen</h2>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="reveal-up">
            <LitCard as="article" className={`${glass} ${cardHover} h-full rounded-2xl p-7 md:p-9`}>
              <Icon size={28} aria-hidden className="text-accent" />
              <h3 className="font-inter-display mt-5 text-xl leading-snug font-medium md:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg/80 md:text-base">{text}</p>
            </LitCard>
          </div>
        ))}
      </div>
    </section>
  );
}
