import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import LitCard from "@/components/LitCard";
import { cardHover, glass } from "@/components/landing-styles";

const products = [
  {
    name: "Dealio",
    subtitle: "Plataforma Comercial Automotriz",
    text: "Sistema de gestión de inventario y agendamiento de visitas diseñado para concesionarios y automotoras.",
    href: "/dealio",
    items: [
      { label: "Agendamiento directo", text: "Convierte el interés en visitas presenciales al concesionario integrando canales de comunicación inmediata." },
      { label: "Catálogo y fichas técnicas", text: "Presentación clara de vehículos con imágenes de alta velocidad y especificaciones técnicas detalladas." },
      { label: "Filtros de búsqueda ágiles", text: "Navegación optimizada por marca, modelo, precio y año para acelerar la decisión del comprador." },
    ],
  },
  {
    name: "Oikos",
    subtitle: "Ecosistema Inmobiliario",
    text: "Plataforma de presentación y captación de propiedades para desarrollos inmobiliarios y agencias de bienes raíces.",
    href: "/oikos",
    items: [
      { label: "Catálogo de propiedades", text: "Visualización de alta definición para fichas de inmuebles, ubicaciones y características destacadas." },
      { label: "Generación de consultas", text: "Captación estructurada de compradores e inversores directamente conectados con el equipo de ventas." },
      { label: "Arquitectura de carga ultrarrápida", text: "Experiencia fluida para el usuario final tanto en dispositivos móviles como de escritorio." },
    ],
  },
  {
    name: "Nomos",
    subtitle: "Gestión y Catálogo Corporativo",
    text: "Infraestructura digital estructurada para empresas, consultoras y distribuidores que requieren organización centralizada de oferta o servicios.",
    href: undefined,
    items: [
      { label: "Estructura de catálogo a medida", text: "Organización clara de servicios, productos o soluciones corporativas." },
      { label: "Captación y derivación de prospectos", text: "Enrutamiento directo de requerimientos comerciales hacia los responsables operativos." },
      { label: "Gestión simplificada", text: "Interfaz de administración rápida para mantener datos y contenidos actualizados en todo momento." },
    ],
  },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="hero-dark-alt relative scroll-mt-24 py-12 md:py-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 lg:gap-14 lg:px-16">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="block text-xs font-medium tracking-widest text-[#FFFF00] uppercase">Productos y soluciones propietarias</span>
          <h2 className="font-inter-display text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-5xl">Soluciones verticales y plataformas propietarias.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-fg/70 md:text-lg">
            Infraestructura digital diseñada para resolver desafíos operativos específicos. Desplegamos sistemas listos para operar, optimizados para la gestión eficiente y el contacto directo con el cliente.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {products.map((p) => (
            <LitCard as="li" key={p.name} className={`flex flex-col gap-5 rounded-2xl p-6 lg:p-8 ${glass} ${cardHover}`}>
              <div className="flex flex-col gap-2">
                <h3 className="font-inter-display text-4xl leading-none font-medium tracking-[-0.03em] text-[#FFFF00]">{p.name}</h3>
                <p className="font-serif text-xl leading-snug">{p.subtitle}</p>
              </div>
              <p className="leading-relaxed text-fg/70">{p.text}</p>
              <ul className="flex flex-col gap-3 border-t border-fg/10 pt-5">
                {p.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-fg/80">
                    <Check size={18} aria-hidden className="mt-1 shrink-0 text-[#FFFF00]" />
                    <span className="leading-relaxed">
                      <strong className="font-medium text-fg">{item.label}:</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              {p.href && (
                <Link href={p.href} className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-[#FFFF00] transition-[gap] duration-200 hover:gap-2.5">
                  Ver más
                  <ArrowRight size={16} aria-hidden />
                </Link>
              )}
            </LitCard>
          ))}
        </ul>
      </div>
    </section>
  );
}
