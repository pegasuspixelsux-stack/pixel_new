import { DataTable, PageHeader } from "@/components/dashboard-ui";
import LeadStatusSelect from "@/components/LeadStatusSelect";
import { listLeads } from "@/lib/store";

// Always read the latest leads; this page must not be prerendered.
export const dynamic = "force-dynamic";

const typeLabels: Record<string, string> = {
  diagnostic: "Diagnóstico operativo",
  doordash: "DoorDash: Registro y Optimización",
  web: "Sitio web y catálogo digital",
  leads: "Captación de leads y automatización",
  systems: "Sistemas de gestión y POS",
  other: "Otro",
};

const dateFormat = new Intl.DateTimeFormat("es", { dateStyle: "medium", timeStyle: "short" });

export default async function DashboardLeadsPage() {
  const leads = await listLeads();

  return (
    <>
      <PageHeader
        eyebrow="Gestión"
        title="Leads & Contactos"
        description={`${leads.length} ${leads.length === 1 ? "consulta recibida" : "consultas recibidas"} desde el formulario del sitio, las más recientes primero.`}
      />

      {leads.length === 0 ? (
        <div className="rounded-2xl border border-fg/10 bg-surface/70 p-8 text-sm text-fg/70">
          Todavía no llegó ninguna consulta. Cuando alguien complete el formulario de contacto del sitio, aparecerá
          acá.
        </div>
      ) : (
        <DataTable headers={["Fecha", "Contacto", "Servicio de interés", "Mensaje", "Estado"]}>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t border-fg/10 align-top">
              <td className="py-4 pr-6 whitespace-nowrap text-fg/70">{dateFormat.format(new Date(lead.createdAt))}</td>
              <td className="py-4 pr-6">
                <p className="font-medium">{lead.name}</p>
                <a href={`mailto:${lead.email}`} className="block text-fg/70 hover:text-fg">
                  {lead.email}
                </a>
                {lead.phone && <p className="text-fg/70">{lead.phone}</p>}
              </td>
              <td className="py-4 pr-6">{typeLabels[lead.type] ?? (lead.type || "—")}</td>
              <td className="max-w-xs py-4 pr-6 text-fg/80">{lead.message || "—"}</td>
              <td className="py-4">
                <LeadStatusSelect id={lead.id} status={lead.status} />
              </td>
            </tr>
          ))}
        </DataTable>
      )}
    </>
  );
}
