import { Check } from "lucide-react";
import HorizontalPin from "@/components/HorizontalPin";
import LitCard from "@/components/LitCard";
import { cardHover, glass } from "@/components/landing-styles";

const services = [
  {
    title: "Consultoría Tecnológica & Estrategia",
    text: "Auditamos tu ecosistema digital actual y diseñamos la arquitectura técnica adecuada para acelerar tu modelo de negocio.",
    items: [
      { label: "Optimización operativa", text: "Diagnóstico de procesos para maximizar tus recursos." },
      { label: "Selección de stack técnico", text: "Herramientas modernas alineadas con tus objetivos." },
      { label: "Plan de escalabilidad", text: "Sistemas listos para un mayor volumen de ventas." },
    ],
  },
  {
    title: "Automatización de Flujos de Trabajo",
    text: "Transformamos tareas manuales en procesos continuos, ágiles y con máxima precisión operativa.",
    items: [
      { label: "Integración de plataformas", text: "Conexión directa entre formularios, mensajería y bases de datos." },
      { label: "Gestión de prospectos en tiempo real", text: "Consultas directo a WhatsApp y tus canales." },
      { label: "Eficiencia operativa", text: "Más tiempo para que tu equipo cierre ventas." },
    ],
  },
  {
    title: "Desarrollo Web & Plataformas",
    text: "Construimos aplicaciones web de alto rendimiento, optimizadas para carga inmediata y enfocadas en la conversión.",
    items: [
      { label: "Arquitectura moderna", text: "Respuesta rápida y experiencia impecable en móviles." },
      { label: "Catálogos y plataformas por industria", text: "Soluciones a medida de tu sector." },
      { label: "Experiencia orientada a resultados", text: "Interfaces que guían al cliente a la acción." },
    ],
  },
  {
    title: "Sistemas de Gestión & Infraestructura",
    text: "Diseñamos los paneles y la lógica interna que tu negocio requiere para mantener el control total de la operación.",
    items: [
      { label: "Paneles de administración centralizados", text: "Control simple de datos y métricas." },
      { label: "Bases de datos estructuradas", text: "Almacenamiento seguro y consulta inmediata." },
      { label: "Alta disponibilidad", text: "Infraestructura sólida ante altos volúmenes de tráfico." },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative scroll-mt-24 py-12 md:py-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 lg:gap-14 lg:px-16">
        <div className="flex max-w-3xl flex-col gap-4">
          <h2 className="font-inter-display text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-5xl">
            Soluciones que impulsan<br className="hidden sm:block" /> el crecimiento de tu empresa.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-fg/70 md:text-lg">
            Acompañamos la evolución de tu negocio con infraestructura robusta, automatización de procesos y desarrollo web enfocado en la rentabilidad.
          </p>
        </div>

        <HorizontalPin as="ol" breakpoint="md" gridClassName="md:grid-cols-2">
          {services.map((service, i) => (
            <LitCard as="li" key={service.title} className={`flex w-[75vw] shrink-0 snap-start flex-col gap-5 rounded-2xl p-6 md:w-auto lg:p-8 ${glass} ${cardHover}`}>
              <span className="font-inter-display text-5xl leading-none font-medium tracking-[-0.03em] text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-2xl leading-snug lg:text-3xl">{service.title}</h3>
                <p className="leading-relaxed text-fg/70">{service.text}</p>
              </div>
              <ul className="flex flex-col gap-3 border-t border-fg/10 pt-5">
                {service.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-fg/80">
                    <Check size={18} aria-hidden className="mt-1 shrink-0 text-accent" />
                    <span className="leading-relaxed">
                      <strong className="font-medium text-fg">{item.label}:</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </LitCard>
          ))}
        </HorizontalPin>
      </div>
    </section>
  );
}
