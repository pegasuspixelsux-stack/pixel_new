"use client";

import { useState, type FormEvent } from "react";
import * as m from "motion/react-m";
import { Check, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const viewport = { once: true, margin: "-80px" };

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 24 } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`;
const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;
const usPhoneHref = `tel:${siteConfig.contact.usPhone.replace(/\s/g, "")}`;

const fieldClass =
  "w-full rounded-xl border border-fg/25 bg-fg/5 px-4 py-3 text-sm text-fg placeholder:text-fg/50 transition-[border-color,background-color] duration-200 focus:border-fg focus:bg-fg/10 focus:outline-none";

const labelClass = "mb-1.5 block text-xs uppercase tracking-wider text-fg/60";

const details = [
  {
    icon: MapPin,
    label: "Ubicación",
    lines: [`${siteConfig.address.city}, ${siteConfig.address.state}, ${siteConfig.address.country}`],
  },
  {
    icon: Phone,
    label: "Teléfono directo",
    lines: [siteConfig.contact.phone],
    href: phoneHref,
  },
  {
    icon: Phone,
    label: "Teléfono EE. UU.",
    lines: [siteConfig.contact.usPhone],
    href: usPhoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: [siteConfig.contact.whatsapp.startsWith("+") ? siteConfig.contact.whatsapp : `+${siteConfig.contact.whatsapp}`],
    href: whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    lines: [siteConfig.contact.email],
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Clock,
    label: "Horario de atención",
    lines: ["Lunes a viernes: 09:00 - 19:00 hs", "Sábados: 10:00 - 14:00 hs"],
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sends the inquiry to /api/leads, which stores it for the dashboard (config for the real CRM comes later).
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSending(true);
    const form = new FormData(event.currentTarget);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "No pudimos enviar su consulta. Intente de nuevo.");
      } else {
        setSent(true);
      }
    } catch {
      setError("No pudimos conectar. Revise su conexión e intente de nuevo.");
    }
    setSending(false);
  }

  return (
    <section id="contacto" className="relative scroll-mt-24 py-16 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <m.div
            variants={stagger}
            initial="show"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-10 lg:col-span-5"
          >
            <m.div variants={rise}>
              <span className="mb-3 block text-xs font-medium tracking-widest text-accent uppercase">
                Contacto
              </span>
              <h2 className="mb-4 font-serif text-3xl leading-tight tracking-[-0.01em] lg:text-4xl">
                Inicia tu transformación digital.
              </h2>
              <p className="text-sm leading-relaxed text-fg/60">
                Analicemos la estructura de tu negocio para definir la solución ideal. Ponte en contacto directamente o agenda una consulta estratégica.
              </p>
            </m.div>

            <m.ul variants={stagger} className="flex flex-col gap-6 border-t border-fg/10 pt-8">
              {details.map(({ icon: Icon, label, lines, href, external }) => {
                const content = (
                  <>
                    <Icon size={20} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs tracking-wider text-fg/60 uppercase">{label}</p>
                      {lines.map((line, index) => (
                        <p key={line} className={`mt-0.5 text-sm ${index === 0 ? "font-medium" : "text-fg/70"}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </>
                );
                // Rows with a link (phone, WhatsApp, email) are tappable as a whole, with a touch/hover background.
                return (
                  <m.li key={label} variants={rise}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="-mx-2 flex items-start gap-4 rounded-lg p-2 transition-colors duration-200 hover:bg-fg/5 active:bg-fg/10"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="-mx-2 flex items-start gap-4 p-2">{content}</div>
                    )}
                  </m.li>
                );
              })}
            </m.ul>
          </m.div>

          <m.div
            variants={rise}
            initial="show"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-7"
          >
            <div className="flex aspect-square flex-col justify-center rounded-2xl border border-fg/10 bg-surface/70 p-8 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ease-out lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]">
              <h3 className="mb-6 text-xl font-medium">Envíanos un mensaje</h3>

              {sent ? (
                <div role="status" className="flex items-start gap-3 text-sm text-fg/80">
                  <Check size={16} className="mt-0.5 shrink-0" aria-hidden />
                  <p>Recibimos su consulta. Nuestro equipo se comunicará con usted pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Honeypot: hidden from people, bots fill it */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        Nombre completo
                      </label>
                      <input id="contact-name" name="name" required autoComplete="name" placeholder="Escribe tu nombre" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className={labelClass}>
                        Empresa / Negocio
                      </label>
                      <input id="contact-company" name="company" autoComplete="organization" placeholder="Nombre de tu empresa" className={fieldClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Correo electrónico
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="tu@email.com"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-type" className={labelClass}>
                      Servicio o producto de interés
                    </label>
                    <select id="contact-type" name="type" defaultValue="consulting" className={fieldClass}>
                      <option value="consulting">Consultoría Tecnológica & Automatización</option>
                      <option value="dealio">Plataforma Dealio (Automotriz)</option>
                      <option value="oikos">Plataforma Oikos (Inmobiliaria)</option>
                      <option value="nomos">Plataforma Nomos (Corporativo)</option>
                      <option value="custom">Desarrollo Web & Sistemas a Medida</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      Mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Describe brevemente las necesidades de tu proyecto"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <div className="mt-1 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-bright-lemon-950 transition-[background-color,transform,box-shadow] duration-200 ease-out hover:bg-accent/90 hover:shadow-[0_0_32px_var(--accent-glow)] active:scale-[0.98] disabled:opacity-60 sm:flex-1"
                    >
                      {sending ? "Enviando…" : "Enviar Consulta"}
                    </button>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-fg/40 py-3.5 text-sm font-semibold transition-[background-color,transform] duration-200 ease-out hover:bg-fg/10 active:scale-[0.98] sm:flex-1"
                    >
                      <MessageCircle size={16} aria-hidden />
                      Contactar directo por WhatsApp
                    </a>
                  </div>
                  {error && (
                    <p role="alert" className="text-sm text-red-500">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
