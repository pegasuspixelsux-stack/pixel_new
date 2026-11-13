import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FlowSimulator, { type FlowSimulatorTab } from "@/components/FlowSimulator";
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
  /** Optional eyebrow and subtitle for the "Cómo funciona" section (default eyebrow: "Cómo funciona"). */
  workflowEyebrow?: string;
  workflowSubtitle?: string;
  /** Steps may carry a role chip and labelled detail lines (e.g. Estado / Acción / Resultado). */
  steps: { title: string; text: string; role?: string; details?: { label: string; text: string }[] }[];
  matrix: { problem: string; result: string }[];
  cta: { heading: string; body: string; label: string; /** Optional micro-copy under the buttons. */ note?: string };
  /** Optional class from globals.css (e.g. "theme-oikos") that fixes the page's palette. */
  themeClass?: string;
  /** Use the desktop pillar card layout (text left / mockup right, stacked panel card) at every screen size. */
  desktopCards?: boolean;
  /** Dark blue boxes with white text for the "Cómo funciona" steps. */
  navySteps?: boolean;
  /** Hero in one column at every size: centered text on top, visual below. */
  stackedHero?: boolean;
  /** Render the "Cómo funciona" section right below the hero instead of after the features. */
  workflowFirst?: boolean;
  /** Pillar cards in the dark warm palette (rust-brown, white text, lemon icons) instead of white cards with black text. */
  warmPillars?: boolean;
  /** Optional two-column objection-handling section, rendered right after the workflow section. */
  /** Optional benefits grid, rendered just before the value matrix. */
  benefits?: { eyebrow: string; title: string; subtitle: string; items: { icon: LucideIcon; title: string; text: string }[] };
  /** Optional interactive tabbed simulator, rendered just before the value matrix (after the benefits). */
  simulator?: { eyebrow: string; title: string; subtitle: string; tabs: FlowSimulatorTab[] };
  /** Optional FAQ accordion, rendered between the value matrix and the final CTA. */
  faq?: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  objection?: { eyebrow: string; title: string; highlight: string; text: string };
  /** Optional highlighted stats shown at the bottom of the hero. */
  stats?: { value: string; text: string }[];
}

const container = "mx-auto w-full max-w-[1440px] px-6 lg:px-16";
const section = "border-t border-fg/10 py-16 md:py-24 lg:py-32";

