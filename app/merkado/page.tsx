import type { Metadata } from "next";
import { LayoutDashboard, MessageCircle, Smartphone } from "lucide-react";
import ProductLanding, { type ProductLandingContent } from "@/components/ProductLanding";

export const metadata: Metadata = {
  title: "Merkado | Catálogo digital y pedidos por WhatsApp | Pegasus Pixels",
  description:
    "Catálogo digital intuitivo para pedidos directos por WhatsApp y panel de control para administrar productos, precios y stock en tiempo real.",
};

const content: ProductLandingContent = {
  themeClass: "theme-merkado",
  eyebrow: "⚡ La plataforma de pedidos y catálogo para carnicerías, panaderías, pastas, verdulerías y distribuidores",
  brand: "Merkado",
  headline: "Tu catálogo digital y pedidos por WhatsApp en un solo lugar — 24/7.",
  subheadline:
    "Merkado dota a carnicerías, panaderías, fábricas de pasta, verdulerías, almacenes, minimarkets y distribuidores de alimentos de un catálogo digital intuitivo para pedidos directos y un panel de control para administrar productos, precios y stock en tiempo real.",
  heroPlaceholder: "HÉROE VISUAL: Catálogo Móvil + Pedido WhatsApp + Panel de Administración",
  pillars: [
    {
      icon: Smartphone,
      title: "Catálogo Móvil Intuitivo",
      text: "Navegación ultra rápida por categorías (carnes, pastas, panadería, verduras, secos), buscador integrado y visualización limpia de productos.",
      placeholder: "CAPTURA: Catálogo móvil por categorías",
    },
    {
      icon: MessageCircle,
      title: "Pedido Directo a WhatsApp",
      text: "Generación de carrito preconfigurado que envía el detalle del pedido directamente al WhatsApp del comercio, sin fricción.",
      placeholder: "CAPTURA: Carrito y pedido por WhatsApp",
    },
    {
      icon: LayoutDashboard,
      title: "Panel de Gestión en Tiempo Real",
      text: "Actualiza precios, agrega o elimina ítems, marca productos sin stock y gestiona usuarios de forma instantánea.",
      placeholder: "CAPTURA: Panel de administración",
      stacked: true,
    },
  ],
  features: [
    {
      id: "cliente",
      eyebrow: "Experiencia del cliente",
      title: "Armar el pedido, en un par de toques.",
      items: [
        "Búsqueda ágil por rubro: frescos, cortes de carne, especialidades.",
        "Selección de cantidades o peso.",
        "Checkout en un clic a WhatsApp.",
      ],
      placeholder: "CAPTURA: Catálogo, selección de cantidades y checkout",
      reverse: false,
    },
    {
      id: "comercio",
      eyebrow: "Gestión para el comercio y el distribuidor",
      title: "Tu catálogo, siempre al día.",
      items: [
        "Dashboard intuitivo para ajustar precios rápidamente.",
        "Control de inventario: en stock o agotado.",
        "Alta de nuevos productos y asignación de roles y usuarios.",
      ],
      placeholder: "CAPTURA: Dashboard de precios y stock",
      reverse: true,
    },
  ],
  workflowTitle: "De tu catálogo al pedido listo, en tres pasos.",
  steps: [
    { title: "Configura tu catálogo", text: "Carga tus productos y ajusta tus precios desde el panel." },
    { title: "Tus clientes arman su pedido", text: "Navegan el catálogo, eligen cantidades y envían el pedido a tu WhatsApp." },
    { title: "Recibes la orden lista", text: "La orden llega lista para preparar, cobrar y despachar." },
  ],
  matrix: [
    { problem: "Listas de precios desactualizadas", result: "Catálogo siempre al día, por rubro" },
    { problem: "Chat caótico con pedidos desordenados", result: "Pedidos estructurados, con detalle y cantidades" },
    { problem: "Productos agotados que se siguen ofreciendo", result: "Stock marcado en tiempo real: en stock o agotado" },
    { problem: "Clientes que preguntan precios uno por uno", result: "Catálogo móvil con buscador y categorías, 24/7" },
    { problem: "Cambios de precio que tardan en llegar a todos", result: "Precios actualizados al instante desde el panel" },
  ],
  cta: {
    heading: "Agenda una presentación de Merkado.",
    body: "Te mostramos el catálogo, el pedido por WhatsApp y el panel funcionando con los productos de tu comercio.",
    label: "Agendar presentación",
  },
};

export default function MerkadoPage() {
  return <ProductLanding content={content} />;
}
