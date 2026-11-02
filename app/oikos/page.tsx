import type { Metadata } from "next";
import { Bot, Building2, LayoutDashboard } from "lucide-react";
import ProductLanding, { type ProductLandingContent } from "@/components/ProductLanding";

export const metadata: Metadata = {
  title: "Oikos | Plataforma comercial para inmobiliarias y desarrollos | Pegasus Pixels",
  description:
    "Catálogo digital ultra rápido, asistente virtual 24/7 que precalifica compradores e inversores y panel de control para gestionar propiedades y cerrar más operaciones.",
};

const content: ProductLandingContent = {
  themeClass: "theme-oikos",
  eyebrow: "⚡ La plataforma comercial para inmobiliarias y desarrollos",
  brand: "Oikos",
  headline: "Convierte las visitas de tu web en consultas calificadas — 24/7.",
  subheadline:
    "Oikos dota a tu inmobiliaria de un catálogo digital ultra rápido, un asistente virtual 24/7 que precalifica compradores e inversores, y un panel de control para gestionar propiedades y cerrar más operaciones.",
  heroPlaceholder: "HÉROE VISUAL: Catálogo Inmobiliario Móvil + Tablero Talos",
  pillars: [
    {
      icon: Building2,
      title: "Showroom Inmobiliario Moderno",
      text: "Catálogo digital de alta velocidad, fotos de alto impacto, mapas integrados y fichas de propiedad limpias.",
      placeholder: "CAPTURA: Catálogo de propiedades con mapa",
    },
    {
      icon: Bot,
      title: "Asistente de Ventas 24/7",
      text: "Atención continua, respuestas a dudas sobre ubicación, valores o comodidades, y captura de datos del interesado.",
      placeholder: "CAPTURA: Chat del asistente",
    },
    {
      icon: LayoutDashboard,
      title: "Panel de Control Comercial",
      text: "Control de inventario de propiedades (alquiler, venta y desarrollos), seguimiento de leads y gestión del pipeline comercial.",
      placeholder: "CAPTURA: Panel de control",
      stacked: true,
    },
  ],
  features: [
    {
      id: "comprador",
      eyebrow: "Experiencia del comprador",
      title: "Encontrar la propiedad ideal, sin vueltas.",
      items: [
        "Búsqueda ágil con filtros por tipo de propiedad, zona, dormitorios y rango de precio.",
        "Fichas detalladas con fotos de alto impacto y ubicación en mapa.",
        "Guiado interactivo mediante preguntas: presupuesto, tipo de operación, inversión o vivienda.",
      ],
      placeholder: "CAPTURA: Búsqueda con filtros y ficha de propiedad",
      reverse: false,
    },
    {
      id: "inmobiliaria",
      eyebrow: "Gestión para la inmobiliaria",
      title: "Toda tu cartera, bajo control.",
      items: [
        "Control de inventario: disponible, reservado y vendido.",
        "Registro de leads calificados en tiempo real, con sus preferencias.",
        "Historial de interacciones centralizado de cada cliente.",
      ],
      placeholder: "CAPTURA: Panel de cartera y leads",
      reverse: true,
    },
  ],
  workflowTitle: "De tu cartera a la operación, en tres pasos.",
  steps: [
    { title: "Carga tu cartera", text: "Sube tus propiedades y desarrollos con fotos, datos y ubicación. Tu catálogo queda publicado al instante." },
    { title: "Capta interés 24/7", text: "El asistente precalifica a inversores y compradores y captura sus datos a cualquier hora." },
    { title: "Cierra la operación desde el panel", text: "Guía al cliente desde el panel, prioriza los leads calificados y cierra más operaciones." },
  ],
  matrix: [
    { problem: "Consultas fuera de hora perdidas", result: "Captura de intención inmobiliaria 24/7" },
    { problem: "Catálogo lento o con fichas desordenadas", result: "Showroom rápido, con fichas limpias y mapas integrados" },
    { problem: "Preguntas repetidas sobre zona, valores y comodidades", result: "Respuestas automáticas en cualquier momento" },
    { problem: "Interesados sin precalificar", result: "Compradores e inversores precalificados, con sus preferencias" },
    { problem: "Cartera dispersa en planillas y mensajes", result: "Inventario centralizado: alquiler, venta y desarrollos" },
  ],
  cta: {
    heading: "Agenda una presentación de Oikos.",
    body: "Te mostramos el catálogo, el asistente y el panel funcionando con la cartera de tu inmobiliaria.",
    label: "Agendar presentación",
  },
};

export default function OikosPage() {
  return <ProductLanding content={content} />;
}
