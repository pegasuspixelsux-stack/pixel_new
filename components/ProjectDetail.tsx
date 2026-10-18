import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LitCard from "@/components/LitCard";
import { cardHover, ctaButton, eyebrow, glass, h2, secondaryButton } from "@/components/landing-styles";
import { relatedProjects, type Project, type ProjectCategory } from "@/config/projects";

// Project detail page. Same architecture as the service pages (DoorDash, ProjectLanding): theme-aware layout,
// accent glow hero, glass cards with the home-page hover, CSS scroll-in, and a closing inquiry CTA. All content
// comes from one Project record in config/projects.ts.

const CTA_HREF = "/#contacto";

// Accent palette per vertical (classes are defined in app/globals.css).
const accentByCategory: Record<ProjectCategory, string> = {
  Automotriz: "accent-blue",
  Inmobiliaria: "accent-amber",
  Gastronomía: "accent-rose",
  Servicios: "accent-cyan",
};

// Gallery files are added to /public/projects over time; only show the ones that exist.
const publicFileExists = (src: string) => existsSync(path.join(process.cwd(), "public", src));

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <LitCard className={`${glass} ${cardHover} rounded-2xl p-5 md:p-6`}>
      <p className="text-[11px] font-medium tracking-[0.18em] text-fg/65 uppercase">{label}</p>
      <p className="font-inter-display mt-2 text-lg leading-snug font-medium md:text-xl">{value}</p>
    </LitCard>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const accentClass = accentByCategory[project.category];
  const year = new Date(project.createdAt).getFullYear().toString();
  const related = relatedProjects(project);

  const specs = [
    { label: "Año", value: year },
    { label: "Cliente", value: project.client },
    { label: "Sector", value: project.category },
    { label: "Motor / Stack", value: project.engine },
    { label: "Estado", value: project.status },
    ...(project.impact ?? []).map((item) => ({ label: item.label, value: item.value })),
  ];

  // The hero image already shows above, so the gallery only lists the extra screenshots.
  const gallery = project.gallery.filter(
    (src, index, all) => src !== project.heroImage && all.indexOf(src) === index && publicFileExists(src),
  );
  const heroImage = publicFileExists(project.heroImage) ? project.heroImage : null;

  return (
    <>
      <Navbar />
      <main className={`${accentClass} relative flex w-full flex-1 flex-col overflow-x-clip`}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_at_50%_0%,var(--accent-glow),transparent_65%)]"
        />

        {/* Hero header */}
        <section className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center px-6 pt-20 pb-16 text-center md:pt-28 md:pb-20">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-accent uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            {project.category}
          </span>
          <h1 className="font-inter-display max-w-4xl text-[2.4rem] leading-[1.05] font-medium tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-fg/85 md:text-lg">{project.summary}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={CTA_HREF} className={ctaButton}>
              Consultar por un proyecto similar
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/proyectos" className={secondaryButton}>
              Ver todos los proyectos
            </Link>
          </div>

          {heroImage && (
            <div className={`${glass} relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-3xl`}>
              <Image
                src={heroImage}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1100px) 1052px, 100vw"
                quality={60}
                className="object-cover"
              />
            </div>
          )}
        </section>

        {/* Key specifications */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
          <div className="reveal-up">
            <p className={eyebrow}>Ficha del proyecto</p>
            <h2 className={`${h2} mt-4 max-w-2xl`}>Datos clave</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {specs.map((spec) => (
              <div key={spec.label} className="reveal-up">
                <Spec label={spec.label} value={spec.value} />
              </div>
            ))}
          </div>
          <p className="reveal-up mt-10 max-w-3xl text-base leading-relaxed text-fg/85 md:text-lg">{project.description}</p>
        </section>

        {/* Scope: challenge, solution, how it works, deliverables */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
          <div className="border-t border-fg/10 pt-20 md:pt-28">
            <div className="reveal-up">
              <p className={eyebrow}>Alcance</p>
              <h2 className={`${h2} mt-4 max-w-3xl`}>Del problema a la solución</h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
              {[
                { icon: "🎯", title: "El desafío", text: project.problem },
                { icon: "🛠️", title: "La solución", text: project.solution },
              ].map((block) => (
                <div key={block.title} className="reveal-up">
                  <LitCard as="article" className={`${glass} ${cardHover} h-full rounded-2xl p-7 md:p-9`}>
                    <span aria-hidden className="text-3xl">
                      {block.icon}
                    </span>
                    <h3 className="font-inter-display mt-5 text-xl leading-snug font-medium md:text-2xl">{block.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-fg/80 md:text-base">{block.text}</p>
                  </LitCard>
                </div>
              ))}
            </div>

            <div className="reveal-up mt-16">
              <p className={eyebrow}>Cómo funciona</p>
            </div>
            <ol className="mt-6 grid gap-4 md:grid-cols-4 md:gap-6">
              {project.howItWorks.map((step, index) => (
                <li key={step} className="reveal-up">
                  <LitCard className={`${glass} ${cardHover} h-full rounded-2xl p-6`}>
                    <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-4 text-sm leading-relaxed text-fg/85">{step}</p>
                  </LitCard>
                </li>
              ))}
            </ol>

            <div className="reveal-up mt-16">
              <p className={eyebrow}>Entregables</p>
            </div>
            <ul className="mt-6 grid gap-4 md:grid-cols-2 md:gap-6">
              {project.deliverables.map((item) => (
                <li key={item} className="reveal-up">
                  <LitCard className={`${glass} ${cardHover} flex h-full items-start gap-4 rounded-2xl p-6`}>
                    <Check size={20} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-fg/90 md:text-base">{item}</span>
                  </LitCard>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Visual gallery */}
        {gallery.length > 0 && (
          <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
            <div className="border-t border-fg/10 pt-20 md:pt-28">
              <div className="reveal-up">
                <p className={eyebrow}>Galería</p>
                <h2 className={`${h2} mt-4 max-w-2xl`}>El proyecto en pantalla</h2>
              </div>
              <div className={`mt-12 grid gap-4 md:gap-6 ${gallery.length > 1 ? "md:grid-cols-2" : ""}`}>
                {gallery.map((src, index) => (
                  <div key={src} className="reveal-up">
                    <div className={`${glass} ${cardHover} group relative aspect-[4/3] overflow-hidden rounded-2xl`}>
                      <Image
                        src={src}
                        alt={`${project.title}, vista ${index + 1}`}
                        fill
                        sizes="(min-width: 768px) 520px, 100vw"
                        quality={60}
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related projects in the same vertical */}
        {related.length > 0 && (
          <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-20 md:pb-28">
            <div className="border-t border-fg/10 pt-20 md:pt-28">
              <div className="reveal-up">
                <p className={eyebrow}>Más en {project.category}</p>
                <h2 className={`${h2} mt-4 max-w-2xl`}>Proyectos relacionados</h2>
              </div>
              <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
                {related.map((other) => (
                  <div key={other.slug} className="reveal-up">
                    <LitCard
                      as="a"
                      href={`/proyectos/${other.slug}`}
                      className={`${glass} ${cardHover} group flex h-full flex-col gap-3 rounded-2xl p-7`}
                    >
                      <span className={eyebrow}>{other.category}</span>
                      <span className="font-inter-display text-xl leading-snug font-medium">{other.title}</span>
                      <span className="text-sm leading-relaxed text-fg/80">{other.summary}</span>
                    </LitCard>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Inquiry CTA */}
        <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-24 md:pb-32">
          <div className="reveal-up rounded-3xl border border-accent/30 bg-gradient-to-b from-accent/[0.10] to-transparent p-10 text-center backdrop-blur-md md:p-16">
            <h2 className={`${h2} mx-auto max-w-2xl`}>¿Quieres algo así para tu negocio?</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg/85">
              Cuéntanos qué necesitas y armamos un plan sobre la misma arquitectura probada, adaptada a tu marca.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={CTA_HREF} className={ctaButton}>
                Solicitar un diagnóstico
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/proyectos" className={secondaryButton}>
                Ver más proyectos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
