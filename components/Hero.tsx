import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Pillars from "@/components/Pillars";

// Each capability is its own stacked line: strong text, the star, then a lighter continuation in the same type size.
const lines = [
  { primary: "Tu socio tecnológico" },
  { primary: "Diseñamos tu infraestructura digital", secondary: "a la medida de tu negocio" },
  { primary: "Ecosistemas digitales", secondary: "para captar y convertir" },
  { primary: "Agentes & Automatizaciones", secondary: "respuesta inmediata 24/7" },
];

export default function Hero() {
  return (
    // Starts at the top of the viewport, underneath the 80px sticky navbar.
    <section className="relative isolate -mt-20 flex min-h-svh w-full items-center overflow-x-clip pt-40 pb-24 lg:pt-52 lg:pb-40">

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 lg:gap-16 px-6 lg:px-16">
        <div className="hero-exit">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-accent uppercase">Pegasus Pixels</p>
          {/* The headline is the LCP element, so it carries no entrance animation and paints with the first frame. */}
          <h1 className="font-inter-display text-[8.55vw] font-medium leading-[1.05] tracking-[-0.03em] md:text-[min(4.6vw,4.5rem)]">
            {lines.map(({ primary, secondary }) => (
              <span key={primary} className="mb-[0.18em] block last:mb-0">
                {primary}
                <Star aria-hidden className="mx-[0.2em] inline-block size-[0.55em] fill-current text-accent align-[0.08em]" strokeWidth={0} />
                {secondary && <span className="inline-block text-fg/45">{secondary}</span>}
              </span>
            ))}
          </h1>
        </div>

        <Pillars />

        <div className="flex justify-center">
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
