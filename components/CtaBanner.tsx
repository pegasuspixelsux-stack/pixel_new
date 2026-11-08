"use client";

import * as m from "motion/react-m";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`;

interface CtaBannerProps {
  heading?: string;
  body?: string;
  /** Link for the primary button. Defaults to the contact form on the homepage. */
  primaryHref?: string;
  /** Label for the primary button. */
  primaryLabel?: string;
  /** Micro-copy under the buttons. Defaults to the standard "Sin compromiso" line. */
  note?: string;
  /** "black" keeps the original black banner; "theme" uses the page's palette; "reverse" swaps the page text and background colors; "navy" is dark blue with white text (--cta-bg and --cta-fg, set by the page theme). */
  tone?: "black" | "theme" | "reverse" | "navy";
}

// Single centered column: copy on top, actions and micro-copy below.
export default function CtaBanner({
  heading = "¿Listo para llevar tu operación al siguiente nivel?",
  body = "Estructura tu negocio, automatiza la captura de clientes y brinda a tu equipo herramientas digitales profesionales.",
  primaryHref = "/#contacto",
  primaryLabel = "Agendar Diagnóstico Operativo",
  note = "Sin compromiso • Respuesta en menos de 24 hs",
  tone = "black",
}: CtaBannerProps) {
  const themed = tone !== "black";
  // "reverse" works on any page: the panel takes the page text color and the text takes the page background.
  const vars =
    tone === "reverse" ? "[--cta-bg:var(--fg)] [--cta-fg:var(--canvas)]" : tone === "navy" ? "[--cta-bg:#0a2a5e] [--cta-fg:#ffffff]" : "";
  return (
    <section className="border-t border-fg/10 py-16 md:py-24 lg:py-32">
      {/* Same container as the other home sections, so the banner lines up with them */}
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 160, damping: 24 }}
          className={`flex w-full flex-col items-center gap-10 rounded-3xl border px-8 transition-[border-color,box-shadow] duration-300 ease-out lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)] py-14 text-center md:px-16 ${vars} ${themed ? "border-[var(--cta-fg)]/25 bg-[var(--cta-bg)] text-[var(--cta-fg)]" : "border-white/15 bg-[#000000] text-white"}`}
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.01em] lg:text-4xl">{heading}</h2>
            <p className={`mx-auto max-w-xl text-sm leading-relaxed ${themed ? "text-[var(--cta-fg)]/75" : "text-white/60"}`}>{body}</p>
          </div>

          <div className="flex w-full flex-col items-center gap-6">
            <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
              <a
                href={primaryHref}
                className={`rounded-full px-8 py-3.5 text-center text-sm font-medium transition-[background-color,transform,box-shadow] duration-300 ease-out active:scale-[0.97] ${themed ? "bg-[var(--cta-fg)] text-[var(--cta-bg)] hover:opacity-90 hover:shadow-[0_0_32px_var(--accent-glow)]" : "bg-white text-black hover:bg-white/90 hover:shadow-[0_0_32px_rgba(255,255,255,0.22)]"}`}
              >
                {primaryLabel}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 rounded-full border px-8 py-3.5 text-sm font-medium transition-[background-color,transform] duration-200 ease-out active:scale-[0.97] ${themed ? "border-[var(--cta-fg)]/50 text-[var(--cta-fg)] hover:bg-[var(--cta-fg)]/10" : "border-white/40 text-white hover:bg-white/10"}`}
              >
                <MessageCircle size={16} aria-hidden />
                Hablar por WhatsApp
              </a>
            </div>

            <p className={`text-xs tracking-wider uppercase ${themed ? "text-[var(--cta-fg)]/60" : "text-white/50"}`}>{note}</p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
