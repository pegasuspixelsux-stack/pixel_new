// config/service-links.ts
// Name and URL of each service page of the "Ecosistema digital de conversión" section. Kept separate from
// config/service-pages.ts (the full page copy) because the navbar and footer import it, and long copy would add
// to every page's JavaScript. Slugs must match the records in config/service-pages.ts.

export const serviceLinks = [
  { label: "Catálogos Digitales", slug: "catalogos-digitales" },
  { label: "Agente de Calificación", slug: "agente-de-calificacion" },
  { label: "Conexión Directa", slug: "conexion-directa" },
  { label: "Pipeline de Seguimiento", slug: "pipeline-de-seguimiento" },
] as const;