export default function ProductLanding({ content }: { content: ProductLandingContent }) {
  const { pillars, features, steps, matrix } = content;
  const d = content.desktopCards === true;
  const navy = content.navySteps === true;
  const sh = content.stackedHero === true;
  const workflowFirst = content.workflowFirst === true;
  const warm = content.warmPillars === true;
  const objection = content.objection && (
    <Reveal>
      <section className={section}>
        <div className={`${container} grid items-start gap-8 lg:grid-cols-2 lg:gap-16`}>
          <div className="flex flex-col gap-4">
            <span className={eyebrow}>{content.objection.eyebrow}</span>
            <h2 className={h2}>{content.objection.title}</h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-serif text-2xl leading-snug text-accent lg:text-3xl">{content.objection.highlight}</p>
            <p className="text-base leading-relaxed text-fg/70 md:text-lg">{content.objection.text}</p>
          </div>
        </div>
      </section>
    </Reveal>
  );
  const benefits = content.benefits && (
    <Reveal>
      <section className={section}>
        <div className={`${container} flex flex-col gap-10 lg:gap-14`}>
          <div className="flex max-w-3xl flex-col gap-4">
            <span className={eyebrow}>{content.benefits.eyebrow}</span>
            <h2 className={h2}>{content.benefits.title}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-fg/70 md:text-lg">{content.benefits.subtitle}</p>
          </div>
          {/* 6-column grid: first row three cards, second row two wider cards, so five items fill both rows. */}
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:gap-8">
            {content.benefits.items.map(({ icon: Icon, title, text }, i) => (
              <LitCard as="li" key={title} className={`flex flex-col gap-4 rounded-2xl p-6 lg:p-8 ${i < 3 ? "md:col-span-2" : "md:col-span-3"} ${glass} ${cardHover}`}>
                <Icon size={28} aria-hidden className="text-accent" />
                <h3 className="font-serif text-2xl leading-snug">{title}</h3>
                <p className="leading-relaxed text-fg/70">{text}</p>
              </LitCard>
            ))}
          </ul>
        </div>
      </section>
    </Reveal>
  );
  const simulator = content.simulator && (
    <Reveal>
      <section className={section}>
        <div className={`${container} flex flex-col gap-10 lg:gap-14`}>
          <div className="flex max-w-3xl flex-col gap-4">
            <span className={eyebrow}>{content.simulator.eyebrow}</span>
            <h2 className={h2}>{content.simulator.title}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-fg/70 md:text-lg">{content.simulator.subtitle}</p>
          </div>
          <FlowSimulator tabs={content.simulator.tabs} />
        </div>
      </section>
    </Reveal>
  );
  const faq = content.faq && (
    <Reveal>
      <section className={section}>
        <div className={`${container} grid items-start gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16`}>
          <div className="flex flex-col gap-4">
            <span className={eyebrow}>{content.faq.eyebrow}</span>
            <h2 className={h2}>{content.faq.title}</h2>
          </div>
          <div className="flex flex-col gap-4">
            {content.faq.items.map(({ q, a }) => (
              <details key={q} className={`group rounded-2xl p-5 lg:p-6 ${glass}`}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-xl leading-snug lg:text-2xl [&::-webkit-details-marker]:hidden">
                  {q}
                  <Plus size={22} aria-hidden className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-4 leading-relaxed text-fg/70 md:text-lg">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
  const workflow = (
        <Reveal>
          <section id="como-funciona" className={`${section} scroll-mt-24`}>
            <div className={`${container} flex flex-col gap-10 lg:gap-14`}>
              <div className="flex max-w-3xl flex-col gap-4">
                <span className={eyebrow}>{content.workflowEyebrow ?? "Cómo funciona"}</span>
                <h2 className={h2}>{content.workflowTitle}</h2>
                {content.workflowSubtitle && <p className="max-w-2xl text-base leading-relaxed text-fg/70 md:text-lg">{content.workflowSubtitle}</p>}
              </div>
              <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                {steps.map((step, i) => (
                  <LitCard as="li" key={step.title} className={`flex flex-col gap-4 rounded-2xl p-6 lg:p-8 ${navy ? "border border-white/15 bg-surface text-white" : glass} ${cardHover}`}>
                    <span className={`font-inter-display text-5xl leading-none font-medium tracking-[-0.03em] ${navy ? "text-accent" : "text-accent"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step.role && (
                      <span className={`w-fit rounded-full border px-3 py-1 text-xs font-medium tracking-wider uppercase ${navy ? "border-white/25 text-white/80" : "border-fg/20 text-fg/60"}`}>
                        {step.role}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl leading-snug lg:text-3xl">{step.title}</h3>
                    <p className={`leading-relaxed ${navy ? "text-white/80" : "text-fg/70"}`}>{step.text}</p>
                    {step.details?.map((d) => (
                      <p key={d.label} className={`leading-relaxed ${navy ? "text-white/80" : "text-fg/70"}`}>
                        <strong className={`font-medium ${navy ? "text-white" : "text-fg"}`}>{d.label}:</strong> {d.text}
                      </p>
                    ))}
                  </LitCard>
                ))}
              </ol>
            </div>
          </section>
        </Reveal>
  );

  return (
    <div className={content.themeClass}>
      <Navbar />
      <main className="relative flex w-full flex-1 flex-col">
        {/* Hero */}
        <section className="pt-8 pb-16 md:pt-12 lg:pt-16 lg:pb-24">
          <div className={`${container} grid items-center gap-12 ${sh ? "" : "lg:grid-cols-2 lg:gap-16"}`}>
            <div className={`flex flex-col gap-6 ${sh ? "mx-auto max-w-3xl items-center text-center" : ""}`}>
              <span className={eyebrow}>{content.eyebrow}</span>
              <h1 className="font-inter-display text-4xl leading-[1.05] font-medium tracking-[-0.03em] md:text-6xl">
                {content.brand && <span className="mb-2 block text-accent">{content.brand}</span>}
                {content.headline}
              </h1>
              <p className={`${sh ? "max-w-2xl" : "max-w-xl"} text-base leading-relaxed text-fg/70 md:text-lg`}>
                {content.subheadline}
              </p>
              <div className={`flex flex-col gap-4 pt-2 sm:flex-row ${sh ? "w-full sm:justify-center" : ""}`}>
                <a href="#contacto" className={`${ctaButton} justify-center ${sh ? "sm:flex-1" : ""}`}>
                  Solicitar Demo
                  <ArrowRight size={16} aria-hidden />
                </a>
                <a href="#como-funciona" className={`${secondaryButton} justify-center ${sh ? "sm:flex-1" : ""}`}>
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
            {content.stats && (
              <dl className={`grid gap-8 border-t border-fg/10 pt-10 sm:grid-cols-3 sm:gap-6 ${sh ? "text-center" : "lg:col-span-2"}`}>
                {content.stats.map(({ value, text }) => (
                  <div key={value} className="flex flex-col gap-2">
                    <dt className="font-inter-display text-5xl font-medium tracking-[-0.03em] text-accent md:text-6xl">{value}</dt>
                    <dd className={`max-w-xs text-sm leading-relaxed text-fg/70 md:text-base ${sh ? "mx-auto" : ""}`}>{text}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </section>

        {workflowFirst && workflow}
        {workflowFirst && objection}

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
                    className={`relative isolate flex min-h-[24rem] flex-col overflow-hidden rounded-2xl ${warm ? "bg-surface text-white" : "bg-white text-black"} ${
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
                        <ImagePlaceholder label={placeholder} flush labelClassName={warm ? "text-white/60" : undefined} className={`absolute inset-0 !border-0 ${warm ? "" : "text-black"}`} />
                      )}
                    </div>
                    <div aria-hidden className={`absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-gradient-to-t ${warm ? "from-surface via-surface/90" : "from-white via-white/90"} to-transparent ${d ? "hidden" : "lg:hidden"}`} />
                    <div className={`relative flex flex-col gap-3 ${d ? "p-4 lg:p-6" : "p-5 lg:p-6"} ${stacked ? "" : d ? "w-1/2" : "lg:w-1/2"}`}>
                      <Icon size={22} aria-hidden className={warm ? "text-accent" : "text-black/70"} />
                      <div className="flex flex-col gap-2">
                        <h3 className={`font-serif leading-snug ${d ? "text-xl lg:text-2xl" : "text-2xl"}`}>{title}</h3>
                        <p className={`leading-relaxed ${warm ? "text-white/70" : "text-black/70"} ${d ? "text-sm lg:text-base" : ""}`}>{text}</p>
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

        {!workflowFirst && workflow}
        {!workflowFirst && objection}

        {benefits}

        {simulator}

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

        {faq}

        {/* CTA final */}
        <Reveal>
          <CtaBanner heading={content.cta.heading} body={content.cta.body} primaryHref="#contacto" primaryLabel={content.cta.label} note={content.cta.note} tone="warm" />
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
