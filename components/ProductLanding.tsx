import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import LitCard from "@/components/LitCard";
import { cardHover, ctaButton, eyebrow, glass, h2, secondaryButton } from "@/components/landing-styles";

export interface ProductLandingContent {
  eyebrow: string;
  /** Optional product name shown as the first line of the h1, in the accent color. */
  brand?: string;
  headline: string;
  subheadline: string;
  heroPlaceholder: string;
  /** Optional real hero image in /public. When set it replaces the placeholder (the placeholder text is then its alt text). */
  heroImage?: string;
  pillars: { icon: LucideIcon; title: string; text: string; placeholder: string; /** Optional real screenshot in /public that replaces the placeholder. */ image?: string; /** Extra classes for the image, e.g. a scale or translate to reframe it. */ imageClassName?: string; /** From lg, stack the mockup above the text instead of placing them side by side. */ stacked?: boolean }[];
  features: { id: string; eyebrow: string; title: string; items: string[]; placeholder: string; reverse: boolean }[];
  workflowTitle: string;
  steps: { title: string; text: string }[];
  matrix: { problem: string; result: string }[];
  cta: { heading: string; body: string; label: string };
  /** Optional class from globals.css (e.g. "theme-oikos") that fixes the page's palette. */
  themeClass?: string;
  /** Use the desktop pillar card layout (text left / mockup right, stacked panel card) at every screen size. */
  desktopCards?: boolean;
  /** Dark blue boxes with white text for the "Cómo funciona" steps. */
  navySteps?: boolean;
}

const container = "mx-auto w-full max-w-[1440px] px-6 lg:px-16";
const section = "border-t border-fg/10 py-16 md:py-24 lg:py-32";

