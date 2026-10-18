// config/service-links.ts
// Name and URL of each service page, in the order they appear in the navbar "Servicios" dropdown and the footer.
// Kept separate from config/service-pages.ts (the full page copy) because the navbar and footer import it, and long
// copy would add to every page's JavaScript.
//
// The four "Ecosistema digital de conversión" slugs must match the records in config/service-pages.ts. DoorDash and
// Ingeniería de Menú have their own static pages under app/servicios/.

export const serviceLinks = [
  { label: "Catálogos Digitales", slug: "catalogos-digitales" },
  { label: "Agente de Calificación", slug: "agente-de-calificacion" },
  { label: "Conexión Directa", slug: "conexion-directa" },
  { label: "Pipeline de Seguimiento", slug: "pipeline-de-seguimiento" },
  { label: "Registro y Optimización DoorDash", footerLabel: "DoorDash: Registro y Optimización", slug: "doordash" },
  { label: "Ingeniería de Menú", slug: "ingenieria-de-menu" },
] as const;
