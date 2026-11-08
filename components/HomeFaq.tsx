import { Plus } from "lucide-react";
import { glass } from "@/components/landing-styles";

const items = [
  {
    q: "¿En qué se diferencia Pegasus Pixels de una agencia web tradicional?",
    a: "No nos limitamos a diseñar interfaces visuales. Construimos soluciones integrales que combinan desarrollo web de alto rendimiento, automatización de procesos operativos y arquitectura de sistemas a medida para optimizar la rentabilidad de tu negocio.",
  },
  {
    q: "¿Cómo funcionan las plataformas propietarias como Dealio u Oikos?",
    a: "Son soluciones de infraestructura digital listas para operar. Desplegamos el sistema adaptado a la identidad de tu empresa, permitiéndote gestionar inventario, mostrar catálogos y captar clientes con tiempos de implementación significativamente reducidos.",
  },
  {
    q: "¿El desarrollo se adapta a las herramientas que ya utiliza mi empresa?",
    a: "Sí. Diseñamos nuestras soluciones e integraciones para conectar de manera fluida con tus canales de comunicación, bases de datos y sistemas actuales, eliminando tareas manuales y duplicación de datos.",
  },
  {
    q: "¿Quién mantiene el control del sistema una vez puesto en marcha?",
    a: "Tu empresa mantiene el control operativo completo sobre la plataforma. Adicionalmente, brindamos soporte y acompañamiento técnico continuo para asegurar un rendimiento óptimo en todo momento.",
  },
];

export default function HomeFaq() {
  return (
    <section id="faq" className="hero-dark-alt relative scroll-mt-24 py-12 md:py-14 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1440px] items-start gap-10 px-6 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:px-16">
        <div className="flex flex-col gap-4">
          <span className="block text-xs font-medium tracking-widest text-[#FFFF00] uppercase">Preguntas frecuentes</span>
          <h2 className="font-inter-display text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-5xl">Preguntas frecuentes.</h2>
          <p className="text-base leading-relaxed text-fg/70 md:text-lg">Respuestas claras sobre nuestra metodología, modelo de trabajo e infraestructura.</p>
        </div>
        <div className="flex flex-col gap-4">
          {items.map(({ q, a }) => (
            <details key={q} className={`group rounded-2xl p-5 lg:p-6 ${glass}`}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-xl leading-snug lg:text-2xl [&::-webkit-details-marker]:hidden">
                {q}
                <Plus size={22} aria-hidden className="mt-1 shrink-0 text-[#FFFF00] transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-4 leading-relaxed text-fg/70 md:text-lg">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
