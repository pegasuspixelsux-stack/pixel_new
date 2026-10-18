"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ExternalLink, LogOut } from "lucide-react";
import { NAV_ITEMS, isNavActive } from "@/components/dashboard-nav";
import { DEMO_EMAIL } from "@/config/auth";

// Until Firebase Auth is connected there is a single demo administrator. When it is, read these from the
// signed-in user instead.
const USER = { name: "Administrador", email: DEMO_EMAIL };
const initials = USER.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function DashboardTopbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the user menu on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  async function logout() {
    await fetch("/api/logout", { method: "POST" }).catch(() => null);
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-fg/10 bg-canvas/80 px-6 backdrop-blur-md lg:px-12">
      <nav aria-label="Navegación superior" className="-mx-1 flex min-w-0 items-center gap-1 overflow-x-auto">
        {NAV_ITEMS.map(({ label, href }) => {
          const active = isNavActive(pathname, href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-3 py-1.5 text-sm whitespace-nowrap transition-colors duration-200 ${
                active ? "bg-fg/10 text-fg" : "text-fg/70 hover:bg-fg/5 hover:text-fg"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div ref={menuRef} className="relative shrink-0">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label="Menú de usuario"
          className="flex items-center gap-3 rounded-full border border-fg/15 py-1 pr-3 pl-1 transition-colors duration-200 hover:bg-fg/5"
        >
          <span
            aria-hidden
            className="flex size-8 items-center justify-center rounded-full bg-fg text-xs font-semibold text-canvas"
          >
            {initials}
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-sm font-medium">{USER.name}</span>
          </span>
          <ChevronDown size={14} aria-hidden className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div
            role="menu"
            className="absolute top-full right-0 mt-2 w-64 rounded-2xl border border-fg/10 bg-canvas p-2 shadow-xl"
          >
            <div className="px-3 py-2.5">
              <p className="text-sm font-medium">{USER.name}</p>
              <p className="truncate text-xs text-fg/70">{USER.email}</p>
            </div>
            <div className="my-1 border-t border-fg/10" />
            <Link
              href="/"
              role="menuitem"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-fg/80 transition-colors duration-200 hover:bg-fg/5 hover:text-fg"
            >
              <ExternalLink size={15} aria-hidden />
              Ver el sitio
            </Link>
            <button
              type="button"
              role="menuitem"
              onClick={logout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-fg/80 transition-colors duration-200 hover:bg-fg/5 hover:text-fg"
            >
              <LogOut size={15} aria-hidden />
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
