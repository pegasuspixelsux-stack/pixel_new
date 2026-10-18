// config/project-landings.ts
// Data for the reusable project landing page template (components/ProjectLanding.tsx), served at
// /proyectos/[slug]. Everything the page renders comes from one ProjectLandingConfig object, so a future
// admin dashboard only has to edit (or load from a database) these records.
//
// Kept apart from config/projects.ts on purpose: that file is imported by client components (the navbar,
// the dashboard), and long landing-page copy would add to every page's JavaScript.

/** Accent palettes available to a landing page. Each maps to an `.accent-<name>` class in app/globals.css. */
export const accentColors = ["emerald", "blue", "amber", "cyan", "rose"] as const;
export type AccentColor = (typeof accentColors)[number];

export interface LandingTier {
  badge: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface ProjectLandingConfig {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroDescription: string;
  /** Highlight palette for the page; falls back to the site accent when omitted. */
  accentColor?: AccentColor;

  // Guarantee / risk-free banner
  guaranteeBanner?: {
    highlightText: string;
    description: string;
  };

  // Two-tier service structure (new clients vs. existing clients / upgrades)
  tiers: {
    newClients: LandingTier;
    existingClients: LandingTier;
  };

  // Core service pillars / key advantages (4 grid cards). `icon` is an emoji.
  pillars: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  // Comparison section
  comparison?: {
    title: string;
    traditionalMethod: { title: string; points: string[] };
    pegasusMethod: { title: string; points: string[] };
  };

  // Founder "Quiénes Somos" section
  showFounderBio?: boolean;
}

export const projectLandings: ProjectLandingConfig[] = [
  {
    id: "oikos",
    slug: "oikos",
    title: "Oikos: Catálogo Inmobiliario Boutique",
    subtitle: "Boutique Real Estate & PropTech Catalog",
    badge: "PropTech Portal",
    heroDescription:
      "Un catálogo con filtrado avanzado, fichas descriptivas estandarizadas y captación automatizada de compradores, listo para la identidad de tu inmobiliaria.",
    accentColor: "amber",
    tiers: {
      newClients: {
        badge: "Para Inmobiliarias que Arrancan",
        title: "Tu Catálogo Online, Listo para Publicar",
        description:
          "Si todavía no tienes un portal propio, armamos tu catálogo completo sobre una arquitectura probada y lo dejamos con tu marca.",
        features: [
          "Catálogo con filtros por zona, tipo y precio",
          "Fichas de propiedad estandarizadas",
          "Formulario de contacto con derivación a tu equipo",
          "Carga inicial de tus propiedades",
        ],
        ctaText: "Solicitar Mi Catálogo",
      },
      existingClients: {
        badge: "Para Inmobiliarias con Sitio Actual",
        title: "Moderniza lo que Ya Tienes",
        description:
          "Si ya publicas propiedades, mejoramos la experiencia de búsqueda y automatizamos la captación de interesados sin empezar de cero.",
        features: [
          "Auditoría de tu sitio y de tus fichas actuales",
          "Mejora de filtros y navegación en móvil",
          "Captación y calificación automática de compradores",
          "Migración ordenada de tu inventario",
        ],
        ctaText: "Solicitar Auditoría",
      },
    },
    pillars: [
      {
        icon: "🔎",
        title: "Filtrado Avanzado",
        description: "Tus clientes encuentran la propiedad indicada en segundos, desde cualquier dispositivo.",
      },
      {
        icon: "🏡",
        title: "Fichas Estandarizadas",
        description: "Cada propiedad se presenta con el mismo orden y calidad, lo que transmite profesionalismo.",
      },
      {
        icon: "📥",
        title: "Captación Automatizada",
        description: "Cada consulta llega con los datos del interesado y se deriva al agente correcto.",
      },
      {
        icon: "🎨",
        title: "Tu Marca, Tu Portal",
        description: "Adaptamos el diseño a tu identidad visual sobre una base ya probada.",
      },
    ],
    comparison: {
      title: "La diferencia está en la experiencia",
      traditionalMethod: {
        title: "Método Tradicional",
        points: [
          "Fichas armadas a mano, con formatos distintos",
          "Búsqueda lenta y poco clara en el celular",
          "Consultas por distintos canales, sin seguimiento",
          "Meses de desarrollo a medida",
        ],
      },
      pegasusMethod: {
        title: "Método Pegasus Pixels",
        points: [
          "Fichas estandarizadas desde el primer día",
          "Filtros claros y rápidos en cualquier pantalla",
          "Consultas centralizadas y derivadas al agente",
          "Arquitectura probada, configurada para tu marca",
        ],
      },
    },
    showFounderBio: false, // the shared bio copy is about restaurants; enable per project when it fits
  },
  {
    id: "dealio",
    slug: "dealio",
    title: "Dealio: Gestión para Concesionarias",
    subtitle: "Automotive Dealership & Inventory Management",
    badge: "Dealership OS",
    heroDescription:
      "Catálogo de vehículos, captura guiada de permutas y derivación directa de consultas a la fuerza de ventas, en una sola plataforma.",
    accentColor: "blue",
    tiers: {
      newClients: {
        badge: "Para Concesionarias Nuevas",
        title: "Plataforma Completa desde el Inicio",
        description:
          "Lanzamos tu concesionaria con catálogo, formularios de permuta y flujo de consultas ya conectados.",
        features: [
          "Catálogo de vehículos con fichas completas",
          "Captura guiada de permutas",
          "Derivación de consultas a vendedores",
          "Carga inicial del inventario",
        ],
        ctaText: "Solicitar Mi Plataforma",
      },
      existingClients: {
        badge: "Para Concesionarias en Operación",
        title: "Ordena y Potencia tu Operación Actual",
        description:
          "Si ya vendes vehículos, sumamos catálogo digital y seguimiento comercial sobre lo que ya tienes funcionando.",
        features: [
          "Revisión de tu inventario publicado",
          "Flujo de permutas más simple para el cliente",
          "Seguimiento ordenado de cada consulta",
          "Estandarización del trabajo del equipo",
        ],
        ctaText: "Solicitar Revisión",
      },
    },
    pillars: [
      {
        icon: "🚗",
        title: "Catálogo de Vehículos",
        description: "Inventario siempre actualizado, con fichas claras y fotos pensadas para el móvil.",
      },
      {
        icon: "🔁",
        title: "Permutas Guiadas",
        description: "El cliente carga los datos de su vehículo paso a paso, sin llamadas de ida y vuelta.",
      },
      {
        icon: "📲",
        title: "Consultas Directas",
        description: "Cada interesado llega al vendedor correcto con toda la información a mano.",
      },
      {
        icon: "📋",
        title: "Equipo Estandarizado",
        description: "Un único proceso, fácil de aprender, para todo tu equipo comercial.",
      },
    ],
    comparison: {
      title: "La diferencia está en el seguimiento",
      traditionalMethod: {
        title: "Método Tradicional",
        points: [
          "Inventario en hojas de cálculo y mensajes sueltos",
          "Permutas coordinadas por teléfono",
          "Consultas que se pierden entre vendedores",
          "Cada vendedor trabaja a su manera",
        ],
      },
      pegasusMethod: {
        title: "Método Pegasus Pixels",
        points: [
          "Inventario centralizado y publicado automáticamente",
          "Permutas capturadas con un flujo guiado",
          "Consultas derivadas y registradas",
          "Un proceso único para todo el equipo",
        ],
      },
    },
    showFounderBio: false, // the shared bio copy is about restaurants; enable per project when it fits
  },
  {
    id: "talos",
    slug: "talos",
    title: "Talos: Motor de Operaciones Digitales",
    subtitle: "SaaS / Business Systems & Digital Operations",
    badge: "Operations OS",
    heroDescription:
      "El motor central sobre el que corren nuestras plataformas verticales: inventario, calificación de prospectos y seguimiento comercial.",
    accentColor: "emerald",
    tiers: {
      newClients: {
        badge: "Para Negocios que Digitalizan",
        title: "Tu Operación Digital, Estructurada",
        description:
          "Implementamos Talos como la base de tu operación: inventario, prospectos y seguimiento en un mismo lugar.",
        features: [
          "Gestión de inventario centralizada",
          "Calificación automática de prospectos",
          "Seguimiento comercial en un solo panel",
          "Configuración inicial a medida de tu rubro",
        ],
        ctaText: "Solicitar Implementación",
      },
      existingClients: {
        badge: "Para Negocios con Sistemas Actuales",
        title: "Unifica lo que Ya Usas",
        description:
          "Si ya trabajas con herramientas separadas, las ordenamos y las conectamos bajo un estándar único.",
        features: [
          "Diagnóstico de tus herramientas actuales",
          "Integración de inventario y contactos",
          "Automatización de tareas repetitivas",
          "Capacitación para tu equipo",
        ],
        ctaText: "Solicitar Diagnóstico",
      },
    },
    pillars: [
      {
        icon: "📦",
        title: "Inventario",
        description: "Un único lugar para tus productos, propiedades o servicios, siempre actualizado.",
      },
      {
        icon: "🎯",
        title: "Calificación de Prospectos",
        description: "Cada contacto se clasifica para que tu equipo priorice lo que más rápido se cierra.",
      },
      {
        icon: "📈",
        title: "Seguimiento Comercial",
        description: "Ninguna oportunidad queda sin recontacto: todo el historial en un panel.",
      },
      {
        icon: "🧩",
        title: "Base para Verticales",
        description: "El mismo motor alimenta Dealio, Oikos y Nauta, y se adapta a tu rubro.",
      },
    ],
    comparison: {
      title: "La diferencia está en la estructura",
      traditionalMethod: {
        title: "Método Tradicional",
        points: [
          "Herramientas separadas que no se hablan entre sí",
          "Datos duplicados y desactualizados",
          "Seguimiento que depende de la memoria de cada persona",
          "Cada área con su propio sistema",
        ],
      },
      pegasusMethod: {
        title: "Método Pegasus Pixels",
        points: [
          "Un sistema único y conectado",
          "Datos centralizados y consistentes",
          "Seguimiento automatizado y visible",
          "Un estándar compartido por todo el equipo",
        ],
      },
    },
    showFounderBio: false, // the shared bio copy is about restaurants; enable per project when it fits
  },
  {
    id: "nauta",
    slug: "nauta",
    title: "Nauta: Guía y Directorio Operativo",
    subtitle: "Maritime Directory & Port Services Platform",
    badge: "Port Directory",
    heroDescription:
      "Directorio comercial e infraestructura de servicios para operaciones, embarcaciones y prestadores de servicios del puerto.",
    accentColor: "cyan",
    tiers: {
      newClients: {
        badge: "Para Prestadores que se Suman",
        title: "Tu Presencia en el Directorio",
        description:
          "Te incorporamos al directorio con una ficha completa para que clientes y operadores te encuentren fácilmente.",
        features: [
          "Ficha de servicios con datos de contacto",
          "Categorías claras para tu actividad",
          "Consultas directas desde el directorio",
          "Carga inicial de tu información",
        ],
        ctaText: "Solicitar Mi Ficha",
      },
      existingClients: {
        badge: "Para Operaciones ya Listadas",
        title: "Mejora tu Visibilidad y tus Datos",
        description:
          "Si ya estás en el directorio, revisamos tu ficha y la mantenemos completa y actualizada.",
        features: [
          "Revisión de tu ficha actual",
          "Actualización de servicios y horarios",
          "Mejor clasificación por categoría",
          "Seguimiento de consultas recibidas",
        ],
        ctaText: "Solicitar Revisión",
      },
    },
    pillars: [
      {
        icon: "⚓",
        title: "Directorio Operativo",
        description: "Prestadores y servicios del puerto organizados en un solo lugar.",
      },
      {
        icon: "🚤",
        title: "Embarcaciones y Operaciones",
        description: "Información útil para quienes operan, atracan o necesitan un servicio.",
      },
      {
        icon: "🗂️",
        title: "Fichas Completas",
        description: "Cada prestador con sus servicios, contacto y datos clave.",
      },
      {
        icon: "🔄",
        title: "Datos Actualizados",
        description: "Información mantenida al día para que el directorio sea confiable.",
      },
    ],
    comparison: {
      title: "La diferencia está en la claridad",
      traditionalMethod: {
        title: "Método Tradicional",
        points: [
          "Listados dispersos y desactualizados",
          "Datos de contacto difíciles de encontrar",
          "Sin categorías claras",
          "Cada prestador por su cuenta",
        ],
      },
      pegasusMethod: {
        title: "Método Pegasus Pixels",
        points: [
          "Un directorio único y ordenado",
          "Contacto visible en cada ficha",
          "Categorías pensadas para la operación",
          "Información centralizada y mantenida",
        ],
      },
    },
    showFounderBio: false, // the shared bio copy is about restaurants; enable per project when it fits
  },
];

export function projectLandingBySlug(slug: string): ProjectLandingConfig | undefined {
  return projectLandings.find((landing) => landing.slug === slug);
}
