// Class strings shared by the service/project landing pages (ProjectLanding, ProjectDetail), so they stay in sync.

export const glass = "border border-fg/15 bg-fg/[0.05] backdrop-blur-md";
export const eyebrow = "text-xs font-medium tracking-[0.18em] text-accent uppercase";
export const h2 = "font-inter-display text-3xl leading-tight font-medium tracking-[-0.03em] md:text-5xl";
// Same hover as the home page boxes: accent border, glow and a small lift (also on touch, via LitCard).
export const cardHover =
  "transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:lit:-translate-y-1 lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)]";
export const ctaButton =
  "inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-canvas transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-accent/90 hover:shadow-[0_0_40px_var(--accent-glow)] active:scale-[0.97]";
export const secondaryButton =
  "inline-flex items-center gap-2 rounded-full border border-fg/40 px-8 py-4 text-sm font-semibold transition-[background-color,transform] duration-200 ease-out hover:bg-fg/5 active:scale-[0.97]";
