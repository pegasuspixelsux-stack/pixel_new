// config/projects.ts
// Case studies shown on the landing page, /proyectos, the project pages and the dashboard.
// Image paths point to /public/projects/. Add the files there; a missing file shows an empty image.
// problem, solution, howItWorks and impact are drafts written from the case descriptions. Review before publishing.

export type ProjectCategory = "Automotriz" | "Inmobiliaria" | "Gastronomía" | "Servicios";

/** The vertical a project belongs to. Projects in the same vertical share an engine. */
export type ProjectVertical = ProjectCategory;

export type ProjectStatus = "Activo" | "En Desarrollo" | "Completado";

export const projectCategories: ProjectCategory[] = ["Automotriz", "Inmobiliaria", "Gastronomía", "Servicios"];

export const projectStatuses: ProjectStatus[] = ["Activo", "En Desarrollo", "Completado"];

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  /** Vertical of the project, the same value as its category. */
  category: ProjectVertical;
  /** Core engine the front-end runs on, e.g. "Talos Automotriz". */
  engine: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  /** Operational challenge or bottleneck the client had. */
  problem: string;
  /** How the architecture was built and implemented. */
  solution: string;
  /** Step-by-step flow of the tool in production. */
  howItWorks: string[];
  deliverables: string[];
  /** Efficiency or adoption results. */
  impact?: {
    label: string;
    value: string;
  }[];
  heroImage: string;
  gallery: string[];
  featured: boolean;
  createdAt: string;
}

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    slug: "dealio-automotriz",
    title: "Dealio — Plataforma de Gestión Automotriz",
    client: "Concesionarias y Automotoras",
    category: "Automotriz",
    engine: "Talos Automotriz",
    status: "Activo",
    summary: "Infraestructura digital completa para catálogo de vehículos, captura guiada de permutas y gestión de consultas.",
    description:
      "Implementación de un ecosistema móvil enfocado en concesionarias. Integra la carga simplificada de inventario con compresión de imágenes WebP, calificación automática de prospectos por tipo de operación y derivación directa de leads a la fuerza de ventas.",
    problem:
      "Las concesionarias cargaban el inventario a mano y con fotos pesadas que hacían lento el catálogo en el celular. Las consultas por permutas y financiación llegaban sin filtrar, y el equipo de ventas perdía tiempo con prospectos que no calificaban.",
    solution:
      "Un ecosistema móvil sobre el motor Talos Automotriz: carga simplificada de inventario con compresión de imágenes WebP, widget de calificación por tipo de operación y derivación directa de cada lead a la fuerza de ventas.",
    howItWorks: [
      "La concesionaria carga o actualiza un vehículo desde el panel; las fotos se comprimen automáticamente a WebP.",
      "El visitante recorre el catálogo y consulta por un vehículo desde su ficha.",
      "El widget guiado califica la operación (compra, permuta o financiación) antes de enviar la consulta.",
      "La consulta calificada llega al panel y se deriva al vendedor asignado.",
    ],
    deliverables: [
      "Catálogo dinámico de inventario",
      "Widget de calificación e interacción de leads",
      "Panel de control de consultas e inventario",
      "Compresión de imágenes optimizada para móviles",
    ],
    impact: [
      { label: "Tiempo de Carga", value: "< 1.2s" },
      { label: "Procesamiento de Leads", value: "Inmediato" },
    ],
    heroImage: "/projects/dealio.png",
    gallery: ["/projects/dealio-1.jpg", "/projects/dealio-2.jpg"],
    featured: true,
    createdAt: "2026-08-15",
  },
  {
    id: "proj-2",
    slug: "oikos-real-estate",
    title: "Oikos — Portal & Catálogo Inmobiliario",
    client: "Agencias Inmobiliarias",
    category: "Inmobiliaria",
    engine: "Talos Inmobiliaria",
    status: "Activo",
    summary: "Catálogo de lujo con filtrado avanzado, fichas descriptivas estandarizadas y captación automatizada de compradores.",
    description:
      "Estructuración de plataforma para firmas inmobiliarias enfocada en la presentación estética de propiedades, estandarización de datos técnicos y filtrado inteligente. Diseñado para un flujo de captura estructurado sin fricción.",
    problem:
      "Cada agente cargaba las fichas con datos técnicos distintos, los compradores no podían filtrar por lo que buscaban y las solicitudes se perdían entre canales.",
    solution:
      "Un portal de catálogo sobre el motor Talos Inmobiliaria: fichas técnicas estandarizadas, filtrado inteligente y un sistema que deriva cada solicitud al agente responsable, con una presentación de alta gama.",
    howItWorks: [
      "El agente completa la ficha con los campos técnicos estándar.",
      "El comprador filtra el catálogo por zona, operación y características.",
      "Cada solicitud queda registrada con la propiedad de interés.",
      "La solicitud se deriva al agente responsable de esa propiedad.",
    ],
    deliverables: [
      "Arquitectura de catálogo inmobiliario",
      "Fichas técnicas estandarizadas",
      "Sistema de derivación de solicitudes por agente",
      "Interfaz minimalista de alta gama",
    ],
    impact: [
      { label: "Estandarización de Fichas", value: "100%" },
      { label: "Experiencia Móvil", value: "A+" },
    ],
    heroImage: "/projects/oikos.png",
    gallery: ["/projects/oikos-1.jpg", "/projects/oikos-2.jpg"],
    featured: true,
    createdAt: "2026-08-20",
  },
  {
    id: "proj-3",
    slug: "hermio-gastronomia",
    title: "Hermio — Menú Digital & Pedidos Directos",
    client: "Restaurantes y Gastronomía",
    category: "Gastronomía",
    engine: "Talos Gastronomía",
    status: "Activo",
    summary: "Catálogo interactivo de platos con pedidos estructurados y actualización en tiempo real para locales gastronómicos.",
    description:
      "Transformación del menú tradicional en una herramienta operativa ágil. Permite la edición en tiempo real de disponibilidad, variantes de platos y despacho directo de comandas estructuradas hacia los canales de atención.",
    problem:
      "La carta impresa quedaba desactualizada cuando faltaba un plato, y los pedidos llegaban por teléfono con errores en variantes y cantidades.",
    solution:
      "Un menú digital sobre el motor Talos Gastronomía: disponibilidad y variantes editables en tiempo real, y despacho de comandas estructuradas hacia los canales de atención.",
    howItWorks: [
      "El local marca en el panel los platos sin stock y las variantes disponibles.",
      "El menú digital se actualiza al instante para todos los comensales.",
      "El cliente arma su pedido eligiendo variantes y cantidades.",
      "La comanda estructurada se envía por WhatsApp al local.",
    ],
    deliverables: [
      "Menú digital interactivo",
      "Estructuración de comandas vía WhatsApp",
      "Gestión de disponibilidad en tiempo real",
      "Capacitación rápida de personal",
    ],
    impact: [
      { label: "Precisión de Pedidos", value: "99%" },
      { label: "Actualización de Carta", value: "Instantánea" },
    ],
    heroImage: "/projects/hermio.png",
    gallery: ["/projects/hermio-1.jpg", "/projects/hermio-2.jpg"],
    featured: true,
    createdAt: "2026-09-01",
  },
  {
    id: "proj-4",
    slug: "nauta-pde-directorio",
    title: "Nauta — Guía & Directorio Operativo",
    client: "Servicios Marítimos y Puerto",
    category: "Servicios",
    engine: "Talos Servicios",
    status: "En Desarrollo",
    summary: "Directorio comercial e infraestructura de servicios para operaciones, embarcaciones y prestadores de servicios.",
    description:
      "Plataforma multi-categoría para la organización de servicios portuarios, fichas de prestadores y canales directos de solicitud. Estandariza la comunicación entre usuarios, proveedores y la administración.",
    problem:
      "Los servicios portuarios se buscaban por contactos sueltos, sin categorías ni fichas comparables, y cada solicitud entraba por un canal distinto.",
    solution:
      "Un directorio multi-categoría sobre el motor Talos Servicios: fichas operativas de prestadores, categorías organizadas y un canal único de solicitudes.",
    howItWorks: [
      "El prestador carga su ficha con servicios, zona y datos de contacto.",
      "El usuario busca por categoría y compara fichas.",
      "La solicitud se envía por un canal único.",
      "La administración gestiona el directorio desde el panel.",
    ],
    deliverables: [
      "Directorio categorizado de servicios",
      "Fichas operativas de proveedores",
      "Canal único de solicitudes y consultas",
      "Panel de administración de directorio",
    ],
    impact: [
      { label: "Categorías Organizadas", value: "12+" },
      { label: "Tiempo de Respuesta", value: "Optimizado" },
    ],
    heroImage: "/projects/nauta.jpg",
    gallery: ["/projects/nauta-1.jpg"],
    featured: true,
    createdAt: "2026-09-10",
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return initialProjects.find((project) => project.slug === slug);
}

/** Other projects in the same vertical, for the related block on a project page. */
export function relatedProjects(project: Project): Project[] {
  return initialProjects.filter((other) => other.category === project.category && other.slug !== project.slug);
}
