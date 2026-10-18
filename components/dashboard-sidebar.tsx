"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as m from "motion/react-m";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { NAV_ITEMS, isNavActive } from "@/components/dashboard-nav";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) => isNavActive(pathname, href);

  return (
    <m.aside
      animate={{ width: collapsed ? 80 : 256 }}
      transition={{ type: "spring", stiffness: 260, damping: 32 }}
      className="sticky top-0 flex h-screen shrink-0 flex-col justify-between overflow-hidden border-r border-white/10 bg-black p-4 text-white backdrop-blur-md"
    >
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between gap-2 px-2 pt-2">
          {!collapsed && <span className="truncate font-serif text-xl italic">{siteConfig.name}</span>}
          <button
            type="button"
            onClick={() => setCollapsed((v) => !v)}
            aria-label={collapsed ? "Expandir menú" : "Contraer menú"}
            aria-expanded={!collapsed}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-[background-color,transform] duration-200 hover:bg-white/10 hover:text-white active:scale-[0.94]"
          >
            {collapsed ? <ChevronRight size={16} aria-hidden /> : <ChevronLeft size={16} aria-hidden />}
          </button>
        </div>

        <nav aria-label="Panel de control" className="flex flex-col gap-1">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                title={collapsed ? label : undefined}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-200 ${
                  active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} strokeWidth={1.5} aria-hidden className="shrink-0" />
                {!collapsed && <span className="truncate">{label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <Link
        href="/"
        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs text-white/50 transition-colors duration-200 hover:text-white ${
          collapsed ? "justify-center" : ""
        }`}
      >
        {collapsed ? "←" : "← Volver al sitio"}
      </Link>
    </m.aside>
  );
}
