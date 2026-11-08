// config/navigation.ts
// Main navigation shared by the header (desktop and mobile drawer) and the footer, so labels and paths stay identical.

import { initialProjects } from "@/config/projects";
import { serviceLinks } from "@/config/service-links";

export interface NavItem {
  label: string;
  href: string;
  /** Short line under the label in dropdown panels. */
  description?: string;
  /** Renders a dropdown in the header and an accordion in the mobile drawer. */
  children?: NavItem[];
}

// Vertical products, grouped under "Sistemas" in the header.
const systems: NavItem[] = [
  { label: "Dealio", href: "/dealio", description: "Plataforma comercial y catálogo para automotoras." },
  { label: "Oikos", href: "/oikos", description: "Catálogo digital y gestión para inmobiliarias." },
  { label: "Merkado", href: "/merkado", description: "Pedidos por WhatsApp y catálogo para alimentos y distribuidores." },
  { label: "Merkado B2B", href: "/merkado-b2b", description: "Pedidos por WhatsApp y catálogo para alimentos y distribuidores." },
];

const serviciosNav: NavItem = {
  label: "Servicios",
  href: "/servicios/doordash",
  children: [...serviceLinks.map((service) => ({ label: service.label, href: `/servicios/${service.slug}` }))],
};

// Header: Inicio | Sistemas ▾ | Servicios ▾ | Nosotros (the button goes to the contact form).
export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sistemas", href: "/dealio", children: systems },
  serviciosNav,
  { label: "Merkado B2B", href: "/merkado-b2b" },
  { label: "Nosotros", href: "/nosotros" },
];

// Footer: the full flat list, including the pages that no longer have a place in the header.
export const footerNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Proyectos",
    href: "/proyectos",
    children: [
      { label: "Ver todos los proyectos", href: "/proyectos" },
      ...initialProjects.map((project) => ({ label: project.title, href: `/proyectos/${project.slug}` })),
    ],
  },
  ...systems,
  { label: "Servicios", href: "/servicios/doordash" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "#contacto" },
];
