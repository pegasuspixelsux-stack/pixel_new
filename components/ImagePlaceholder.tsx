import type { ReactNode } from "react";

interface ImagePlaceholderProps {
  /** Descriptive tag shown inside, e.g. "HÉROE VISUAL: Catálogo Móvil + Tablero Talos". */
  label: string;
  /** Tailwind aspect-ratio class. Defaults to 4:3. */
  aspect?: string;
  className?: string;
  children?: ReactNode;
}

// Stand-in for a real screenshot. To swap it in, replace this component with a next/image (fill, object-cover)
// inside the same wrapper, keeping the aspect class so the layout does not shift.
export default function ImagePlaceholder({ label, aspect = "aspect-[4/3]", className = "", children }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-fg/30 bg-fg/[0.06] p-6 text-center ${aspect} ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_14px,color-mix(in_oklab,var(--fg)_5%,transparent)_14px_15px)]"
      />
      <span className="relative font-mono text-[11px] leading-relaxed tracking-wider text-fg/60 uppercase sm:text-xs">
        [ {label} ]
      </span>
      {children}
    </div>
  );
}
