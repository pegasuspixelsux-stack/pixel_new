import { Camera } from "lucide-react";
import { Mrs_Saint_Delafield } from "next/font/google";

// Handwritten script for the founder's signature; only the pages that show this section load it.
const signature = Mrs_Saint_Delafield({ weight: "400", subsets: ["latin"], display: "swap" });

const eyebrow = "text-xs font-medium tracking-[0.18em] text-accent uppercase";
const h2 = "font-inter-display text-3xl leading-tight font-medium tracking-[-0.03em] md:text-5xl";

// Founder "Quiénes Somos" section, shared by the service and project landing pages.
export default function FounderBio() {
  return (
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
  );
}
