"use client";

import { useState } from "react";
import Link from "next/link";
import * as m from "motion/react-m";
import { ChevronDown, Feather, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { mainNav, type NavItem } from "@/config/navigation";

// Fixed height (56px on phones, 80px from md) so the hero can offset itself by the same amount (-mt-14 md:-mt-20).
export default function Navbar({ overHero = false }: { overHero?: boolean }) {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Mobile drawer accordion: which section is expanded.
  const [openSection, setOpenSection] = useState<string | null>(null);

  const linkTone = overHero ? "text-fg hover:text-fg/70" : "text-fg/70 hover:text-fg";
  // Menu panels follow the theme: white with black text in light, black with white text in dark.
  const panelTone = "border-fg/10 bg-canvas text-fg";
  const panelLinkTone = "text-fg/80 hover:text-fg";

  function closeAll() {
    setOpen(false);
    setOpenDropdown(null);
    setOpenSection(null);
  }

  return (
    <m.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className={
        overHero
          ? "sticky top-0 z-50 h-14 w-full border-b md:h-20 border-fg/10 bg-canvas/80 text-fg [-webkit-backdrop-filter:blur(12px)] backdrop-blur-md"
          : "sticky top-0 z-50 h-14 w-full bg-canvas/70 md:h-20 backdrop-blur-md"
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
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setOpenDropdown(null);
                  }}
                  onBlur={(event) => {
                    // Close when keyboard focus leaves the whole dropdown (button + panel).
                    if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown((current) => (current === item.label ? null : item.label))}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
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
                    // The pt-4 sits inside the hover area, so the pointer never leaves it on the way from the button to the panel.
                    <div className="absolute top-full left-1/2 w-80 -translate-x-1/2 pt-4">
                      <m.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className={`rounded-2xl border p-2 shadow-xl backdrop-blur-md ${panelTone}`}
                      >
                        <ul className="flex flex-col">
                          {item.children.map((child) => (
                            <DropdownLink key={child.href} item={child} onSelect={closeAll} />
                          ))}
                        </ul>
                      </m.div>
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
              overHero ? "border-fg/40 hover:bg-fg/5" : "border-fg/30 hover:bg-fg/10"
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
            className={`flex h-10 w-10 items-center justify-center md:hidden`}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer: the same items as the desktop header, with the project list nested under Proyectos. */}
      {open && (
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full max-h-[calc(100svh-3.5rem)] overflow-y-auto border-b px-6 py-6 backdrop-blur-md md:hidden ${panelTone}`}
        >
          <ul className="flex flex-col gap-5">
            {mainNav.map((item) => (
              <li key={item.label} className="flex flex-col gap-3">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenSection((current) => (current === item.label ? null : item.label))}
                      aria-expanded={openSection === item.label}
                      aria-controls={`mobile-section-${item.label}`}
                      className={`flex w-full items-center justify-between text-left text-base font-medium transition-colors duration-200 ${panelLinkTone}`}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        aria-hidden
                        className={`transition-transform duration-200 ${openSection === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openSection === item.label && (
                      <ul id={`mobile-section-${item.label}`} className="flex flex-col gap-3 border-l border-fg/15 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} onClick={closeAll} className={`block text-sm transition-colors duration-200 ${panelLinkTone}`}>
                              {child.label}
                              {child.description && <span className="mt-0.5 block text-xs text-fg/60">{child.description}</span>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={closeAll} className={`text-base font-medium transition-colors duration-200 ${panelLinkTone}`}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </m.header>
  );
}

function DropdownLink({ item, onSelect }: { item: NavItem; onSelect: () => void }) {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onSelect}
        className="block rounded-xl px-4 py-3 text-sm transition-colors duration-200 hover:bg-fg/10 focus-visible:bg-fg/10"
      >
        <span className="block font-medium">{item.label}</span>
        {item.description && <span className="mt-0.5 block text-xs leading-snug text-fg/60">{item.description}</span>}
      </Link>
    </li>
  );
}
