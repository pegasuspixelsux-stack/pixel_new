import { Check } from "lucide-react";
import LitCard from "@/components/LitCard";
import { cardHover, glass } from "@/components/landing-styles";

const services = [
  {
    title: "Consultoría Tecnológica & Estrategia",
    text: "Auditamos tu ecosistema digital actual y diseñamos la arquitectura técnica adecuada para tu modelo de negocio.",
    items: [
      { label: "Diagnóstico operativo", text: "Identificación de cuellos de botella y optimización de recursos tecnológicos." },
      { label: "Selección de stack técnico", text: "Implementación de herramientas modernas, eficientes y verdaderamente necesarias." },
      { label: "Plan de escalabilidad", text: "Estructuración de sistemas preparados para crecer a la par de tu volumen de ventas." },
    ],
  },
  {
    title: "Automatización de Flujos de Trabajo",
    text: "Transformamos tareas manuales y repetitivas en procesos automáticos, continuos y sin margen de error.",
    items: [
      { label: "Integración de plataformas", text: "Conexión directa entre tus formularios, mensajería, bases de datos y herramientas internas." },
      { label: "Gestión de prospectos en tiempo real", text: "Enrutamiento e hidratación automática de consultas directo a WhatsApp o CRM." },
      { label: "Reducción de costos operativos", text: "Eliminación de fricción manual para liberar el tiempo de tu equipo comercial." },
    ],
  },
  {
    title: "Desarrollo Web & Plataformas a Medida",
    text: "Construimos aplicaciones web de alto rendimiento, optimizadas para carga rápida y enfocadas en la conversión.",
    items: [
      { label: "Arquitectura moderna", text: "Desarrollo rápido, ligero y optimizado para una perfecta visualización en dispositivos móviles." },
      { label: "Catálogos y sistemas verticales", text: "Soluciones personalizadas para la gestión y presentación de productos o inventarios." },
      { label: "Experiencia de usuario orientada al resultado", text: "Interfaces limpias que guían al cliente directo a la acción." },
    ],
  },
  {
    title: "Sistemas de Gestión & Infraestructura",
    text: "Diseñamos los paneles y la lógica interna que tu negocio requiere para mantener el control total de la operación.",
    items: [
      { label: "Paneles de administración centralizados", text: "Control simplificado de datos, productos y métricas relevantes." },
      { label: "Bases de datos optimizadas", text: "Almacenamiento seguro, estructurado y de respuesta inmediata." },
      { label: "Disponibilidad y rendimiento", text: "Despliegue de infraestructura sólida con alta tolerancia a cargas de tráfico." },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="hero-dark-alt relative scroll-mt-24 py-12 md:py-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 lg:gap-14 lg:px-16">
        <div className="flex max-w-3xl flex-col gap-4">
          <h2 className="font-inter-display text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-5xl">
            Soluciones digitales integrales diseñadas para hacer crecer tu negocio.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-fg/70 md:text-lg">
            Acompañamos la evolución de tu empresa con infraestructura robusta, automatización de procesos y desarrollo web enfocado en la rentabilidad.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, i) => (
            <LitCard as="li" key={service.title} className={`flex flex-col gap-5 rounded-2xl p-6 lg:p-8 ${glass} ${cardHover}`}>
              <span className="font-inter-display text-5xl leading-none font-medium tracking-[-0.03em] text-[#FFFF00]">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-2xl leading-snug lg:text-3xl">{service.title}</h3>
                <p className="leading-relaxed text-fg/70">{service.text}</p>
              </div>
              <ul className="flex flex-col gap-3 border-t border-fg/10 pt-5">
                {service.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-fg/80">
                    <Check size={18} aria-hidden className="mt-1 shrink-0 text-[#FFFF00]" />
                    <span className="leading-relaxed">
                      <strong className="font-medium text-fg">{item.label}:</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </LitCard>
          ))}
        </ol>
      </div>
    </section>
  );
}
