import { PageHeader } from "@/components/dashboard-ui";
import ServiceManager from "@/components/ServiceManager";
import { listServices } from "@/lib/store";

// Always read the latest services; this page must not be prerendered.
export const dynamic = "force-dynamic";

export default async function DashboardServicesPage() {
  const services = await listServices();

  return (
    <>
      <PageHeader
        eyebrow="Gestión"
        title="Servicios"
        description={`${services.length} ${services.length === 1 ? "servicio" : "servicios"} en el catálogo. Agrega o elimina servicios desde aquí.`}
      />
      <ServiceManager services={services} />
    </>
  );
}
