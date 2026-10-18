import { siteConfig } from "@/config/site.config";

// Every "Solicitar Auditoría" button on the menu engineering page opens WhatsApp with this pre-written message.
const MESSAGE =
  "Hola Pegasus Pixels, quiero solicitar el análisis gratuito de ingeniería de menú para mi restaurante.";

export const menuAuditWhatsappHref = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(MESSAGE)}`;
