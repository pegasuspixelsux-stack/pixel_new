import { Star } from "lucide-react";
import HeroMockups from "@/components/HeroMockups";

// The headline is stacked on three lines. A trailing "~" on a line suppresses its star (used here because the headline is a sentence). Rows alternate full and a lighter (60%) text color; the stars stay solid.
const lines = ["Infraestructura~", "Digital para~", "tu Negocio.~"];

export default function Hero() {
  return (
    // Starts at the top of the viewport, underneath the 80px sticky navbar.
    <section className="hero-dark relative isolate -mt-14 flex md:-mt-20 min-h-[80svh] w-full lg:min-h-svh items-center overflow-x-clip pt-32 pb-10 lg:pt-40 lg:pb-14">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 lg:gap-5 px-6 lg:px-16">
        <div className="hero-exit text-left">
          <p className="hero-rise mb-4 text-sm font-medium tracking-[0.2em] text-[#FFFF00] uppercase">Pegasus Pixels</p>
          {/* The headline is the LCP element, so it carries no entrance animation and paints with the first frame. The rest enters in sequence (CSS only, see .hero-rise): eyebrow, text, buttons, then the mockups from the center out. */}
          <h1 className="font-inter-display text-[12.31vw] font-medium leading-[1.12] tracking-[-0.03em] md:text-[min(6.62vw,6.48rem)]">
            {lines.map((line) => (
              <span key={line} className="mb-[0.04em] block text-fg last:mb-0 even:text-fg/60">
                {line.split("|").map((part) => (
                  <span key={part}>
                    {part.replace("~", "")}
                    {!part.endsWith("~") && <Star aria-hidden className="mx-[0.2em] inline-block size-[0.55em] fill-current text-fg align-[0.08em]" strokeWidth={0} />}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        {/* Support copy: two short rows. Under the mockups at every screen size. */}
        <p style={{ "--rise-delay": "0.15s" } as React.CSSProperties} className="hero-rise order-last mt-5 max-w-2xl text-left text-[clamp(14px,4.4vw,18px)] leading-relaxed text-fg/70 md:text-lg">
          <span className="block">Sitios web, catálogos y automatizaciones</span>
          <span className="block">para captar clientes y ordenar tu negocio.</span>
        </p>

        {/* Buttons: under the mockups and the support text */}
        <div style={{ "--rise-delay": "0.3s" } as React.CSSProperties} className="hero-rise order-last flex items-center justify-start gap-3 sm:gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-[#FFFF00] px-5 py-3 text-sm font-semibold text-black transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-[#FFFF00]/90 hover:shadow-[0_0_40px_rgba(255,255,0,0.45)] active:scale-[0.97] sm:px-8 sm:py-4"
          >
            Agendar Diagnóstico
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full border border-fg/40 px-5 py-3 text-sm font-semibold transition-[background-color,transform] duration-200 ease-out hover:bg-fg/5 active:scale-[0.97] sm:px-8 sm:py-4"
          >
            Ver Servicios
          </a>
        </div>

        <HeroMockups />

      </div>
    </section>
  );
}
