import {
  Briefcase,
  LayoutDashboard,
  LayoutGrid,
  MessageSquare,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";

// Dashboard sections, shared by the sidebar and the top bar.
export const NAV_ITEMS: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Panel de Control", href: "/dashboard", icon: LayoutDashboard },
  { label: "Proyectos / Casos", href: "/dashboard/proyectos", icon: LayoutGrid },
  { label: "Servicios", href: "/dashboard/servicios", icon: Briefcase },
  { label: "Usuarios & Clientes", href: "/dashboard/users", icon: Users },
  { label: "Leads & Contactos", href: "/dashboard/leads", icon: MessageSquare },
  { label: "Configuración", href: "/dashboard/settings", icon: Settings },
];

// Same check for both menus: the overview only matches exactly, the other pages also match their sub-routes.
export const isNavActive = (pathname: string, href: string) =>
  href === "/dashboard" ? pathname === href : pathname.startsWith(href);
