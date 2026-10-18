"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Trash2 } from "lucide-react";
import type { StoredService } from "@/lib/store";

const fieldClass =
  "w-full rounded-xl border border-fg/10 bg-fg/5 px-4 py-3 text-sm text-fg placeholder:text-fg/40 focus:border-fg/40 focus:outline-none";
const labelClass = "mb-1.5 block text-xs tracking-wider text-fg/60 uppercase";

// Dashboard services manager: add a service and delete existing ones. Saves through /api/services.
export default function ServiceManager({ services }: { services: StoredService[] }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAdd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSaving(true);
    const form = event.currentTarget;
    const res = await fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
    }).catch(() => null);
    setSaving(false);
    if (res?.ok) {
      form.reset();
      router.refresh();
    } else {
      const data = (await res?.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "No se pudo guardar el servicio.");
    }
  }

  async function handleDelete(id: string) {
    const res = await fetch("/api/services", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).catch(() => null);
    if (res?.ok) router.refresh();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,380px)_1fr]">
      <form
        onSubmit={handleAdd}
        className="flex flex-col gap-4 rounded-2xl border border-fg/10 bg-surface/70 p-6 backdrop-blur-md"
      >
        <h2 className="text-lg font-medium">Agregar servicio</h2>
        <div>
          <label htmlFor="svc-name" className={labelClass}>
            Nombre
          </label>
          <input id="svc-name" name="name" required className={fieldClass} placeholder="Ej: Diagnóstico operativo" />
        </div>
        <div>
          <label htmlFor="svc-category" className={labelClass}>
            Categoría
          </label>
          <input id="svc-category" name="category" className={fieldClass} placeholder="Ej: Web, Automatización…" />
        </div>
        <div>
          <label htmlFor="svc-description" className={labelClass}>
            Descripción
          </label>
          <textarea id="svc-description" name="description" rows={4} className={`${fieldClass} resize-none`} />
        </div>
        <div>
          <label htmlFor="svc-status" className={labelClass}>
            Estado
          </label>
          <select id="svc-status" name="status" defaultValue="Activo" className={fieldClass}>
            <option value="Activo">Activo</option>
            <option value="Borrador">Borrador</option>
          </select>
        </div>
        {error && (
          <p role="alert" className="text-sm text-red-500">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-fg py-3 text-sm font-medium text-canvas transition-[background-color,transform] duration-200 hover:bg-fg/90 active:scale-[0.98] disabled:opacity-60"
        >
          {saving ? "Guardando…" : "Agregar servicio"}
        </button>
      </form>

      <ul className="flex flex-col gap-3">
        {services.map((service) => (
          <li
            key={service.id}
            className="flex items-start justify-between gap-4 rounded-2xl border border-fg/10 bg-surface/70 p-5 backdrop-blur-md"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-medium">{service.name}</p>
                <span className="rounded-full border border-fg/20 px-2.5 py-0.5 text-xs text-fg/70">{service.category}</span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs ${
                    service.status === "Activo" ? "border-emerald-500/40 text-emerald-500" : "border-fg/20 text-fg/60"
                  }`}
                >
                  {service.status}
                </span>
              </div>
              {service.description && <p className="mt-2 text-sm leading-relaxed text-fg/70">{service.description}</p>}
            </div>
            <button
              type="button"
              onClick={() => handleDelete(service.id)}
              aria-label={`Eliminar ${service.name}`}
              className="shrink-0 rounded-full p-2 text-fg/50 transition-colors duration-200 hover:bg-fg/10 hover:text-fg"
            >
              <Trash2 size={16} aria-hidden />
            </button>
          </li>
        ))}
        {services.length === 0 && (
          <li className="rounded-2xl border border-fg/10 p-6 text-sm text-fg/70">Todavía no hay servicios.</li>
        )}
      </ul>
    </div>
  );
}
