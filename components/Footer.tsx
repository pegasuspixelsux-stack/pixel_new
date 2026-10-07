"use client";

import Link from "next/link";
import { Feather } from "lucide-react";
import ThemeSelector from "@/components/ThemeSelector";
import { siteConfig } from "@/config/site.config";
import { mainNav } from "@/config/navigation";

// Same four items as the header, plus the login link.
const navigation = [...mainNav, { label: "Ingresar", href: "/login" }];

const categories = [
  { label: "Automotriz", href: "/proyectos?categoria=Automotriz" },
  { label: "Inmobiliaria", href: "/proyectos?categoria=Inmobiliaria" },
  { label: "Gastronomía", href: "/proyectos?categoria=Gastronomía" },
  { label: "Servicios", href: "/proyectos?categoria=Servicios" },
];

const locations = [
  { label: "Catálogo inteligente", href: "#proyectos" },
  { label: "Captura de leads", href: "#proyectos" },
  { label: "Automatización de ventas", href: "#proyectos" },
  { label: "Diagnóstico operativo", href: "#contacto" },
];

const legal = [
  { label: "Política de Privacidad", href: "#" },
  { label: "Términos de Uso", href: "#" },
  { label: "Política de Cookies", href: "#" },
];

const columnHeading = "mb-4 text-xs font-medium tracking-wider text-fg uppercase";
const columnLink = "text-sm text-fg/60 transition-colors duration-200 hover:text-fg";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-fg/10">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 pt-12 pb-8 lg:px-16">
        {/* Navigation columns */}
        <div className="grid grid-cols-2 gap-10 border-b border-fg/10 py-12 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <Feather size={18} strokeWidth={1.5} aria-hidden />
              <span className="flex items-baseline gap-1.5">
                <span className="font-serif text-lg italic">Pegasus</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Pixels</span>
              </span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-fg/60">{siteConfig.description}</p>
          </div>

          <div>
            <p className={columnHeading}>Navegación</p>
            <ul className="flex flex-col gap-2.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={columnLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnHeading}>Categorías</p>
            <ul className="flex flex-col gap-2.5">
              {categories.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={columnLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnHeading}>Soluciones</p>
            <ul className="flex flex-col gap-2.5">
              {locations.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={columnLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-fg/50 md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {legal.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors duration-200 hover:text-fg/80">
                {item.label}
              </a>
            ))}
            <ThemeSelector />
          </div>
        </div>
      </div>
    </footer>
  );
}
