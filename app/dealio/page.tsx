import type { Metadata } from "next";
import { Bot, LayoutDashboard, Smartphone } from "lucide-react";
import { siteUrl } from "@/config/site-url";
import ProductLanding, { type ProductLandingContent } from "@/components/ProductLanding";

// Share card (WhatsApp, Facebook, X). The image URL is absolute, built from NEXT_PUBLIC_SITE_URL.
const ogTitle = "Dealio | Tu Showroom Digital para Agendar Visitas al Dealer";
const ogDescription =
  "Presenta tu inventario con máxima velocidad y convierte interesados en citas presenciales. Facilita que tus clientes agenden su visita al dealer directamente por WhatsApp en segundos.";
const ogImage = `${siteUrl}/og/dealio.jpg`;

export const metadata: Metadata = {
  title: "Dealio | Plataforma comercial para concesionarias | Pegasus Pixels",
  description:
    "Catálogo digital ultra rápido, asistente virtual 24/7 que califica clientes y panel de control para gestionar inventario y cerrar más operaciones.",
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: `${siteUrl}/dealio`,
    siteName: "Pegasus Pixels",
    type: "website",
    locale: "es_ES",
    images: [{ url: ogImage, width: 1200, height: 630, type: "image/jpeg", alt: "Dealio: showroom digital para agendar visitas al dealer" }],
  },
  twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription, images: [ogImage] },
};

const content: ProductLandingContent = {
  desktopCards: true,
  navySteps: true,
  eyebrow: "⚡ La plataforma comercial para concesionarias",
  brand: "Dealio",
  headline: "Convierte las visitas de tu web en ventas reales — 24/7.",
  subheadline:
    "Dealio dota a tu concesionaria de un catálogo digital ultra rápido, un asistente virtual 24/7 que califica clientes y un panel de control para gestionar inventario y cerrar más operaciones.",
  heroPlaceholder: "HÉROE VISUAL: Catálogo Móvil + Tablero Talos",
  heroImage: "/services_images/dealio_web_2.webp",
  pillars: [
    {
      icon: Smartphone,
      title: "Showroom Digital Moderno",
      text: "Catálogo móvil de alta velocidad, fotos en alta resolución y fichas limpias.",
      placeholder: "CAPTURA: Catálogo móvil",
      image: "/services_images/dealio_mobile.webp",
    },
    {
      icon: Bot,
      title: "Asistente de Ventas 24/7",
      text: "Atención continua, respuestas automáticas a dudas frecuentes y captura de datos.",
      placeholder: "CAPTURA: Chat del asistente",
    },
    {
      icon: LayoutDashboard,
      title: "Panel de Control Comercial",
      text: "Control de stock, seguimiento de conversaciones y gestión del pipeline de ventas.",
      placeholder: "CAPTURA: Panel de control",
      stacked: true,
      image: "/services_images/dealio_panel.webp",
    },
  ],
  features: [
    {
      id: "comprador",
      eyebrow: "Experiencia del comprador",
      title: "Encontrar el auto correcto, sin fricción.",
      items: [
        "Filtros por marca, modelo y precio.",
        "Fichas de impacto con fotos en alta resolución.",
        "Guiado interactivo por preguntas: presupuesto, permuta y más.",
      ],
      placeholder: "CAPTURA: Catálogo con filtros y ficha de vehículo",
      reverse: false,
    },
    {
      id: "concesionaria",
      eyebrow: "Gestión para la concesionaria",
      title: "Todo tu negocio, bajo control.",
      items: [
        "Control de inventario: disponible, reservado y vendido.",
        "Registro de leads calificados en tiempo real.",
        "Historial de interacciones de cada cliente.",
      ],
      placeholder: "CAPTURA: Panel de inventario y leads",
      reverse: true,
    },
  ],
  workflowTitle: "De tu stock a la venta, en tres pasos.",
  steps: [
    { title: "Carga tu stock", text: "Sube tus vehículos con fotos y datos. Tu catálogo queda publicado al instante." },
    { title: "Capta interés 24/7 con el asistente", text: "Responde dudas, califica al cliente y captura sus datos a cualquier hora." },
    { title: "Cierra la venta desde el panel", text: "Sigue cada conversación, prioriza los leads calientes y cierra más operaciones." },
  ],
  matrix: [
    { problem: "Consultas nocturnas perdidas", result: "Captura de intención de compra 24/7" },
    { problem: "Catálogo lento o desactualizado", result: "Showroom móvil rápido, siempre al día" },
    { problem: "Clientes que preguntan lo mismo una y otra vez", result: "Respuestas automáticas a dudas frecuentes" },
    { problem: "Leads sin calificar ni seguimiento", result: "Leads calificados y pipeline ordenado" },
    { problem: "Stock en planillas y mensajes sueltos", result: "Inventario centralizado: disponible, reservado, vendido" },
  ],
  cta: {
    heading: "Agenda una presentación de Dealio.",
    body: "Te mostramos el catálogo, el asistente y el panel funcionando con el stock de tu concesionaria.",
    label: "Agendar presentación",
  },
};

export default function DealioPage() {
  return <ProductLanding content={content} />;
}
