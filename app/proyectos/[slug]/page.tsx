import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { initialProjects, projectBySlug, relatedProjects, type ProjectStatus } from "@/config/projects";
import { siteConfig } from "@/config/site.config";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import ProjectCard from "@/components/ProjectCard";

const statusTone: Record<ProjectStatus, string> = {
  Activo: "bg-emerald-400/90 text-[#0D0E12]",
  "En Desarrollo": "bg-amber-400/90 text-[#0D0E12]",
  Completado: "bg-white/20 text-white",
};

export function generateStaticParams() {
  return initialProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const related = relatedProjects(project);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#070a11] text-fg">
      <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-slate-800/80 bg-[#070a11]/80 px-6 py-4 backdrop-blur-md">
        <Link href="/" className="font-serif text-xl italic">
          {siteConfig.name}
        </Link>
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-fg/60 uppercase transition-colors duration-200 hover:text-fg"
        >
          <ArrowLeft size={14} aria-hidden />
          Volver a proyectos
        </Link>
      </nav>

      {/* Hero: title, client, vertical, engine tag and executive summary */}
      <header className="relative isolate flex min-h-[70svh] w-full items-end overflow-hidden pt-20 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.heroImage} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070a11] via-[#070a11]/70 to-[#070a11]/20" />

        <div className="mx-auto w-full max-w-[1440px] px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-slate-700/60 bg-slate-900/80 px-3 py-1 font-mono text-xs tracking-widest text-slate-300 uppercase">
              {project.category}
            </span>
            <span className="rounded-md border border-blue-400/40 bg-blue-500/10 px-3 py-1 font-mono text-xs tracking-wider text-blue-300">
              Engine: {project.engine}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusTone[project.status]}`}>
              {project.status}
            </span>
          </div>
          <h1 className="mb-3 max-w-4xl font-serif text-4xl leading-tight font-normal lg:text-6xl">{project.title}</h1>
          <p className="mb-6 font-mono text-xs tracking-wider text-white/70 uppercase">Cliente · {project.client}</p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">{project.summary}</p>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-6 py-16 md:px-12 lg:py-24">
        {/* Block 1: the problem */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-widest text-blue-400 uppercase">01 · Desafío</span>
            <h2 className="font-serif text-3xl">El problema</h2>
          </div>
          <p className="max-w-prose text-base leading-relaxed text-fg/70">{project.problem}</p>
        </section>

        {/* Block 2: the solution */}
        <section className="grid grid-cols-1 gap-6 border-t border-slate-800/80 pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-widest text-blue-400 uppercase">02 · Arquitectura</span>
            <h2 className="font-serif text-3xl">La solución</h2>
          </div>
          <div className="flex flex-col gap-10">
            <p className="max-w-prose text-base leading-relaxed text-fg/70">{project.solution}</p>

            <div className="flex flex-col gap-5">
              <h3 className="font-mono text-xs tracking-widest text-fg/50 uppercase">Entregables</h3>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-slate-800/80 pb-4 text-sm text-fg/80">
                    <Check size={14} aria-hidden className="shrink-0 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Block 3: how it works */}
        <section className="grid grid-cols-1 gap-6 border-t border-slate-800/80 pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-widest text-blue-400 uppercase">03 · Operación</span>
            <h2 className="font-serif text-3xl">Cómo funciona</h2>
          </div>
          <ol className="flex flex-col gap-4">
            {project.howItWorks.map((step, index) => (
              <li
                key={step}
                className="flex gap-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-md"
              >
                <span className="font-mono text-sm text-blue-300">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-relaxed text-slate-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Results */}
        {project.impact && project.impact.length > 0 && (
          <section className="grid grid-cols-1 gap-6 border-t border-slate-800/80 pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-widest text-blue-400 uppercase">Impacto</span>
              <h2 className="font-serif text-3xl">Resultados</h2>
            </div>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.impact.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6">
                  <dt className="font-mono text-xs tracking-wider text-slate-400 uppercase">{metric.label}</dt>
                  <dd className="font-serif text-3xl">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section className="flex flex-col gap-6 border-t border-slate-800/80 pt-16">
            <h2 className="font-serif text-3xl">Galería</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.gallery.map((src, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} — captura ${index + 1}`}
                  className="aspect-[4/3] w-full rounded-2xl border border-slate-800/80 object-cover"
                />
              ))}
            </div>
          </section>
        )}

        {/* Related projects on the same engine */}
        {related.length > 0 && (
          <section className="flex flex-col gap-6 border-t border-slate-800/80 pt-16">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-widest text-blue-400 uppercase">Misma vertical · {project.category}</span>
              <h2 className="font-serif text-3xl">Proyectos relacionados</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-fg/60">
                Mismo motor operativo ({project.engine.replace(" " + project.category, "")}), personalizado para la identidad visual de cada empresa.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {related.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
            </div>
          </section>
        )}
      </div>

      <CtaBanner
        heading="¿Quieres implementar una solución similar en tu empresa?"
        body="Contanos qué procesos querés ordenar y te proponemos un diagnóstico operativo sin compromiso."
        primaryHref="/#contacto"
      />

      <Footer />
    </div>
  );
}
