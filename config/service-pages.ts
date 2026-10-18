// config/service-pages.ts
// One page per service of the "Ecosistema digital de conversión" section, served at /servicios/[slug].
// They use the same ProjectLandingConfig shape and layout as the other service/landing pages
// (components/ProjectLanding.tsx), so this file is the only place to edit their copy. The DoorDash page is
// separate (app/servicios/doordash/page.tsx).

import type { ProjectLandingConfig } from "@/config/project-landings";

export const servicePages: ProjectLandingConfig[] = [
  {
    id: "catalogos-digitales",
    slug: "catalogos-digitales",
    title: "Catálogos Digitales: Exposición Inteligente de Inventario",
    subtitle: "Digital Catalogs",
    badge: "Servicio · Catálogos",
    heroDescription:
      "Presentación visual de alta velocidad adaptada a móviles. Organiza tus productos o propiedades con navegación fluida para que el cliente encuentre exactamente lo que busca antes de contactarte.",
    tiers: {
      newClients: {
        badge: "Para Negocios sin Catálogo Online",
        title: "Tu Catálogo Digital, Listo para Vender",
        description:
          "Armamos tu catálogo completo sobre una arquitectura probada y lo dejamos con la identidad de tu marca.",
        features: [
          "Diseño pensado primero para el celular",
          "Navegación y filtros fluidos",
          "Fichas claras de producto o propiedad",
          "Carga inicial de tu inventario",
        ],
        ctaText: "Solicitar Mi Catálogo",
      },
      existingClients: {
        badge: "Para Negocios con Catálogo Actual",
        title: "Haz que tu Catálogo Venda Más",
        description:
          "Si ya tienes un catálogo, lo revisamos y lo mejoramos para que cargue rápido y se recorra sin fricción.",
        features: [
          "Auditoría de velocidad y navegación",
          "Reorganización por categorías",
          "Mejora de fichas y fotos",
          "Optimización para móviles",
        ],
        ctaText: "Solicitar Auditoría",
      },
    },
    pillars: [
      { icon: "🚀", title: "Alta Velocidad", description: "Carga rápido en cualquier celular, incluso con conexión lenta." },
      { icon: "📱", title: "Pensado para Móvil", description: "La experiencia se diseña primero para la pantalla donde más se consulta." },
      { icon: "🧭", title: "Navegación Fluida", description: "Categorías y filtros claros para llegar al producto en pocos toques." },
      { icon: "🔎", title: "Encuentran lo que Buscan", description: "El cliente llega informado antes de contactarte, y eso acelera el cierre." },
    ],
    comparison: {
      title: "La diferencia está en la exposición",
      traditionalMethod: {
        title: "Método Tradicional",
        points: [
          "Listas largas y fotos pesadas",
          "Navegación confusa en el celular",
          "Información incompleta en cada ficha",
          "Consultas que repiten lo que ya está publicado",
        ],
      },
      pegasusMethod: {
        title: "Método Pegasus Pixels",
        points: [
          "Catálogo liviano y rápido",
          "Navegación y filtros simples",
          "Fichas completas y ordenadas",
          "Clientes que llegan con la decisión casi tomada",
        ],
      },
    },
  },
  {
    id: "agente-de-calificacion",
    slug: "agente-de-calificacion",
    title: "Agente de Calificación: Filtro & Captura en Tiempo Real",
    subtitle: "Lead Qualification Agent",
    badge: "Servicio · Calificación",
    heroDescription:
      "Flujos de preguntas estructuradas multiopción que guían al visitante. Identifica la intención real de compra y elimina la pérdida de tiempo con prospectos no calificados.",
    tiers: {
      newClients: {
        badge: "Para Negocios que Empiezan a Captar",
        title: "Un Filtro Listo desde el Primer Día",
        description:
          "Diseñamos las preguntas correctas para tu rubro y las dejamos funcionando en tu sitio.",
        features: [
          "Preguntas multiopción pensadas para tu negocio",
          "Captura de datos del visitante en tiempo real",
          "Identificación de la intención de compra",
          "Configuración inicial a medida",
        ],
        ctaText: "Solicitar Mi Agente",
      },
      existingClients: {
        badge: "Para Negocios que Ya Reciben Consultas",
        title: "Menos Ruido, Mejores Prospectos",
        description:
          "Si hoy recibes consultas sin filtrar, sumamos un filtro que deja pasar solo a quienes están listos para comprar.",
        features: [
          "Revisión de tus consultas actuales",
          "Preguntas que separan curiosos de compradores",
          "Calificación automática de cada prospecto",
          "Ajustes según los resultados",
        ],
        ctaText: "Solicitar Revisión",
      },
    },
    pillars: [
      { icon: "🧠", title: "Intención Real", description: "Detecta cuánto quiere comprar cada visitante, no solo quién escribió." },
      { icon: "🧾", title: "Preguntas Guiadas", description: "Flujos multiopción simples, que el visitante completa en segundos." },
      { icon: "⏱️", title: "En Tiempo Real", description: "El prospecto queda calificado y capturado en el momento de la consulta." },
      { icon: "🎯", title: "Tiempo Bien Usado", description: "Tu equipo atiende primero a quienes están realmente listos." },
    ],
    comparison: {
      title: "La diferencia está en el filtro",
      traditionalMethod: {
        title: "Método Tradicional",
        points: [
          "Todas las consultas llegan mezcladas",
          "Se pierde tiempo con prospectos no calificados",
          "La información llega incompleta",
          "Se prioriza según la intuición",
        ],
      },
      pegasusMethod: {
        title: "Método Pegasus Pixels",
        points: [
          "Consultas filtradas y ordenadas",
          "Tu equipo atiende primero a los mejores prospectos",
          "Datos completos desde el primer contacto",
          "Prioridad basada en la intención real",
        ],
      },
    },
  },
  {
    id: "conexion-directa",
    slug: "conexion-directa",
    title: "Conexión Directa: Cierre Comercial en Un Clic",
    subtitle: "Direct Sales Connection",
    badge: "Servicio · Conexión",
    heroDescription:
      "Entrega instantánea de datos al vendedor vía WhatsApp. El cliente llega a tu canal de ventas con la ficha técnica completa de lo que necesita, listo para concretar la transacción.",
    tiers: {
      newClients: {
        badge: "Para Negocios que Venden por WhatsApp",
        title: "Del Interés al Chat, sin Fricción",
        description:
          "Conectamos tu sitio con tu WhatsApp para que cada interesado llegue con toda la información.",
        features: [
          "Botón directo a tu WhatsApp comercial",
          "Mensaje armado con la ficha de lo que el cliente eligió",
          "Entrega instantánea de los datos al vendedor",
          "Configuración inicial incluida",
        ],
        ctaText: "Solicitar Mi Conexión",
      },
      existingClients: {
        badge: "Para Negocios con WhatsApp Activo",
        title: "Que Cada Chat Llegue Completo",
        description:
          "Si ya atiendes por WhatsApp, hacemos que cada conversación arranque con los datos que necesitas.",
        features: [
          "Revisión de tu flujo actual de consultas",
          "Mensajes que llegan con la ficha completa",
          "Derivación al vendedor correcto",
          "Menos preguntas repetidas por chat",
        ],
        ctaText: "Solicitar Revisión",
      },
    },
    pillars: [
      { icon: "⚡", title: "Entrega Instantánea", description: "Los datos del interesado llegan al vendedor en el momento." },
      { icon: "💬", title: "Directo a WhatsApp", description: "El cliente llega a tu canal de ventas con un solo clic." },
      { icon: "📄", title: "Ficha Completa", description: "Cada chat incluye lo que el cliente necesita, sin preguntas de ida y vuelta." },
      { icon: "🤝", title: "Listo para Cerrar", description: "El vendedor retoma la conversación con todo el contexto." },
    ],
    comparison: {
      title: "La diferencia está en el primer mensaje",
      traditionalMethod: {
        title: "Método Tradicional",
        points: [
          "Mensajes que llegan sin contexto",
          "Preguntas repetidas en cada chat",
          "Datos copiados a mano",
          "Respuestas lentas por falta de información",
        ],
      },
      pegasusMethod: {
        title: "Método Pegasus Pixels",
        points: [
          "Cada chat llega con la ficha completa",
          "Cero preguntas repetidas",
          "Datos entregados automáticamente",
          "Respuesta rápida y enfocada en cerrar",
        ],
      },
    },
  },
  {
    id: "pipeline-de-seguimiento",
    slug: "pipeline-de-seguimiento",
    title: "Pipeline de Seguimiento: Estandarización & Trazabilidad",
    subtitle: "Follow-up Pipeline",
    badge: "Servicio · Seguimiento",
    heroDescription:
      "Control total sobre la gestión comercial. Tu equipo opera bajo un estándar único y fácil de usar, asegurando que cada oportunidad reciba el recontacto adecuado sin fricción.",
    tiers: {
      newClients: {
        badge: "Para Equipos sin Proceso Definido",
        title: "Un Estándar para Todo tu Equipo",
        description:
          "Definimos las etapas de tu proceso comercial y las dejamos funcionando en un panel simple.",
        features: [
          "Etapas claras desde la consulta hasta el cierre",
          "Panel único para todo el equipo",
          "Recordatorios de recontacto",
          "Configuración inicial a medida",
        ],
        ctaText: "Solicitar Mi Pipeline",
      },
      existingClients: {
        badge: "Para Equipos con Herramientas Actuales",
        title: "Ordena el Seguimiento que Ya Haces",
        description:
          "Si ya das seguimiento por hojas de cálculo o mensajes, lo pasamos a un sistema único y trazable.",
        features: [
          "Diagnóstico de tu seguimiento actual",
          "Migración ordenada de tus oportunidades",
          "Historial completo de cada contacto",
          "Capacitación para tu equipo",
        ],
        ctaText: "Solicitar Diagnóstico",
      },
    },
    pillars: [
      { icon: "📊", title: "Control Total", description: "Ves en qué etapa está cada oportunidad, en un solo lugar." },
      { icon: "📏", title: "Estándar Único", description: "Todo el equipo trabaja de la misma forma, fácil de aprender." },
      { icon: "🔁", title: "Recontacto Adecuado", description: "Ninguna oportunidad queda sin seguimiento a tiempo." },
      { icon: "🧾", title: "Trazabilidad", description: "El historial de cada contacto queda registrado y a mano." },
    ],
    comparison: {
      title: "La diferencia está en la trazabilidad",
      traditionalMethod: {
        title: "Método Tradicional",
        points: [
          "Seguimiento en hojas de cálculo y chats sueltos",
          "Oportunidades que se olvidan",
          "Cada vendedor con su propio método",
          "Sin historial de lo conversado",
        ],
      },
      pegasusMethod: {
        title: "Método Pegasus Pixels",
        points: [
          "Un panel único y ordenado",
          "Recontacto programado para cada oportunidad",
          "Un estándar compartido por todo el equipo",
          "Historial completo de cada contacto",
        ],
      },
    },
  },
];

export function servicePageBySlug(slug: string): ProjectLandingConfig | undefined {
  return servicePages.find((page) => page.slug === slug);
}
