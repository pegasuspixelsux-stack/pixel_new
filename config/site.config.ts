// config/site.config.ts

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
  contact: {
    email: string;
    phone: string;
    usPhone: string;
    whatsapp: string;
  };
  assets: {
    heroImage: string;
    loginBackground: string;
    placeholderProperty: string;
  };
  settings: {
    currency: string;
    locale: string;
    enableLeadNotification: boolean;
    autoAssignLeads: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: "Pegasus Pixels",
  tagline: "Socio tecnológico para la era digital",
  description:
    "Infraestructura digital para modernizar y estandarizar tu empresa: catálogo inteligente, captura de leads, automatización de ventas y gestión centralizada.",
  address: {
    street: "Ruta 10, km 160",
    city: "Punta del Este",
    state: "Maldonado",
    country: "Uruguay",
    zip: "20000",
  },
  contact: {
    email: "alejandro@pegasuspixels.com",
    phone: "+598 91 028 324",
    usPhone: "+1 202 422 4760",
    whatsapp: "+12024224760",
  },
  assets: {
    heroImage:
      "/photos/1600585154340-be6161a56a0c.webp",
    loginBackground:
      "/photos/1618005182384-a83a8bd57fbe.webp",
    placeholderProperty:
      "/photos/1600596542815-ffad4c1539a9.webp",
  },
  settings: {
    currency: "USD",
    locale: "es-UY",
    enableLeadNotification: true,
    autoAssignLeads: false,
  },
};
