import { Star } from "lucide-react";
import HeroTicker from "@/components/HeroTicker";

// Each capability is its own stacked line, ending with the star. Rows alternate full and a lighter (60%) text color; the stars stay solid.
const lines = ["Infraestructura digital~", "para empresas modernas.", "Diseño Web|Automatizaciones"];

export default function Hero() {
  return (
    // Starts at the top of the viewport, underneath the 80px sticky navbar.
    <section className="relative isolate -mt-20 flex min-h-[80svh] w-full lg:min-h-svh items-center overflow-x-clip pt-40 pb-10 lg:pt-52 lg:pb-16">

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 lg:gap-8 px-6 lg:px-16">
        <div className="hero-exit">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-accent uppercase">Pegasus Pixels</p>
          {/* The headline is the LCP element, so it carries no entrance animation and paints with the first frame. */}
          <h1 className="font-inter-display text-[8.55vw] font-medium leading-[0.98] tracking-[-0.03em] md:text-[min(4.6vw,4.5rem)]">
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

        <HeroTicker />

      </div>
    </section>
  );
}
