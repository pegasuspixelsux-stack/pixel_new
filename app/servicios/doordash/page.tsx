import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Alta y Optimización DoorDash | Pegasus Pixels",
  description:
    "Servicio llave en mano para activar tu restaurante o food truck en DoorDash en Maryland: alta operativa, ingeniería de precios, tableta y capacitación, sin riesgo inicial.",
};

const CTA_HREF = "/#contacto";

const pillars = [
  {
    icon: "⚙️",
    title: "Configuración y Alta Operativa Completa",
    text: "Creamos y configuramos tu tienda de punta a punta: cuenta, perfil, horarios, zonas de entrega, pagos y verificación. Tú no tocas un solo formulario.",
  },
  {
    icon: "📊",
    title: "Análisis Inteligente de Menú e Ingeniería de Precios",
    text: "Hacemos benchmarking local en Gaithersburg, Rockville y Bethesda y ajustamos tus precios entre +20% y +30% para absorber las comisiones. Armamos combos y paquetes para subir el ticket promedio (AOV).",
  },
  {
    icon: "📲",
    title: "Gestión de Equipamiento y Tableta",
    text: "Gestionamos la tableta de pedidos, la dejamos configurada y probada, y te la entregamos lista para recibir el primer pedido.",
  },
  {
    icon: "🎓",
    title: "Capacitación Operativa In-Situ",
    text: "Entrenamos a tu equipo en tu propio local: cómo recibir, preparar y despachar pedidos sin frenar la cocina ni perder calificación.",
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
  "Ajuste de +20–30% que absorbe las comisiones",
  "Combos y paquetes pensados para subir el AOV",
  "Alta, tableta y capacitación gestionadas por nosotros",
  "$0 de riesgo inicial: pagas cuando DoorDash te paga",
];

const steps = [
  { title: "Alta y configuración", text: "Dejamos tu tienda creada, con el menú optimizado y lista para publicar." },
  { title: "Entrega de tableta", text: "Te llevamos la tableta configurada y capacitamos a tu equipo en sitio." },
  { title: "Primeros 15 pedidos", text: "Tu local empieza a vender y acompañamos los primeros 15 pedidos." },
  { title: "Pago del bono", text: "DoorDash paga su bono de bienvenida y recién ahí se liquida nuestro fee." },
];

const glass = "border border-white/10 bg-white/[0.04] backdrop-blur-md";

export default function DoorDashPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex w-full flex-1 flex-col overflow-hidden bg-[#0A0A0B] text-white">
        {/* Soft emerald glow behind the hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.22),transparent_65%)]"
        />

        {/* Hero */}
        <section className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-emerald-300 uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-emerald-400" />
            Servicio Llave en Mano
          </span>
          <h1 className="font-inter-display text-[2.4rem] leading-[1.05] font-medium tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Activa Tu Tienda en DoorDash <span className="text-emerald-400">Sin Riesgo Inicial</span>
          </h1>
          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Nos encargamos del alta, del menú, de la tableta y de la capacitación de tu equipo. Pensado para
              restaurantes y food trucks de Maryland que quieren vender por delivery sin descuidar su margen.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href={CTA_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-8 py-4 text-sm font-semibold text-black transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.45)] active:scale-[0.97]"
              >
                Solicitar Análisis de Menú Gratuito
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </section>

        {/* $0 guarantee callout */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
          <Reveal>
            <div
              className={`flex flex-col items-center gap-6 rounded-3xl border border-emerald-400/30 bg-emerald-400/[0.06] p-8 text-center shadow-[0_0_60px_-20px_rgba(52,211,153,0.5)] backdrop-blur-md md:flex-row md:gap-10 md:p-12 md:text-left`}
            >
              <div className="font-inter-display text-7xl leading-none font-medium tracking-[-0.04em] text-emerald-400 md:text-8xl">
                $0
              </div>
              <div>
                <p className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.18em] text-emerald-300 uppercase md:justify-start">
                  <ShieldCheck size={16} aria-hidden />
                  Garantía libre de riesgo
                </p>
                <p className="mt-3 text-lg leading-relaxed text-white/85 md:text-xl">
                  No pagas nada por adelantado. Nuestro fee de <strong className="text-white">$1,000</strong> se difiere
                  hasta que DoorDash te pague su bono de bienvenida: si tú no ganas, nosotros tampoco.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Four pillars */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-emerald-300 uppercase">Qué incluye</p>
            <h2 className="font-inter-display mt-4 max-w-2xl text-3xl leading-tight font-medium tracking-[-0.03em] md:text-5xl">
              Cuatro frentes cubiertos, cero trabajo para ti
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
            {pillars.map((pillar) => (
              <Reveal key={pillar.title}>
                <article
                  className={`${glass} h-full rounded-2xl p-7 transition-[border-color,box-shadow] duration-300 ease-out hover:border-emerald-400/50 hover:shadow-[0_0_35px_rgba(52,211,153,0.18)] md:p-9`}
                >
                  <span aria-hidden className="text-3xl">
                    {pillar.icon}
                  </span>
                  <h3 className="font-inter-display mt-5 text-xl leading-snug font-medium md:text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Traditional vs Pegasus */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-emerald-300 uppercase">Comparación</p>
            <h2 className="font-inter-display mt-4 max-w-2xl text-3xl leading-tight font-medium tracking-[-0.03em] md:text-5xl">
              La diferencia está en el margen
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
            <Reveal>
              <div className={`${glass} h-full rounded-2xl p-7 md:p-9`}>
                <h3 className="font-inter-display text-xl font-medium text-white/80 md:text-2xl">Método Tradicional</h3>
                <p className="mt-2 text-sm text-rose-300/80">Pérdida de margen por comisiones</p>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {traditional.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/60 md:text-base">
                      <X size={18} aria-hidden className="mt-0.5 shrink-0 text-rose-400/80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-emerald-400/40 bg-emerald-400/[0.06] p-7 shadow-[0_0_50px_-15px_rgba(52,211,153,0.45)] backdrop-blur-md md:p-9">
                <h3 className="font-inter-display text-xl font-medium md:text-2xl">Método Pegasus Pixels</h3>
                <p className="mt-2 text-sm text-emerald-300">Menú estructurado y ganancia limpia</p>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {pegasus.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/85 md:text-base">
                      <Check size={18} aria-hidden className="mt-0.5 shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process timeline */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-emerald-300 uppercase">Proceso</p>
            <h2 className="font-inter-display mt-4 max-w-2xl text-3xl leading-tight font-medium tracking-[-0.03em] md:text-5xl">
              De la configuración al primer pago
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-4 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <li key={step.title}>
                <Reveal>
                  <div className={`${glass} relative h-full rounded-2xl p-6`}>
                    <span className="font-mono text-sm text-emerald-400">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="font-inter-display mt-4 text-lg leading-snug font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{step.text}</p>
                    {index < steps.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute top-1/2 -right-[14px] hidden h-px w-[14px] bg-emerald-400/40 md:block"
                      />
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* Bottom CTA */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-24 md:pb-32">
          <Reveal>
            <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-b from-emerald-400/[0.10] to-transparent p-10 text-center backdrop-blur-md md:p-16">
              <h2 className="font-inter-display mx-auto max-w-2xl text-3xl leading-tight font-medium tracking-[-0.03em] md:text-5xl">
                Empieza sin arriesgar un solo dólar
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
                Analizamos tu menú gratis y te mostramos cuánto margen puedes recuperar en DoorDash. El fee de $1,000 solo
                se cobra cuando DoorDash paga su bono de bienvenida.
              </p>
              <div className="mt-9 flex justify-center">
                <Link
                  href={CTA_HREF}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-8 py-4 text-sm font-semibold text-black transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.45)] active:scale-[0.97]"
                >
                  Solicitar Análisis de Menú Gratuito
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
