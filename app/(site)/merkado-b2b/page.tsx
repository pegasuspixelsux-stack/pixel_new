import type { Metadata } from "next";
import { LayoutDashboard, MessageCircle, MessageSquareOff, Repeat, Smartphone, Tags, TrendingUp, UsersRound } from "lucide-react";
import ProductLanding, { type ProductLandingContent } from "@/components/ProductLanding";

export const metadata: Metadata = {
  title: "Merkado B2B | Catálogo digital y pedidos por WhatsApp | Pegasus Pixels",
  description:
    "Catálogo digital intuitivo para pedidos directos por WhatsApp y panel de control para administrar productos y precios en tiempo real.",
  // Own title and URL for the share card; the image falls back to the site default (/og/default.jpg) until this page gets its own.
  openGraph: {
    title: "Merkado B2B | Catálogo digital y pedidos por WhatsApp | Pegasus Pixels",
    description:
      "Catálogo digital intuitivo para pedidos directos por WhatsApp y panel de control para administrar productos y precios en tiempo real.",
    url: "/merkado-b2b",
    siteName: "Pegasus Pixels",
    type: "website",
    locale: "es_ES",
    images: [{ url: "/og/default.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Pegasus Pixels: infraestructura digital para empresas modernas" }],
  },
  twitter: { card: "summary_large_image", images: ["/og/default.jpg"] },
};

