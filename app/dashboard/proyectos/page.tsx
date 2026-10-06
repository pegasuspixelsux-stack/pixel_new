import Link from "next/link";
import { initialProjects } from "@/config/projects";
import { DataTable, PageHeader, projectStatusTone } from "@/components/dashboard-ui";

export default function DashboardProjectsPage() {
  const active = initialProjects.filter((p) => p.status === "Activo").length;

  return (
    <>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <PageHeader
          eyebrow="Gestión"
          title="Proyectos / Casos"
          description={`${initialProjects.length} proyectos publicados, ${active} activos.`}
        />
        <Link
          href="/dashboard/proyectos/nuevo"
          className="flex w-fit items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium whitespace-nowrap text-canvas transition-[background-color,transform] duration-200 ease-out hover:bg-fg/90 active:scale-[0.97]"
        >
          Nuevo Proyecto
        </Link>
      </div>

      <DataTable headers={["Proyecto", "Cliente", "Categoría", "Estado", "Destacado", ""]}>
        {initialProjects.map((p) => (
          <tr key={p.id} className="border-t border-fg/10">
            <td className="py-4 pr-6">{p.title}</td>
            <td className="py-4 pr-6 text-fg/60">{p.client}</td>
            <td className="py-4 pr-6 text-fg/60">{p.category}</td>
            <td className="py-4 pr-6">
              <span className={`rounded-full border px-3 py-1 text-xs ${projectStatusTone[p.status]}`}>{p.status}</span>
            </td>
            <td className="py-4 pr-6 text-fg/60">{p.featured ? "Sí" : "No"}</td>
            <td className="py-4 text-right">
              <Link
                href={`/proyectos/${p.slug}`}
                className="text-xs text-fg/60 underline-offset-4 transition-colors duration-200 hover:text-fg hover:underline"
              >
                Ver ficha
              </Link>
            </td>
          </tr>
        ))}
      </DataTable>
    </>
  );
}
