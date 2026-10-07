"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`;

interface CtaBannerProps {
  heading?: string;
  body?: string;
  /** Link for the primary button. Defaults to the contact form on the homepage. */
  primaryHref?: string;
}

// Single centered column: copy on top, actions and micro-copy below.
export default function CtaBanner({
  heading = "¿Listo para llevar tu operación al siguiente nivel?",
  body = "Estructura tu negocio, automatiza la captura de clientes y brinda a tu equipo herramientas digitales profesionales.",
  primaryHref = "/#contacto",
}: CtaBannerProps) {
  return (
    <section className="border-t border-fg/10 px-6 py-16 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 160, damping: 24 }}
        className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 rounded-3xl border border-fg/10 bg-surface/70 px-8 py-14 text-center backdrop-blur-md md:px-16"
      >
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-3xl leading-tight tracking-[-0.01em] lg:text-4xl">{heading}</h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-fg/60">{body}</p>
        </div>

        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <a
              href={primaryHref}
              className="rounded-full bg-fg px-8 py-3.5 text-center text-sm font-medium text-canvas transition-[background-color,transform,box-shadow] duration-300 ease-out hover:bg-fg/90 hover:shadow-[0_0_32px_rgba(255,255,255,0.22)] active:scale-[0.97]"
            >
              Agendar Diagnóstico Operativo
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-fg/30 px-8 py-3.5 text-sm font-medium transition-[background-color,transform] duration-200 ease-out hover:bg-fg/10 active:scale-[0.97]"
            >
              <MessageCircle size={16} aria-hidden />
              Hablar por WhatsApp
            </a>
          </div>

          <p className="text-xs tracking-wider text-fg/50 uppercase">Sin compromiso • Respuesta en menos de 24 hs</p>
        </div>
      </motion.div>
    </section>
  );
}
