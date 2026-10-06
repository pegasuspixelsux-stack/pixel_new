"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Plus, X } from "lucide-react";
import { projectCategories, projectStatuses } from "@/config/projects";

const fieldClass =
  "w-full rounded-xl border border-fg/10 bg-fg/5 px-4 py-3 text-sm text-fg placeholder:text-fg/40 transition-[border-color,background-color] duration-200 focus:border-fg/40 focus:bg-fg/10 focus:outline-none";

const labelClass = "mb-1.5 block text-xs tracking-wider text-fg/60 uppercase";

const iconButton =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-fg/10 text-fg/60 transition-colors duration-200 hover:text-fg";

interface Metric {
  label: string;
  value: string;
}

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="flex flex-col gap-6 rounded-2xl border border-fg/10 bg-surface/70 p-6 backdrop-blur-md md:p-8">
      <legend className="px-1 font-serif text-2xl">{title}</legend>
      {children}
    </fieldset>
  );
}

export default function ProjectForm() {
  const [title, setTitle] = useState("");
  const [deliverables, setDeliverables] = useState<string[]>([""]);
  const [metrics, setMetrics] = useState<Metric[]>([{ label: "", value: "" }]);
  const [featured, setFeatured] = useState(false);
  const [saved, setSaved] = useState(false);

  // No data layer is connected yet, so this only shows a local confirmation. Wire it to the project store when Firebase lands.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
  }

  function updateAt<T>(list: T[], index: number, value: T) {
    return list.map((item, i) => (i === index ? value : item));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <Section title="Datos generales">
        <div>
          <label htmlFor="title" className={labelClass}>
            Nombre del proyecto
          </label>
          <input
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Dealio — Plataforma de Gestión Automotriz"
            className={fieldClass}
          />
          <p className="mt-2 text-xs text-fg/50">URL: /proyectos/{slugify(title) || "nombre-del-proyecto"}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="client" className={labelClass}>
              Cliente / Rubro
            </label>
            <input id="client" name="client" required placeholder="Concesionarias y Automotoras" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="category" className={labelClass}>
              Categoría
            </label>
            <select id="category" name="category" required defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Seleccionar
              </option>
              {projectCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="status" className={labelClass}>
              Estado
            </label>
            <select id="status" name="status" required defaultValue="Activo" className={fieldClass}>
              {projectStatuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col justify-end">
            <span className={labelClass}>Destacado en home</span>
            <button
              type="button"
              role="switch"
              aria-checked={featured}
              onClick={() => setFeatured((v) => !v)}
              className={`relative flex h-11 w-20 items-center rounded-full border p-1 transition-colors duration-200 ${
                featured ? "border-emerald-500 bg-emerald-500/30" : "border-fg/20 bg-fg/5"
              }`}
            >
              <span
                className={`h-8 w-8 rounded-full bg-fg shadow transition-transform duration-200 ${
                  featured ? "translate-x-9" : "translate-x-0"
                }`}
              />
              <span className="sr-only">Destacado en home</span>
            </button>
          </div>
        </div>
      </Section>

      <Section title="Contenido">
        <div>
          <label htmlFor="summary" className={labelClass}>
            Resumen corto
          </label>
          <textarea
            id="summary"
            name="summary"
            rows={2}
            required
            placeholder="Se muestra en las tarjetas del home y del listado."
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="description" className={labelClass}>
            Descripción detallada
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            required
            placeholder="Desafío del cliente y solución implementada. Se muestra en la página del proyecto."
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-3">
          <span className={labelClass}>Entregables / Módulos implementados</span>
          {deliverables.map((item, index) => (
            <div key={index} className="flex gap-3">
              <input
                aria-label={`Entregable ${index + 1}`}
                value={item}
                onChange={(e) => setDeliverables(updateAt(deliverables, index, e.target.value))}
                placeholder="Catálogo dinámico de inventario"
                className={fieldClass}
              />
              <button
                type="button"
                aria-label={`Quitar entregable ${index + 1}`}
                onClick={() => setDeliverables(deliverables.filter((_, i) => i !== index))}
                className={iconButton}
              >
                <X size={16} aria-hidden />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setDeliverables([...deliverables, ""])}
            className="flex w-fit items-center gap-2 text-xs font-medium text-fg/60 transition-colors duration-200 hover:text-fg"
          >
            <Plus size={14} aria-hidden />
            Agregar entregable
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <span className={labelClass}>Métricas / Impacto</span>
          {metrics.map((metric, index) => (
            <div key={index} className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <input
                aria-label={`Etiqueta de métrica ${index + 1}`}
                value={metric.label}
                onChange={(e) => setMetrics(updateAt(metrics, index, { ...metric, label: e.target.value }))}
                placeholder="Tiempo de Carga"
                className={fieldClass}
              />
              <input
                aria-label={`Valor de métrica ${index + 1}`}
                value={metric.value}
                onChange={(e) => setMetrics(updateAt(metrics, index, { ...metric, value: e.target.value }))}
                placeholder="< 1.2s"
                className={fieldClass}
              />
              <button
                type="button"
                aria-label={`Quitar métrica ${index + 1}`}
                onClick={() => setMetrics(metrics.filter((_, i) => i !== index))}
                className={iconButton}
              >
                <X size={16} aria-hidden />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setMetrics([...metrics, { label: "", value: "" }])}
            className="flex w-fit items-center gap-2 text-xs font-medium text-fg/60 transition-colors duration-200 hover:text-fg"
          >
            <Plus size={14} aria-hidden />
            Agregar métrica
          </button>
        </div>
      </Section>

      <Section title="Imágenes">
        <div>
          <label htmlFor="heroImage" className={labelClass}>
            Imagen principal (URL)
          </label>
          <input id="heroImage" name="heroImage" type="url" placeholder="/projects/nombre.jpg" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="gallery" className={labelClass}>
            Galería (una URL por línea)
          </label>
          <textarea id="gallery" name="gallery" rows={3} placeholder="/projects/nombre-1.jpg" className={fieldClass} />
        </div>
        <p className="text-xs text-fg/50">La subida de archivos se conectará con el almacenamiento cuando esté disponible.</p>
      </Section>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="rounded-full bg-fg px-8 py-3.5 text-sm font-medium text-canvas transition-[background-color,transform] duration-200 ease-out hover:bg-fg/90 active:scale-[0.97]"
        >
          Guardar proyecto
        </button>
        {saved ? (
          <p role="status" className="text-sm text-fg/70">
            Ficha validada. Los cambios no se guardan todavía: la base de datos aún no está conectada.
          </p>
        ) : null}
      </div>
    </form>
  );
}
