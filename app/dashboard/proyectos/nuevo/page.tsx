import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/dashboard-ui";
import ProjectForm from "@/components/ProjectForm";

export default function NewProjectPage() {
  return (
    <>
      <Link
        href="/dashboard/proyectos"
        className="inline-flex w-fit items-center gap-2 text-xs font-medium tracking-wider text-fg/60 uppercase transition-colors duration-200 hover:text-fg"
      >
        <ArrowLeft size={14} aria-hidden />
        Volver a proyectos
      </Link>

      <PageHeader eyebrow="Gestión" title="Nuevo Proyecto" description="Completá la ficha del caso de implementación." />

      <ProjectForm />
    </>
  );
}
