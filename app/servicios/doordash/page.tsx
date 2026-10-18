import type { Metadata } from "next";
import Link from "next/link";
import { Mrs_Saint_Delafield } from "next/font/google";
import { ArrowDown, ArrowRight, Camera, Check, ShieldCheck, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LitCard from "@/components/LitCard";

// Handwritten script for the founder's signature; only this page uses it.
const signature = Mrs_Saint_Delafield({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "DoorDash: Registro y Optimización de Menú | Pegasus Pixels",
  description:
    "Dos servicios para restaurantes y food trucks de Maryland, Washington D.C., Virginia, Delaware y Pennsylvania: registro llave en mano en DoorDash sin riesgo inicial, o auditoría inteligente de tu menú actual para proteger tus márgenes.",
};

const CTA_HREF = "/#contacto";

// Option 1: merchants who are not on DoorDash yet.
const newFeatures = [
  {
    icon: "⚙️",
    title: "Registro y Activación de Cuenta",
    text: "Creamos y configuramos tu tienda de punta a punta: cuenta, perfil, horarios, zonas de entrega, pagos y verificación.",
  },
  {
    icon: "📲",
    title: "Envío de Tableta",
    text: "Gestionamos ante DoorDash una tableta gratuita, preconfigurada para tu tienda, y te la hacemos llegar lista para recibir el primer pedido.",
  },
  {
    icon: "🎓",
    title: "Capacitación Práctica",
    text: "Entrenamos a tu equipo: cómo recibir, preparar y despachar pedidos sin frenar la cocina ni perder calificación.",
  },
  {
    icon: "🍽️",
    title: "Configuración Inicial del Menú",
    text: "Cargamos y ordenamos tu menú con categorías, fotos y descripciones pensadas para vender por delivery.",
  },
];

const steps = [
  { title: "Registro y configuración", text: "Dejamos tu tienda creada, con el menú cargado y lista para publicar." },
  { title: "Envío de tableta", text: "Te llega la tableta gratuita de DoorDash, preconfigurada para tu tienda." },
  { title: "Primeros 15 pedidos", text: "Tu local empieza a vender y te acompañamos en los primeros 15 pedidos." },
  { title: "Pago del bono", text: "DoorDash paga su bono de bienvenida y recién ahí se liquida nuestro fee." },
];

// Option 2: merchants who are already on DoorDash.
const existingDetails = [
  {
    icon: "📊",
    title: "Benchmarking Local",
    text: "Análisis comparativo de precios en Gaithersburg, Rockville y Bethesda.",
  },
  {
    icon: "🧮",
    title: "Cálculo de Costos y Márgenes",
    text: "Te ayudamos a estructurar precios para absorber la comisión del 30% sin perder clientes.",
  },
  {
    icon: "🤝",
    title: "Asesoría Colaborativa",
    text: "Asesoramos y sugerimos mejoras viables; trabajamos mano a mano con el dueño sin imponer cambios.",
  },
  {
    icon: "🧩",
    title: "Reestructuración de Combos",
    text: "Paquetes y agregados de alto margen para incrementar el ticket promedio.",
  },
];

const traditional = [
  "Mismo menú y mismos precios que en el local",
  "Las comisiones se comen tu margen en cada pedido",
  "Sin combos ni paquetes: el ticket promedio se queda bajo",
  "Configuración a prueba y error, sin acompañamiento",
  "Pagas primero y esperas ver si funciona",
];

const pegasus = [
  "Menú estructurado y precios diseñados para delivery",
  "Precios competitivos frente a la competencia de tu zona",
  "Combos y paquetes pensados para subir el AOV",
  "Registro, tableta y capacitación gestionados por nosotros",
  "$0 de riesgo inicial: pagas cuando DoorDash te paga",
];

const glass = "border border-fg/15 bg-fg/[0.05] backdrop-blur-md";
const eyebrow = "text-xs font-medium tracking-[0.18em] text-accent uppercase";
const h2 = "font-inter-display text-3xl leading-tight font-medium tracking-[-0.03em] md:text-5xl";
const ctaButton =
  "inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-[color:var(--on-brand)] transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-brand/90 hover:shadow-[0_0_40px_var(--brand-glow)] active:scale-[0.97]";
// Same hover as the home page boxes: accent border, glow and a small lift (also on touch, via LitCard).
const cardHover =
  "transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:lit:-translate-y-1 lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]";

export default function DoorDashPage() {
  return (
    <>
      <Navbar />
      <main className="accent-doordash relative flex w-full flex-1 flex-col overflow-x-clip">
        {/* Soft accent glow behind the hero (site accent) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_at_50%_0%,var(--accent-glow),transparent_65%)]"
        />

        {/* Hero + option selector */}
        <section className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-accent uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            Servicios DoorDash
          </span>
          <h1 className="font-inter-display text-[2.4rem] leading-[1.05] font-medium tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Registro y Optimización de Menú en <span className="text-brand">DoorDash</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-fg/85 md:text-lg">
            Dos servicios según dónde estés hoy, para restaurantes y food trucks de Maryland, Washington D.C., Virginia, Delaware y
            Pennsylvania: activamos tu tienda sin riesgo inicial, o auditamos tu menú actual para proteger tus márgenes.
          </p>

          <div className="mt-12 grid w-full gap-4 text-left md:grid-cols-2 md:gap-6">
            <LitCard as="a" href="#nuevos" className={`${glass} ${cardHover} group flex flex-col gap-4 rounded-2xl p-7 md:p-8`}>
              <span className={eyebrow}>Opción 1 · Nuevos comerciantes</span>
              <span className="font-inter-display text-xl leading-snug font-medium md:text-2xl">
                Para Nuevos Restaurantes y Food Trucks
              </span>
              <span className="text-sm leading-relaxed text-fg/80">
                Todavía no estás en DoorDash: te hacemos el registro y la activación completos, sin riesgo inicial.
              </span>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent">
                Ver el servicio
                <ArrowDown size={14} aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5" />
              </span>
            </LitCard>
            <LitCard as="a" href="#existentes" className={`${glass} ${cardHover} group flex flex-col gap-4 rounded-2xl p-7 md:p-8`}>
              <span className={eyebrow}>Opción 2 · Clientes existentes</span>
              <span className="font-inter-display text-xl leading-snug font-medium md:text-2xl">
                Para Restaurantes que Ya Están Vendiendo en DoorDash
              </span>
              <span className="text-sm leading-relaxed text-fg/80">
                Ya vendes en DoorDash: auditamos tu menú para proteger tus márgenes y subir tus ganancias.
              </span>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent">
                Ver el servicio
                <ArrowDown size={14} aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5" />
              </span>
            </LitCard>
          </div>
        </section>

        {/* Option 1: new merchants */}
        <section id="nuevos" className="relative mx-auto w-full max-w-[1100px] scroll-mt-24 px-6 pb-20 md:pb-28">
          <div className="reveal-up">
            <p className={eyebrow}>Para Nuevos Restaurantes y Food Trucks</p>
            <h2 className={`${h2} mt-4 max-w-3xl`}>Servicio Llave en Mano: Registro y Configuración $0 Riesgo Inicial</h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-fg/85 md:text-lg">
              Nos encargamos de todo el proceso de registro, trámite de tableta, capacitación y configuración inicial del
              menú. Honorarios de $1,000 pagaderos solo después de recibir el bono de DoorDash.
            </p>
          </div>

          <div className="reveal-up">
            <div className="mt-10 flex flex-col items-center gap-6 rounded-3xl border border-accent/30 bg-accent/[0.06] p-8 text-center shadow-[0_0_60px_-20px_var(--accent-glow)] backdrop-blur-md md:flex-row md:gap-10 md:p-12 md:text-left">
              <div className="font-inter-display text-7xl leading-none font-medium tracking-[-0.04em] text-accent md:text-8xl">
                $0
              </div>
              <div>
                <p className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.18em] text-accent uppercase md:justify-start">
                  <ShieldCheck size={16} aria-hidden />
                  Garantía libre de riesgo
                </p>
                <p className="mt-3 text-lg leading-relaxed text-fg/95 md:text-xl">
                  No pagas nada por adelantado. Nuestro fee de <strong className="text-fg">$1,000</strong> se paga{" "}
                  <strong className="text-fg">únicamente después</strong> de que recibes el bono de bienvenida oficial de
                  DoorDash.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-6">
            {newFeatures.map((feature) => (
              <div key={feature.title} className="reveal-up">
                <LitCard as="article" className={`${glass} ${cardHover} h-full rounded-2xl p-7 md:p-9`}>
                  <span aria-hidden className="text-3xl">
                    {feature.icon}
                  </span>
                  <h3 className="font-inter-display mt-5 text-xl leading-snug font-medium md:text-2xl">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg/80 md:text-base">{feature.text}</p>
                </LitCard>
              </div>
            ))}
          </div>

          <ol className="mt-6 grid gap-4 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <li key={step.title}>
                <div className="reveal-up">
                  <LitCard className={`${glass} ${cardHover} relative h-full rounded-2xl p-6`}>
                    <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="font-inter-display mt-4 text-lg leading-snug font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg/75">{step.text}</p>
                    {index < steps.length - 1 && (
                      <span aria-hidden className="absolute top-1/2 -right-[14px] hidden h-px w-[14px] bg-accent/40 md:block" />
                    )}
                  </LitCard>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex justify-center md:justify-start">
            <Link href={CTA_HREF} className={ctaButton}>
              Solicitar Activación de Tienda
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </section>

        {/* Option 2: existing merchants */}
        <section id="existentes" className="relative mx-auto w-full max-w-[1100px] scroll-mt-24 px-6 pb-20 md:pb-28">
          <div className="border-t border-fg/10 pt-20 md:pt-28">
            <div className="reveal-up">
              <p className={eyebrow}>Para Restaurantes que Ya Están Vendiendo en DoorDash</p>
              <h2 className={`${h2} mt-4 max-w-3xl`}>Análisis Inteligente y Auditoría de Menú</h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-fg/85 md:text-lg">
                Auditamos tu menú activo para asegurar que tus márgenes estén protegidos y tus precios sean competitivos
                en el mercado local.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
              {existingDetails.map((detail) => (
                <div key={detail.title} className="reveal-up">
                  <LitCard as="article" className={`${glass} ${cardHover} h-full rounded-2xl p-7 md:p-9`}>
                    <span aria-hidden className="text-3xl">
                      {detail.icon}
                    </span>
                    <h3 className="font-inter-display mt-5 text-xl leading-snug font-medium md:text-2xl">{detail.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-fg/80 md:text-base">{detail.text}</p>
                  </LitCard>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center md:justify-start">
              <Link href={CTA_HREF} className={ctaButton}>
                Solicitar Auditoría de Menú Actual
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Traditional vs Pegasus */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
          <div className="border-t border-fg/10 pt-20 md:pt-28">
            <div className="reveal-up">
              <p className={eyebrow}>Comparación</p>
              <h2 className={`${h2} mt-4 max-w-2xl`}>La diferencia está en el margen</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
              <div className="reveal-up">
                <LitCard className={`${glass} ${cardHover} h-full rounded-2xl p-7 md:p-9`}>
                  <h3 className="font-inter-display text-xl font-medium text-fg/90 md:text-2xl">Método Tradicional</h3>
                  <p className="mt-2 text-sm text-fg/70">Pérdida de margen por comisiones</p>
                  <ul className="mt-6 flex flex-col gap-3.5">
                    {traditional.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-fg/75 md:text-base">
                        <X size={18} aria-hidden className="mt-0.5 shrink-0 text-fg/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </LitCard>
              </div>
              <div className="reveal-up">
                <LitCard className={`h-full rounded-2xl border border-accent/40 bg-accent/[0.06] p-7 shadow-[0_0_50px_-15px_var(--accent-glow)] backdrop-blur-md md:p-9 ${cardHover}`}>
                  <h3 className="font-inter-display text-xl font-medium md:text-2xl">Método Pegasus Pixels</h3>
                  <p className="mt-2 text-sm text-accent">Menú estructurado y ganancia limpia</p>
                  <ul className="mt-6 flex flex-col gap-3.5">
                    {pegasus.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-fg/95 md:text-base">
                        <Check size={18} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </LitCard>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA: one button per option */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-24 md:pb-32">
          <div className="reveal-up">
            <div className="rounded-3xl border border-accent/30 bg-gradient-to-b from-accent/[0.10] to-transparent p-10 text-center backdrop-blur-md md:p-16">
              <h2 className={`${h2} mx-auto max-w-2xl`}>Elige tu punto de partida</h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg/85">
                Si todavía no estás en DoorDash, el registro no tiene riesgo inicial. Si ya vendes ahí, empezamos con una
                auditoría de tu menú.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={CTA_HREF} className={ctaButton}>
                  Solicitar Activación de Tienda
                  <ArrowRight size={16} aria-hidden />
                </Link>
                <Link
                  href={CTA_HREF}
                  className="inline-flex items-center gap-2 rounded-full border border-fg/40 px-8 py-4 text-sm font-semibold transition-[background-color,transform] duration-200 ease-out hover:bg-fg/5 active:scale-[0.97]"
                >
                  Solicitar Auditoría de Menú Actual
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quiénes Somos: founder bio, directly above the footer */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 py-16 md:py-20">
          <div className="reveal-up">
            <div className="grid gap-8 md:grid-cols-[320px_1fr] md:items-center md:gap-12">
              {/* Placeholder for Alejandro González photo */}
              <div
                role="img"
                aria-label="Foto de Alejandro González (pendiente)"
                className="relative mx-auto flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-fg/10 bg-gradient-to-br from-fg/[0.08] to-fg/[0.02] md:mx-0"
              >
                <Camera size={40} aria-hidden className="text-fg/30" />
              </div>

              <div>
                <p className={eyebrow}>Sobre Nosotros</p>
                <h2 className={`${h2} mt-4`}>Quiénes Somos</h2>
                <h3 className="font-inter-display mt-6 text-xl font-medium md:text-2xl">Alejandro González</h3>
                <p className="mt-1 text-sm text-fg/75">Fundador de Pegasus Pixels</p>

                <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-fg/85">
                  <p>
                    Mi nombre es Alejandro González. Durante los últimos 10 años he trabajado mano a mano con restaurantes
                    de la zona implementando sistemas de punto de venta (POS), plataformas de pedidos en línea, presencia
                    web profesional y la optimización estratégica de canales de delivery como DoorDash y Uber Eats.
                  </p>
                  <p>
                    Mi objetivo principal es ayudar a cada negocio a maximizar el beneficio de sus ventas digitales,
                    asegurando que la tecnología trabaje a favor del restaurante y que sus canales de ordenamiento sean
                    verdaderamente rentables y sostenibles a largo plazo.
                  </p>
                </div>

                <div className="mt-8">
                  {/* Ink follows the theme: black on the light theme, white on the dark one (black would vanish there) */}
                  <p aria-hidden className={`${signature.className} whitespace-nowrap text-[2.75rem] leading-tight text-fg sm:text-6xl md:text-7xl`}>
                    Alejandro González
                  </p>
                  <p className="mt-3 text-sm text-fg/85">
                    <strong className="font-semibold text-fg">Alejandro González</strong> —{" "}
                    <em>Fundador, Pegasus Pixels</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
