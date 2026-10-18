// config/navigation.ts
// Main navigation shared by the header (desktop and mobile drawer) and the footer, so labels and paths stay identical.

import { initialProjects } from "@/config/projects";
import { serviceLinks } from "@/config/service-links";

export interface NavItem {
  label: string;
  href: string;
  /** Renders a dropdown in the header. */
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Proyectos",
    href: "/proyectos",
    children: [
      { label: "Ver todos los proyectos", href: "/proyectos" },
      ...initialProjects.map((project) => ({ label: project.title, href: `/proyectos/${project.slug}` })),
    ],
  },
  {
    label: "Servicios",
    href: "/servicios/doordash",
    children: [
      ...serviceLinks.map((service) => ({ label: service.label, href: `/servicios/${service.slug}` })),
    ],
  },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "#contacto" },
];
