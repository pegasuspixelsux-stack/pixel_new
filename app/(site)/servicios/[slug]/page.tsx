import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectLanding from "@/components/ProjectLanding";
import { servicePageBySlug, servicePages } from "@/config/service-pages";

// One page per service of the "Ecosistema digital de conversión" section. /servicios/doordash has its own
// static page, which takes priority over this dynamic route.
export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageBySlug(slug);
  if (!page) return {};
  return { title: `${page.title} | Pegasus Pixels`, description: page.heroDescription };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = servicePageBySlug(slug);
  if (!page) notFound();
  return <ProjectLanding landing={page} />;
}
