import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import ProjectLanding from "@/components/ProjectLanding";
import { projectLandingBySlug, projectLandings } from "@/config/project-landings";
import { initialProjects, projectBySlug } from "@/config/projects";

// /proyectos/[slug] serves two page types with the same layout language as the service pages:
//   - project detail pages for every project in the top navigation (config/projects.ts), and
//   - the product landing template (config/project-landings.ts: oikos, dealio, talos, nauta).
// Anything else is a 404.
export function generateStaticParams() {
  return [...initialProjects, ...projectLandings].map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (project) return { title: `${project.title} | Pegasus Pixels`, description: project.summary };
  const landing = projectLandingBySlug(slug);
  if (landing) return { title: `${landing.title} | Pegasus Pixels`, description: landing.heroDescription };
  return {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = projectBySlug(slug);
  if (project) return <ProjectDetail project={project} />;

  const landing = projectLandingBySlug(slug);
  if (landing) return <ProjectLanding landing={landing} />;

  notFound();
}
