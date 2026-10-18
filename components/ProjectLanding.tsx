import Link from "next/link";
import { ArrowDown, ArrowRight, Check, ShieldCheck, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LitCard from "@/components/LitCard";
import FounderBio from "@/components/FounderBio";
import { cardHover, ctaButton, eyebrow, glass, h2, secondaryButton } from "@/components/landing-styles";
import type { LandingTier, ProjectLandingConfig } from "@/config/project-landings";

// Reusable landing page for a project (Oikos, Dealio, Talos, Nauta, ...). All copy comes from one
// ProjectLandingConfig record in config/project-landings.ts; this component only lays it out.

const CTA_HREF = "/#contacto";

function TierSection({ id, tier }: { id: string; tier: LandingTier }) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-[1100px] scroll-mt-24 px-6 pb-20 md:pb-28">
      <div className="reveal-up">
        <p className={eyebrow}>{tier.badge}</p>
        <h2 className={`${h2} mt-4 max-w-3xl`}>{tier.title}</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-fg/85 md:text-lg">{tier.description}</p>
      </div>
      <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
        {tier.features.map((feature) => (
          <li key={feature} className="reveal-up">
            <LitCard className={`${glass} ${cardHover} flex h-full items-start gap-4 rounded-2xl p-6`}>
              <Check size={20} aria-hidden className="mt-0.5 shrink-0 text-accent" />
              <span className="text-sm leading-relaxed text-fg/90 md:text-base">{feature}</span>
            </LitCard>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center md:justify-start">
        <Link href={CTA_HREF} className={ctaButton}>
          {tier.ctaText}
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  );
}

export default function ProjectLanding({ landing }: { landing: ProjectLandingConfig }) {
  const { tiers, pillars, comparison, guaranteeBanner } = landing;
  const accentClass = landing.accentColor ? `accent-${landing.accentColor}` : "";

  return (
    <>
      <Navbar />
      <main className={`${accentClass} relative flex w-full flex-1 flex-col overflow-x-clip`}>
        {/* Soft accent glow behind the hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_at_50%_0%,var(--accent-glow),transparent_65%)]"
        />

        {/* Hero + tier selector */}
        <section className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-accent uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            {landing.badge}
          </span>
          <h1 className="font-inter-display text-[2.4rem] leading-[1.05] font-medium tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            {landing.title}
          </h1>
          <p className="mt-5 text-sm tracking-[0.14em] text-fg/70 uppercase">{landing.subtitle}</p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-fg/85 md:text-lg">
            {landing.heroDescription}
          </p>

          <div className="mt-12 grid w-full gap-4 text-left md:grid-cols-2 md:gap-6">
            {(
              [
                ["#nuevos", tiers.newClients],
                ["#existentes", tiers.existingClients],
              ] as const
            ).map(([href, tier]) => (
              <LitCard
                as="a"
                key={href}
                href={href}
                className={`${glass} ${cardHover} group flex flex-col gap-4 rounded-2xl p-7 md:p-8`}
              >
                <span className={eyebrow}>{tier.badge}</span>
                <span className="font-inter-display text-xl leading-snug font-medium md:text-2xl">{tier.title}</span>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Ver el servicio
                  <ArrowDown size={14} aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5" />
                </span>
              </LitCard>
            ))}
          </div>
        </section>

        {/* Guarantee banner */}
        {guaranteeBanner && (
          <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
            <div className="reveal-up flex flex-col items-center gap-6 rounded-3xl border border-accent/30 bg-accent/[0.06] p-8 text-center shadow-[0_0_60px_-20px_var(--accent-glow)] backdrop-blur-md md:flex-row md:gap-10 md:p-12 md:text-left">
              <div className="font-inter-display text-5xl leading-none font-medium tracking-[-0.04em] text-accent md:text-7xl">
                {guaranteeBanner.highlightText}
              </div>
              <div>
                <p className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.18em] text-accent uppercase md:justify-start">
                  <ShieldCheck size={16} aria-hidden />
                  Garantía
                </p>
                <p className="mt-3 text-lg leading-relaxed text-fg/90 md:text-xl">{guaranteeBanner.description}</p>
              </div>
            </div>
          </section>
        )}

        <TierSection id="nuevos" tier={tiers.newClients} />
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <div className="border-t border-fg/10" />
        </div>
        <div className="pt-20 md:pt-28">
          <TierSection id="existentes" tier={tiers.existingClients} />
        </div>

        {/* Pillars */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
          <div className="reveal-up">
            <p className={eyebrow}>Ventajas clave</p>
            <h2 className={`${h2} mt-4 max-w-2xl`}>Lo que hace diferente a {landing.title.split(":")[0]}</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="reveal-up">
                <LitCard as="article" className={`${glass} ${cardHover} h-full rounded-2xl p-7 md:p-9`}>
                  <span aria-hidden className="text-3xl">
                    {pillar.icon}
                  </span>
                  <h3 className="font-inter-display mt-5 text-xl leading-snug font-medium md:text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg/80 md:text-base">{pillar.description}</p>
                </LitCard>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        {comparison && (
          <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
            <div className="border-t border-fg/10 pt-20 md:pt-28">
              <div className="reveal-up">
                <p className={eyebrow}>Comparación</p>
                <h2 className={`${h2} mt-4 max-w-2xl`}>{comparison.title}</h2>
              </div>
              <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
                <div className="reveal-up">
                  <LitCard className={`${glass} ${cardHover} h-full rounded-2xl p-7 md:p-9`}>
                    <h3 className="font-inter-display text-xl font-medium text-fg/90 md:text-2xl">
                      {comparison.traditionalMethod.title}
                    </h3>
                    <ul className="mt-6 flex flex-col gap-3.5">
                      {comparison.traditionalMethod.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-fg/75 md:text-base">
                          <X size={18} aria-hidden className="mt-0.5 shrink-0 text-fg/40" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </LitCard>
                </div>
                <div className="reveal-up">
                  <LitCard
                    className={`h-full rounded-2xl border border-accent/40 bg-accent/[0.06] p-7 shadow-[0_0_50px_-15px_var(--accent-glow)] backdrop-blur-md md:p-9 ${cardHover}`}
                  >
                    <h3 className="font-inter-display text-xl font-medium md:text-2xl">{comparison.pegasusMethod.title}</h3>
                    <ul className="mt-6 flex flex-col gap-3.5">
                      {comparison.pegasusMethod.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-fg/95 md:text-base">
                          <Check size={18} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </LitCard>
                </div>
              </div>
            </div>
          </section>
        )}

        {landing.showFounderBio && <FounderBio />}

        {/* Closing CTA: one button per tier */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-24 md:pb-32">
          <div className="reveal-up rounded-3xl border border-accent/30 bg-gradient-to-b from-accent/[0.10] to-transparent p-10 text-center backdrop-blur-md md:p-16">
            <h2 className={`${h2} mx-auto max-w-2xl`}>Elige tu punto de partida</h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={CTA_HREF} className={ctaButton}>
                {tiers.newClients.ctaText}
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href={CTA_HREF}
                className={secondaryButton}
              >
                {tiers.existingClients.ctaText}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
