import type { Metadata } from "next";
import { LayoutDashboard, LayoutList, Route, Settings2, Smartphone } from "lucide-react";
import ProductLanding, { type ProductLandingContent } from "@/components/ProductLanding";

const title = "Nomos | Gestión y catálogo corporativo | Pegasus Pixels";
const description =
  "Infraestructura digital para empresas, consultoras y distribuidores que necesitan organizar su oferta o servicios en un catálogo centralizado y derivar prospectos al responsable indicado.";

export const metadata: Metadata = {
  title,
  description,
  // Own title and URL for the share card; the image falls back to the site default (/og/default.jpg) until this page gets its own.
  openGraph: {
    title,
    description,
    url: "/nomos",
    siteName: "Pegasus Pixels",
    type: "website",
    locale: "es_ES",
    images: [{ url: "/og/default.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Pegasus Pixels: infraestructura digital para empresas modernas" }],
  },
  twitter: { card: "summary_large_image", images: ["/og/default.jpg"] },
};

const content: ProductLandingContent = {
  eyebrow: "⚡ La plataforma de gestión y catálogo para empresas, consultoras y distribuidores",
  brand: "Nomos",
  headline: "Tu oferta corporativa, organizada y lista para captar clientes.",
  subheadline:
    "Nomos es la infraestructura digital que centraliza tus servicios, productos y soluciones, y deriva cada requerimiento comercial directo al responsable operativo.",
  heroPlaceholder: "HÉROE VISUAL: Catálogo Corporativo + Derivación de Prospectos + Panel de Gestión",
  pillars: [
    {
      icon: Smartphone,
      title: "Catálogo Corporativo a Medida",
      text: "Organización clara de servicios, productos o soluciones, accesible desde cualquier dispositivo.",
      placeholder: "CAPTURA: Catálogo corporativo",
    },
    {
      icon: Route,
      title: "Derivación de Prospectos",
      text: "Enrutamiento directo de requerimientos comerciales hacia los responsables operativos.",
      placeholder: "CAPTURA: Derivación de consultas",
    },
    {
      icon: LayoutDashboard,
      title: "Panel de Gestión Simplificado",
      text: "Interfaz de administración rápida para mantener datos y contenidos actualizados en todo momento.",
      placeholder: "CAPTURA: Panel de administración",
      stacked: true,
    },
  ],
  features: [
    {
      id: "oferta",
      eyebrow: "Oferta centralizada",
      title: "Toda tu oferta, en un solo lugar.",
      items: [
        "Estructura de catálogo adaptada a tu empresa.",
        "Servicios, productos y soluciones organizados con claridad.",
        "Información siempre actualizada para clientes y equipo comercial.",
      ],
      placeholder: "CAPTURA: Estructura de catálogo",
      reverse: false,
    },
    {
      id: "prospectos",
      eyebrow: "Captación y derivación",
      title: "Cada consulta llega a la persona correcta.",
      items: [
        "Captación estructurada de requerimientos comerciales.",
        "Enrutamiento directo hacia los responsables operativos.",
        "Gestión simple desde un único panel.",
      ],
      placeholder: "CAPTURA: Derivación de prospectos",
      reverse: true,
    },
  ],
  benefits: {
    eyebrow: "Funcionalidades clave",
    title: "Lo que Nomos hace por tu empresa.",
    subtitle: "Organización centralizada de oferta o servicios para empresas, consultoras y distribuidores.",
    items: [
      { icon: LayoutList, title: "Estructura de catálogo a medida", text: "Organización clara de servicios, productos o soluciones corporativas." },
      { icon: Route, title: "Captación y derivación de prospectos", text: "Enrutamiento directo de requerimientos comerciales hacia los responsables operativos." },
      { icon: Settings2, title: "Gestión simplificada", text: "Interfaz de administración rápida para mantener datos y contenidos actualizados en todo momento." },
    ],
  },
  workflowTitle: "De tu oferta al prospecto, en tres pasos.",
  steps: [
    { title: "Estructura tu catálogo", text: "Definimos con vos cómo se organizan tus servicios, productos o soluciones." },
    { title: "Capta requerimientos", text: "Tus clientes consultan y cada requerimiento ingresa de forma estructurada." },
    { title: "Deriva al responsable", text: "Cada consulta llega directo al responsable operativo, listo para gestionar." },
  ],
  matrix: [
    { problem: "Oferta dispersa en documentos y mensajes", result: "Catálogo centralizado y ordenado" },
    { problem: "Consultas que no llegan a quien corresponde", result: "Derivación directa al responsable operativo" },
    { problem: "Contenidos desactualizados", result: "Actualización rápida desde el panel de gestión" },
  ],
  cta: {
    heading: "Agenda una presentación de Nomos.",
    body: "Te mostramos cómo organizar tu oferta y derivar prospectos con la estructura de tu empresa.",
    label: "Agendar presentación",
  },
};

export default function NomosPage() {
  return <ProductLanding content={content} />;
}