export default function ProductLanding({ content }: { content: ProductLandingContent }) {
  const { pillars, features, steps, matrix } = content;
  const d = content.desktopCards === true;
  const navy = content.navySteps === true;
  return (
    <div className={content.themeClass}>
      <Navbar />
      <main className="relative flex w-full flex-1 flex-col">
        {/* Hero */}
        <section className="pt-8 pb-16 md:pt-12 lg:pt-16 lg:pb-24">
          <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
            <div className="flex flex-col gap-6">
              <span className={eyebrow}>{content.eyebrow}</span>
              <h1 className="font-inter-display text-4xl leading-[1.05] font-medium tracking-[-0.03em] md:text-6xl">
                {content.brand && <span className="mb-2 block text-accent">{content.brand}</span>}
                {content.headline}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-fg/70 md:text-lg">
                {content.subheadline}
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <a href="#contacto" className={`${ctaButton} justify-center`}>
                  Solicitar Demo
                  <ArrowRight size={16} aria-hidden />
                </a>
                <a href="#como-funciona" className={`${secondaryButton} justify-center`}>
                  Ver Cómo Funciona
                </a>
              </div>
            </div>
            {content.heroImage ? (
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-fg/15">
                <Image
                  src={content.heroImage}
                  alt={content.heroPlaceholder}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, calc(100vw - 3rem)"
                  className="object-cover"
                />
              </div>
            ) : (
              <ImagePlaceholder label={content.heroPlaceholder} aspect="aspect-square" />
            )}
          </div>
        </section>

        {/* Pilares */}
        <Reveal>
          <section className={section}>
            <div className={`${container} flex flex-col gap-10 lg:gap-14`}>
              <div className="flex max-w-3xl flex-col gap-4">
                <span className={eyebrow}>Pilares del sistema</span>
                <h2 className={h2}>Tres piezas, un solo sistema comercial.</h2>
              </div>
              {/* Pillar cards: image behind the text on small screens, side by side (text left, mockup right) from lg, except stacked cards (mockup above, text below). */}
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                {pillars.map(({ icon: Icon, title, text, placeholder, image, imageClassName, stacked }) => (
                  <LitCard
                    as="li"
                    key={title}
                    className={`relative isolate flex min-h-[24rem] flex-col overflow-hidden rounded-2xl bg-white text-black ${
                      d ? (stacked ? "justify-end" : "justify-center") : stacked ? "justify-end lg:justify-end" : "justify-end lg:justify-center"
                    } ${glass} ${cardHover}`}
                  >
                    {/* Image behind the text on small screens, side by side (text left, mockup right) from lg, except stacked cards (mockup above, text below). With desktopCards the desktop layout applies at every size. */}
                    <div
                      className={`absolute inset-0 -z-20 ${
                        d
                          ? stacked ? "inset-x-6 top-6 bottom-[48%]" : "left-1/2"
                          : stacked ? "lg:inset-x-6 lg:top-6 lg:bottom-[48%]" : "lg:left-1/2"
                      }`}
                    >
                      {image ? (
                        <Image src={image} alt={placeholder} fill sizes="(min-width: 1024px) 17vw, (min-width: 768px) 33vw, calc(100vw - 3rem)" className={`object-contain ${d ? "object-center" : "object-top lg:object-center"} ${imageClassName ?? ""}`} />
                      ) : (
                        <ImagePlaceholder label={placeholder} flush className="absolute inset-0 !border-0 text-black" />
                      )}
                    </div>
                    <div aria-hidden className={`absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-gradient-to-t from-white via-white/90 to-transparent ${d ? "hidden" : "lg:hidden"}`} />
                    <div className={`relative flex flex-col gap-3 ${d ? "p-4 lg:p-6" : "p-5 lg:p-6"} ${stacked ? "" : d ? "w-1/2" : "lg:w-1/2"}`}>
                      <Icon size={22} aria-hidden className="text-black/70" />
                      <div className="flex flex-col gap-2">
                        <h3 className={`font-serif leading-snug ${d ? "text-xl lg:text-2xl" : "text-2xl"}`}>{title}</h3>
                        <p className={`leading-relaxed text-black/70 ${d ? "text-sm lg:text-base" : ""}`}>{text}</p>
                      </div>
                    </div>
                  </LitCard>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* Funcionalidades */}
        <Reveal>
          <section className={section}>
            <div className={`${container} flex flex-col gap-16 lg:gap-24`}>
              {features.map((feature) => (
                <div key={feature.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className={`flex flex-col gap-6 ${feature.reverse ? "lg:order-2" : ""}`}>
                    <span className={eyebrow}>{feature.eyebrow}</span>
                    <h2 className={h2}>{feature.title}</h2>
                    <ul className="flex flex-col gap-3">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-fg/80">
                          <Check size={18} aria-hidden className="mt-1 shrink-0 text-accent" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ImagePlaceholder label={feature.placeholder} aspect="aspect-[4/3]" className={feature.reverse ? "lg:order-1" : ""} />
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Flujo de trabajo */}
        <Reveal>
          <section id="como-funciona" className={`${section} scroll-mt-24`}>
            <div className={`${container} flex flex-col gap-10 lg:gap-14`}>
              <div className="flex max-w-3xl flex-col gap-4">
                <span className={eyebrow}>Cómo funciona</span>
                <h2 className={h2}>{content.workflowTitle}</h2>
              </div>
              <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                {steps.map((step, i) => (
                  <LitCard as="li" key={step.title} className={`flex flex-col gap-4 rounded-2xl p-6 lg:p-8 ${navy ? "border border-white/15 bg-[#0a2a5e] text-white" : glass} ${cardHover}`}>
                    <span className={`font-inter-display text-5xl leading-none font-medium tracking-[-0.03em] ${navy ? "text-[#7cc4ff]" : "text-accent"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-2xl leading-snug lg:text-3xl">{step.title}</h3>
                    <p className={`leading-relaxed ${navy ? "text-white/80" : "text-fg/70"}`}>{step.text}</p>
                  </LitCard>
                ))}
              </ol>
            </div>
          </section>
        </Reveal>

        {/* Matriz de valor */}
        <Reveal>
          <section className={section}>
            <div className={`${container} flex flex-col gap-10 lg:gap-14`}>
              <div className="flex max-w-3xl flex-col gap-4">
                <span className={eyebrow}>Matriz de valor</span>
                <h2 className={h2}>Problema resuelto, resultado comercial.</h2>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-fg/15">
                <table className="w-full min-w-[34rem] border-collapse text-left">
                  <caption className="sr-only">Problemas que resuelve la plataforma y el resultado comercial de cada uno</caption>
                  <thead>
                    <tr className="bg-fg/[0.06] text-xs tracking-wider uppercase">
                      <th scope="col" className="px-5 py-4 font-medium text-fg/60 lg:px-8">
                        Problema resuelto
                      </th>
                      <th scope="col" className="px-5 py-4 font-medium text-accent lg:px-8">
                        Resultado comercial
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrix.map((row) => (
                      <tr key={row.problem} className="border-t border-fg/10">
                        <th scope="row" className="px-5 py-4 align-top font-normal text-fg/70 lg:px-8 lg:py-5">
                          {row.problem}
                        </th>
                        <td className="px-5 py-4 align-top font-medium lg:px-8 lg:py-5">
                          <span className="flex items-start gap-2">
                            <ArrowRight size={16} aria-hidden className="mt-1 shrink-0 text-accent" />
                            {row.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </Reveal>

        {/* CTA final */}
        <Reveal>
          <CtaBanner heading={content.cta.heading} body={content.cta.body} primaryHref="#contacto" primaryLabel={content.cta.label} tone={content.themeClass ? "theme" : navy ? "navy" : "reverse"} />
        </Reveal>

        {/* Same contact section as the home page (id="contacto"), so the CTA buttons and the header button scroll to it. */}
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}
