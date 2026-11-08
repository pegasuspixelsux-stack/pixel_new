import { CheckCircle2 } from "lucide-react";
import LitCard from "@/components/LitCard";
import { cardHover, glass } from "@/components/landing-styles";

const steps = [
  {
    title: "Consulta inicial & diagnóstico",
    time: "15 a 30 min",
    text: "Analizamos la estructura actual de tu negocio, evaluamos los cuellos de botella operativos y definimos el alcance exacto de la solución que necesitas.",
    verification: "Salimos de la reunión con el requerimiento claro y la arquitectura propuesta definida.",
  },
  {
    title: "Propuesta & alcance estratégico",
    time: "24 a 48 hs",
    text: "Te presentamos un plan de trabajo detallado con la arquitectura del sistema, los entregables exactos, los tiempos de ejecución y la inversión final sin costos ocultos.",
    verification: "Aprobación del alcance y confirmación del cronograma de despliegue.",
  },
  {
    title: "Desarrollo, integración & pruebas",
    time: "Ejecución",
    text: "Construimos y configuramos la infraestructura (diseño, automatizaciones o plataformas verticales), realizando pruebas de velocidad, integración y carga en entornos de staging.",
    verification: "Demostración funcional en vivo y validación de flujos de trabajo en tiempo real.",
  },
  {
    title: "Despliegue & acompañamiento",
    time: "Puesta en marcha",
    text: "Lanzamos tu sistema a producción en servidores optimizados y capacitamos a tu equipo para la gestión diaria. La plataforma queda totalmente bajo tu control operativo.",
    verification: "Sistema en vivo captando leads, procesando inventario o ejecutando automatizaciones.",
  },
];

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="hero-dark-alt relative scroll-mt-24 py-12 md:py-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 lg:gap-14 lg:px-16">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="block text-xs font-medium tracking-widest text-[#FFFF00] uppercase">Pasos para contratarnos</span>
          <h2 className="font-inter-display text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-5xl">Cómo trabajamos.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-fg/70 md:text-lg">
            Un proceso directo, transparente y enfocado en desplegar soluciones listas para operar sin rodeos técnicos ni demoras innecesarias.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <LitCard as="li" key={step.title} className={`flex flex-col gap-4 rounded-2xl p-6 lg:p-8 ${glass} ${cardHover}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="font-inter-display text-5xl leading-none font-medium tracking-[-0.03em] text-[#FFFF00]">{String(i + 1).padStart(2, "0")}</span>
                <span className="rounded-full border border-fg/25 px-3 py-1 text-xs font-medium tracking-wider text-fg/80 uppercase">{step.time}</span>
              </div>
              <h3 className="font-serif text-2xl leading-snug">{step.title}</h3>
              <p className="leading-relaxed text-fg/70">{step.text}</p>
              <p className="mt-auto flex items-start gap-2.5 border-t border-fg/10 pt-4 text-sm leading-relaxed text-fg/80">
                <CheckCircle2 size={18} aria-hidden className="mt-0.5 shrink-0 text-[#FFFF00]" />
                <span>
                  <strong className="font-medium text-fg">Verificación:</strong> {step.verification}
                </span>
              </p>
            </LitCard>
          ))}
        </ol>
      </div>
    </section>
  );
}
