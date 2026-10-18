import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Pillars from "@/components/Pillars";

// Each capability is its own stacked line, ending with the star. Rows alternate full and a lighter (60%) text color; the stars stay solid.
const lines = ["Tu socio tecnológico", "Diseñamos tu infraestructura digital", "Ecosistemas comerciales", "Agentes & Automatizaciones"];

export default function Hero() {
  return (
    // Starts at the top of the viewport, underneath the 80px sticky navbar.
    <section className="relative isolate -mt-20 flex min-h-svh w-full items-center overflow-x-clip pt-40 pb-24 lg:pt-52 lg:pb-40">

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 lg:gap-8 px-6 lg:px-16">
        <div className="hero-exit">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-accent uppercase">Pegasus Pixels</p>
          {/* The headline is the LCP element, so it carries no entrance animation and paints with the first frame. */}
          <h1 className="font-inter-display text-[8.55vw] font-medium leading-[0.98] tracking-[-0.03em] md:text-[min(4.6vw,4.5rem)]">
            {lines.map((line) => (
              <span key={line} className="mb-[0.04em] block text-fg last:mb-0 even:text-fg/60">
                {line}
                <Star aria-hidden className="mx-[0.2em] inline-block size-[0.55em] fill-current text-fg align-[0.08em]" strokeWidth={0} />
              </span>
            ))}
          </h1>
        </div>

        <Pillars />

        <div className="mt-6 flex justify-center lg:mt-8">
          <Link
            href="/proyectos"
            className="flex items-center gap-2 rounded-full border border-fg/40 px-8 py-3.5 text-sm font-medium transition-[background-color,transform] duration-200 ease-out hover:bg-fg/5 active:scale-[0.97]"
          >
            Ver todos los proyectos
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
