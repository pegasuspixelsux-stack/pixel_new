import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/config/projects";

// Deliverables shown on the card; the full list lives on the project page.
const CARD_DELIVERABLES = 3;

// Full-bleed photo card: the image fills the card, a dark gradient rises from the bottom,
// and the text sits on top of it. The whole card links to the project page.
export default function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group relative block aspect-square cursor-pointer overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0f1523]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#070a11] via-[#070a11]/70 to-transparent" />

      {index !== undefined && (
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <span className="rounded-md border border-slate-700/60 bg-slate-900/80 px-2.5 py-1 font-mono text-xs text-slate-300">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end gap-3 p-6 md:p-8">
        <p className="font-mono text-xs font-semibold tracking-wider text-blue-400 uppercase">
          {project.category} · {project.client}
        </p>
        <h3 className="text-xl leading-tight font-bold text-white md:text-2xl">{project.title}</h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-slate-300 md:text-sm">{project.summary}</p>

        <ul className="flex flex-col gap-1.5">
          {project.deliverables.slice(0, CARD_DELIVERABLES).map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-xs text-slate-300">
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              {item}
            </li>
          ))}
        </ul>

        <span className="mt-1 flex items-center justify-between border-t border-slate-700/60 pt-3 text-sm font-medium text-white">
          Ver Caso
          <ArrowRight size={14} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
