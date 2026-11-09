import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HorizontalPin from "@/components/HorizontalPin";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import LitCard from "@/components/LitCard";
import { cardHover, glass } from "@/components/landing-styles";

const products = [
  {
    name: "Dealio",
    placeholder: "CAPTURA: Dealio, catálogo y agendamiento",
    subtitle: "Plataforma Comercial Automotriz",
    text: "Sistema de gestión de inventario y agendamiento de visitas diseñado para concesionarios y automotoras.",
    href: "/dealio",
  },
  {
    name: "Oikos",
    placeholder: "CAPTURA: Oikos, catálogo de propiedades",
    subtitle: "Ecosistema Inmobiliario",
    text: "Plataforma de presentación y captación de propiedades para desarrollos inmobiliarios y agencias de bienes raíces.",
    href: "/oikos",
  },
  {
    name: "Nomos",
    placeholder: "CAPTURA: Nomos, catálogo corporativo",
    subtitle: "Gestión y Catálogo Corporativo",
    text: "Infraestructura digital estructurada para empresas, consultoras y distribuidores que requieren organización centralizada de oferta o servicios.",
    href: "/nomos",
  },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="relative scroll-mt-24 py-12 md:py-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 lg:gap-14 lg:px-16">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="block text-xs font-medium tracking-widest text-[#FFFF00] uppercase">Productos y soluciones propietarias</span>
          <h2 className="font-inter-display text-[2.1375rem] font-medium leading-[1] tracking-[-0.03em] lg:text-[2.85rem]">Soluciones verticales y plataformas propietarias.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-fg/70 md:text-lg">
            Infraestructura digital diseñada para resolver desafíos operativos específicos. Desplegamos sistemas listos para operar, optimizados para la gestión eficiente y el contacto directo con el cliente.
          </p>
        </div>

        <HorizontalPin as="ul" breakpoint="lg" gridClassName="lg:grid-cols-3">
          {products.map((p) => (
            <LitCard as="li" key={p.name} className={`flex w-[75vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl lg:w-auto ${glass} ${cardHover}`}>
              {/* Edge to edge: no padding on the top or the sides */}
              <div className="aspect-[4/3] w-full">
                <ImagePlaceholder label={p.placeholder} flush labelClassName="text-fg/60" />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6 lg:p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="font-inter-display text-4xl leading-none font-medium tracking-[-0.03em] text-[#FFFF00]">{p.name}</h3>
                  <p className="font-serif text-xl leading-snug">{p.subtitle}</p>
                </div>
                <p className="leading-relaxed text-fg/70">{p.text}</p>
                {p.href && (
                  <Link href={p.href} className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-[#FFFF00] transition-[gap] duration-200 hover:gap-2.5">
                    Ver más
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                )}
              </div>
            </LitCard>
          ))}
        </HorizontalPin>
      </div>
    </section>
  );
}
