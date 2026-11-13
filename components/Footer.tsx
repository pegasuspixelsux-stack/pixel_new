"use client";

import Link from "next/link";
import { Feather } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const solutions = [
  { label: "Consultoría Tecnológica", href: "/#servicios" },
  { label: "Automatización de Procesos", href: "/#servicios" },
  { label: "Desarrollo Web & Sistemas", href: "/#servicios" },
  { label: "Dealio — Automotriz", href: "/dealio" },
  { label: "Oikos — Inmobiliario", href: "/oikos" },
  { label: "Nomos — Corporativo", href: "/nomos" },
];

const company = [
  { label: "Sobre Nosotros", href: "/nosotros" },
  { label: "Cómo Trabajamos", href: "/#como-trabajamos" },
  { label: "Preguntas Frecuentes", href: "/#faq" },
  { label: "Contacto", href: "/#contacto" },
];

const whatsappNumber = siteConfig.contact.whatsapp.startsWith("+") ? siteConfig.contact.whatsapp : `+${siteConfig.contact.whatsapp}`;

const legal = [
  { label: "Política de Privacidad", href: "#" },
  { label: "Términos de Uso", href: "#" },
  { label: "Política de Cookies", href: "#" },
  // Opens the dashboard; logged-out visitors are sent to the login page first.
  { label: "Admin", href: "/dashboard" },
];

const columnHeading = "mb-4 text-xs font-medium tracking-wider text-fg uppercase";
const columnLink = "text-sm text-fg/60 transition-colors duration-200 hover:text-fg";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full pb-[max(3rem,env(safe-area-inset-bottom))]">
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
            <p className="max-w-xs text-xs leading-relaxed text-fg/60">Consultoría tecnológica, arquitectura de sistemas y soluciones digitales integrales.</p>
          </div>

          <div>
            <p className={columnHeading}>Soluciones</p>
            <ul className="flex flex-col gap-2.5">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={columnLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnHeading}>Empresa</p>
            <ul className="flex flex-col gap-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={columnLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnHeading}>Contacto Directo</p>
            <ul className="flex flex-col gap-2.5 text-sm text-fg/60">
              <li>
                <span className="text-fg">Ubicación:</span> Punta del Este, Uruguay
              </li>
              <li>
                <span className="text-fg">Email:</span>{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="break-all transition-colors duration-200 hover:text-fg">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="text-fg">WhatsApp:</span>{" "}
                <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-fg">
                  {whatsappNumber}
                </a>
              </li>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
