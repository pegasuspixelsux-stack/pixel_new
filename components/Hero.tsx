import { Star } from "lucide-react";
import HeroMockups from "@/components/HeroMockups";

// The headline is stacked on three lines. A trailing "~" on a line suppresses its star (used here because the headline is a sentence). Rows alternate full and a lighter (60%) text color; the stars stay solid.
const lines = ["Infraestructura~", "Digital para~", "tu Negocio.~"];
// Phones show a different headline (hidden from md up, where `lines` shows instead).
// Tablets (md to lg) show the headline in two rows.
const tabletLines = ["Infraestructura Digital~", "para tu Negocio.~"];
const mobileLines = ["El motor~", "tecnológico que~", "tu empresa~", "necesita.~"];

function Lines({ items }: { items: string[] }) {
  return items.map((line) => (
    <span key={line} className="mb-[0.04em] block text-fg last:mb-0 even:text-accent">
      {line.split("|").map((part) => (
        <span key={part}>
          {part.replace("~", "")}
          {!part.endsWith("~") && <Star aria-hidden className="mx-[0.2em] inline-block size-[0.55em] fill-current text-fg align-[0.08em]" strokeWidth={0} />}
        </span>
      ))}
    </span>
  ));
}

export default function Hero() {
  return (
    // Starts at the top of the viewport, underneath the 80px sticky navbar.
    <section className="relative isolate -mt-14 flex md:-mt-20 min-h-[85svh] w-full lg:min-h-svh items-center overflow-x-clip pt-32 pb-10 lg:pt-40 lg:pb-14">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 md:items-center lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[1fr_auto_auto_auto_1fr] lg:items-start lg:gap-x-8 lg:gap-y-5 lg:px-16">
        <div className="hero-exit text-left md:pb-6 md:text-center lg:pb-0 lg:text-left lg:col-start-1 lg:row-start-2">
          <p className="hero-rise mb-4 text-sm font-medium tracking-[0.2em] text-accent uppercase">Pegasus Pixels</p>
          {/* The headline is the LCP element, so it carries no entrance animation and paints with the first frame. The rest enters in sequence (CSS only, see .hero-rise): eyebrow, text, buttons, then the mockups from the center out. */}
          <h1 className="font-inter-display text-[12.31vw] font-medium leading-[0.98] tracking-[-0.03em] md:leading-[1.12] md:text-[min(6.62vw,6.48rem)] lg:text-[min(4.6vw,5rem)]">
            <span className="md:hidden">
              <Lines items={mobileLines} />
            </span>
            <span className="hidden md:block lg:hidden">
              <Lines items={tabletLines} />
            </span>
            <span className="hidden lg:block">
              <Lines items={lines} />
            </span>
          </h1>
        </div>

        {/* Support copy: two short rows. Under the mockups at every screen size. */}
        <p style={{ "--rise-delay": "0.15s" } as React.CSSProperties} className="hero-rise order-last mt-5 max-w-2xl md:mx-auto lg:mx-0 lg:col-start-1 lg:row-start-3 text-left md:text-center lg:text-left text-[clamp(14px,4.4vw,18px)] leading-relaxed text-fg/70 md:text-lg">
          {/* Phones get their own support line; the two-row version shows from md up. */}
          <span className="block md:hidden">Consultoría estratégica, desarrollo web y automatización de flujos de trabajo orientados a la rentabilidad operativa.</span>
          <span className="hidden md:block">Sitios web, catálogos y automatizaciones</span>
          <span className="hidden md:block">para captar clientes y ordenar tu negocio.</span>
        </p>

        {/* Buttons: under the mockups and the support text */}
        <div style={{ "--rise-delay": "0.3s" } as React.CSSProperties} className="hero-rise order-last flex items-center lg:col-start-1 lg:row-start-4 justify-start md:justify-center lg:justify-start gap-3 sm:gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bright-lemon-950 transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-accent/90 hover:shadow-[0_0_40px_var(--accent-glow)] active:scale-[0.97] sm:px-8 sm:py-4"
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
