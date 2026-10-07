"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronDown, Feather, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { mainNav, type NavItem } from "@/config/navigation";

// Fixed 80px height so the hero can offset itself by the same amount (-mt-20 / pt-20).
export default function Navbar({ overHero = false }: { overHero?: boolean }) {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const linkTone = overHero ? "text-white hover:text-white/80" : "text-fg/70 hover:text-fg";
  const panelTone = overHero ? "border-white/15 bg-black text-white" : "border-fg/10 bg-canvas text-fg";

  function closeAll() {
    setOpen(false);
    setOpenDropdown(null);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className={
        overHero
          ? "sticky top-0 z-50 h-20 w-full border-b border-white/10 bg-white/10 text-white [-webkit-backdrop-filter:blur(12px)] backdrop-blur-md"
          : "sticky top-0 z-50 h-20 w-full bg-canvas/70 backdrop-blur-md"
      }
    >
      <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-16">
        <Link href="/" onClick={closeAll} className="flex items-center gap-2.5">
          <Feather size={18} strokeWidth={1.5} aria-hidden />
          <span className="flex items-baseline gap-1.5">
            <span className="font-serif text-lg italic">{siteConfig.name.split(" ")[0]}</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
              {siteConfig.name.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop links. Items with children open a dropdown on hover or click. */}
          <div className="hidden items-center gap-6 md:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown((current) => (current === item.label ? null : item.label))}
                    aria-expanded={openDropdown === item.label}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${linkTone}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      aria-hidden
                      className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div className={`absolute top-full left-1/2 mt-4 w-80 -translate-x-1/2 rounded-2xl border p-2 shadow-xl backdrop-blur-md ${panelTone}`}>
                      <ul className="flex flex-col">
                        {item.children.map((child) => (
                          <DropdownLink key={child.href} item={child} onSelect={closeAll} />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href} className={`text-sm font-medium transition-colors duration-200 ${linkTone}`}>
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <a
            href="#contacto"
            className={`hidden rounded-full border px-5 py-2 text-sm font-medium transition-[background-color,transform] duration-200 ease-out active:scale-[0.97] md:inline-flex ${
              overHero ? "border-white/40 hover:bg-white/10" : "border-fg/30 hover:bg-fg/10"
            }`}
          >
            Consultar Agente
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={`flex h-10 w-10 items-center justify-center md:hidden ${overHero ? "text-black" : ""}`}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer: the same items as the desktop header, with the project list nested under Proyectos. */}
      {open && (
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full max-h-[calc(100svh-5rem)] overflow-y-auto border-b px-6 py-6 backdrop-blur-md md:hidden ${panelTone}`}
        >
          <ul className="flex flex-col gap-5">
            {mainNav.map((item) => (
              <li key={item.label} className="flex flex-col gap-3">
                <Link href={item.href} onClick={closeAll} className={`text-base font-medium transition-colors duration-200 ${linkTone}`}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="flex flex-col gap-3 border-l border-fg/15 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={closeAll} className={`text-sm transition-colors duration-200 ${linkTone}`}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}

function DropdownLink({ item, onSelect }: { item: NavItem; onSelect: () => void }) {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onSelect}
        className="block rounded-xl px-4 py-3 text-sm transition-colors duration-200 hover:bg-fg/10"
      >
        {item.label}
      </Link>
    </li>
  );
}
