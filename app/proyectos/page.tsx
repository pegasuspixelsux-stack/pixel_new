import Link from "next/link";
import { initialProjects, projectCategories, type ProjectCategory } from "@/config/projects";
import { siteConfig } from "@/config/site.config";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const category = projectCategories.find((c) => c === categoria);

  const projects = initialProjects
    .filter((project) => !category || project.category === category)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className="flex min-h-screen w-full flex-col bg-canvas text-fg">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-fg/10 bg-canvas/80 px-6 py-5 backdrop-blur-md lg:px-16">
        <Link href="/" className="font-serif text-xl italic">
          {siteConfig.name}
        </Link>
        <Link href="/" className="text-sm text-fg/60 transition-colors duration-200 hover:text-fg">
          Inicio
        </Link>
      </nav>

      <main className="mx-auto w-full max-w-[1440px] flex-1 px-6 py-24 lg:px-16 lg:py-32">
        <header className="mb-12 flex flex-col gap-4">
          <p className="text-sm text-fg/60">{siteConfig.tagline}</p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">Proyectos / Casos</h1>
        </header>

        <nav aria-label="Filtrar por categoría" className="mb-12 flex flex-wrap gap-3">
          <FilterLink href="/proyectos" active={!category}>
            Todos
          </FilterLink>
          {projectCategories.map((c: ProjectCategory) => (
            <FilterLink key={c} href={`/proyectos?categoria=${encodeURIComponent(c)}`} active={category === c}>
              {c}
            </FilterLink>
          ))}
        </nav>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-fg/60">No hay proyectos en esta categoría todavía.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}

function FilterLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`rounded-full border px-4 py-2 text-xs tracking-wider uppercase transition-colors duration-200 ${
        active ? "border-fg bg-fg text-canvas" : "border-fg/20 text-fg/70 hover:border-fg/40 hover:text-fg"
      }`}
    >
      {children}
    </Link>
  );
}
