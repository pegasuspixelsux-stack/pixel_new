"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Phone-only "pinned horizontal scroll": while the cards are in view the page stops and the vertical scroll slides the
// row sideways to the last card; after that the page continues down. From the breakpoint up the list is a normal grid
// (the parent passes its grid classes). With reduced motion, or before JS runs, the row is a plain swipeable scroller.
// Class names are written out in full (never built from strings) so Tailwind can see them.
const bp = {
  md: {
    query: "(max-width: 767px)",
    viewport: "-mx-6 md:mx-0 md:my-0 md:overflow-visible md:py-0",
    sticky: "md:static",
    track: "md:mx-0 md:grid md:w-auto md:gap-6 md:px-0 md:pb-0",
  },
  lg: {
    query: "(max-width: 1023px)",
    viewport: "-mx-6 lg:mx-0 lg:my-0 lg:overflow-visible lg:py-0",
    sticky: "lg:static",
    track: "lg:mx-0 lg:grid lg:w-auto lg:gap-8 lg:px-0 lg:pb-0",
  },
} as const;

interface HorizontalPinProps {
  as?: "ol" | "ul";
  /** Where the list becomes a grid: "md" (768px) or "lg" (1024px). */
  breakpoint: "md" | "lg";
  /** Extra track classes for the grid layout, e.g. "md:grid-cols-2 lg:gap-8". */
  gridClassName: string;
  children: ReactNode;
}

export default function HorizontalPin({ as: Tag = "ul", breakpoint, gridClassName, children }: HorizontalPinProps) {
  const cfg = bp[breakpoint];
  const outer = useRef<HTMLDivElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement & HTMLOListElement>(null);
  const [pinned, setPinned] = useState(false);

  // Pinned only on small screens and when the visitor has not asked for reduced motion.
  useEffect(() => {
    const small = window.matchMedia(cfg.query);
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPinned(small.matches && !calm.matches);
    sync();
    small.addEventListener("change", sync);
    calm.addEventListener("change", sync);
    return () => {
      small.removeEventListener("change", sync);
      calm.removeEventListener("change", sync);
    };
  }, [cfg.query]);

  useEffect(() => {
    const o = outer.current;
    const s = sticky.current;
    const v = viewport.current;
    const t = track.current;
    if (!o || !s || !v || !t) return;
    if (!pinned) {
      o.style.height = "";
      t.style.transform = "";
      return;
    }

    let distance = 0;
    let top = 0;
    // Tall wrapper = the pinned block plus the sideways distance, so scrolling through it drives the row.
    const measure = () => {
      distance = Math.max(0, t.scrollWidth - v.clientWidth);
      top = parseFloat(getComputedStyle(s).top) || 0;
      o.style.height = `${s.offsetHeight + distance}px`;
      update();
    };
    const update = () => {
      if (distance <= 0) return;
      const progress = Math.min(1, Math.max(0, (top - o.getBoundingClientRect().top) / distance));
      t.style.transform = `translate3d(${-progress * distance}px,0,0)`;
    };

    measure();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(t);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
      ro.disconnect();
      o.style.height = "";
      t.style.transform = "";
    };
  }, [pinned]);

  return (
    <div ref={outer}>
      <div ref={sticky} className={`sticky top-[4.5rem] ${cfg.sticky}`}>
        <div
          ref={viewport}
          className={`${cfg.viewport} -my-4 py-4 ${pinned ? "overflow-hidden" : "snap-x snap-mandatory overflow-x-auto scroll-px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"}`}
        >
          <Tag ref={track} className={`flex w-max gap-4 px-6 pb-2 will-change-transform ${cfg.track} ${gridClassName}`}>
            {children}
          </Tag>
        </div>
      </div>
    </div>
  );
}