const content: ProductLandingContent = {
  stackedHero: true,
  workflowFirst: true,
  eyebrow: "⚡ La plataforma de pedidos y catálogo para carnicerías, panaderías, pastas, verdulerías y distribuidores",
  brand: "Merkado B2B",
  headline: "El Motor de Ventas para Distribuidoras y Mayoristas.",
  subheadline:
    "Permita que sus clientes comerciales y preventistas autogestionen pedidos 24/7 sin forzar un inventario en tiempo real.",
  heroPlaceholder: "HÉROE VISUAL: Catálogo Móvil + Pedido WhatsApp + Panel de Administración",
  stats: [
    { value: "0", text: "Horas perdidas en toma manual de pedidos por WhatsApp." },
    { value: "100%", text: "Control sobre validación de stock y ajuste de cantidades." },
    { value: "24/7", text: "Disponible para recepción de solicitudes de clientes Horeca." },
  ],
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
      text: "Actualiza precios, agrega o elimina ítems y gestiona usuarios de forma instantánea.",
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
        "Alta de nuevos productos y asignación de roles y usuarios.",
      ],
      placeholder: "CAPTURA: Dashboard de precios",
      reverse: true,
    },
  ],
  workflowEyebrow: "Flujo de trabajo operativo",
  workflowTitle: "¿Cómo funciona Merkado B2B?",
  workflowSubtitle: "De la solicitud nocturna del restaurante a la factura oficial en 3 pasos determinísticos.",
  steps: [
    {
      role: "Preventista / Cliente Horeca",
      title: "La Solicitud",
      text: "El cliente (restaurante, hotel, supermercado) o el preventista selecciona los productos en Merkado desde su celular o laptop y envía la orden.",
      details: [{ label: "Estado", text: "el pedido ingresa como \"Solicitud Pendiente de Confirmación\", sin prometer stock ni emitir cobro automático." }],
    },
    {
      role: "Oficina Central / Depósito",
      title: "La Validación",
      text: "La oficina central visualiza todas las solicitudes entrantes en el Panel Admin de Merkado.",
      details: [{ label: "Acción", text: "el equipo verifica la disponibilidad física en el depósito y ajusta o modifica cantidades de forma directa si existe algún faltante antes de aprobar." }],
    },
    {
      role: "Sistema de Facturación / Despacho",
      title: "Confirmación y Facturación",
      text: "Al hacer clic en \"Confirmar Stock\", el sistema notifica al cliente al instante y transmite los datos validados al sistema de facturación.",
      details: [{ label: "Resultado", text: "se emite la factura legal (o remito) con el importe exacto de lo disponible para despacho." }],
    },
  ],
  objection: {
    eyebrow: "Objeción clave resuelta",
    title: "¿Inventario en tiempo real no automatizado? Ningún problema.",
    highlight: "Merkado no requiere que su depósito cuente con sensores automáticos ni integración de stock en tiempo real para empezar a operar.",
    text: "La plataforma actúa como un recolector inteligente de solicitudes comerciales. Su equipo administrativo mantiene el 100% del control para revisar el depósito físico, modificar unidades si no hay existencias completas y aprobar la orden antes de generar cualquier factura.",
  },
  benefits: {
    eyebrow: "Beneficios operativos B2B",
    title: "Diseñado para el Canal Mayorista y Horeca",
    subtitle: "Eficiencia administrativa, protección de margen y control comercial total.",
    items: [
      { icon: Tags, title: "Listas de Precios por Cliente", text: "Configure tarifas diferenciadas, descuentos por volumen y condiciones comerciales acordadas para cada hotel, restaurante o comercio minorista." },
      { icon: Repeat, title: "Repetición de Pedidos en 1 Clic", text: "Los jefes de cocina y encargados de compras guardan sus \"favoritos habituales\" para reordenar el insumo de la semana en segundos." },
      { icon: MessageSquareOff, title: "Eliminación del Caos de WhatsApp", text: "Evite audios borrosos, mensajes fuera de hora y errores de tipeo manual. Toda la información entra estructurada y limpia." },
      { icon: TrendingUp, title: "Precios y Márgenes Dinámicos", text: "Actualice listas de precios por rubro o familia de productos al instante ante variaciones de costo en origen o frigorífico." },
      { icon: UsersRound, title: "Roles y Permisos de Usuarios", text: "Diferencie el acceso para preventistas en calle, administradores de depósito y dueños de locales clientes." },
    ],
  },
  simulator: {
    eyebrow: "Simulador interactivo de flujo",
    title: "Experimente la Plataforma",
    subtitle: "Seleccione cada pestaña para visualizar cómo interactúan las tres vistas principales del sistema.",
    tabs: [
      {
        label: "Vista Cliente / Preventista",
        title: "Vista Cliente / Preventista",
        text: "Interfaz móvil para selección de productos por catálogo y envío de \"Solicitud de Pedido\".",
        device: "mobile",
        placeholder: "CAPTURA: Catálogo móvil y solicitud de pedido",
      },
      {
        label: "Panel Admin: Validación de Stock",
        title: "Panel Admin: Validación de Stock",
        text: "Interfaz de escritorio para la oficina central donde se revisa el pedido, se confirman existencias físicas y se ajustan cantidades.",
        device: "desktop",
        placeholder: "CAPTURA: Panel admin, validación de stock",
      },
      {
        label: "Confirmación y Facturación",
        title: "Confirmación y Facturación",
        text: "Generación del pedido final validado listo para la emisión de factura legal y armado de ruta de entrega.",
        device: "desktop",
        placeholder: "CAPTURA: Pedido validado listo para facturar",
      },
    ],
  },
  matrix: [
    { problem: "Listas de precios desactualizadas", result: "Catálogo siempre al día, por rubro" },
    { problem: "Chat caótico con pedidos desordenados", result: "Pedidos estructurados, con detalle y cantidades" },
    { problem: "Clientes que preguntan precios uno por uno", result: "Catálogo móvil con buscador y categorías, 24/7" },
    { problem: "Cambios de precio que tardan en llegar a todos", result: "Precios actualizados al instante desde el panel" },
  ],
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Preguntas Frecuentes",
    items: [
      { q: "¿Es necesario reemplazar nuestro sistema de facturación actual?", a: "No. Merkado funciona como la capa de recepción y validación de pedidos comercial. Una vez confirmada la orden, los datos se pasan a su sistema de facturación habitual." },
      { q: "¿Qué sucede si un cliente pide 50 kg de un corte y solo tenemos 30 kg en depósito?", a: "En el Paso 2 (Validación), el administrador ajusta la cantidad a 30 kg. El cliente recibe una notificación con la actualización y la factura se emite únicamente por los 30 kg despachados." },
      { q: "¿Mis clientes pueden ver los precios de otros clientes?", a: "No. Cada cuenta comercial accede con sus credenciales y visualiza exclusivamente la lista de precios y condiciones de pago asignadas a su razón social." },
      { q: "¿Los preventistas pueden usar la plataforma en calle?", a: "Sí. Merkado está optimizado para dispositivos móviles, permitiendo a los vendedores tomar pedidos en el local del cliente de manera ágil." },
    ],
  },
  cta: {
    heading: "Modernice la canalización de pedidos de su distribuidora hoy.",
    body: "Despliegue su propia plataforma B2B sin alterar sus reglas de negocio ni depender de inventarios automatizados.",
    label: "Solicitar Demostración de Merkado B2B",
    note: "Demostración adaptada a la operativa de su empresa.",
  },
};

export default function MerkadoB2BPage() {
  return <ProductLanding content={content} />;
}
