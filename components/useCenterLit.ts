"use client";

import { useEffect, useRef, useState } from "react";

// Touch screens have no hover, so the card glow never shows there. On those devices a card counts as
// "lit" while it sits in the middle band of the viewport. Pointer devices keep the normal hover.
export function useCenterLit<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !window.matchMedia("(hover: none)").matches) return;

    const observer = new IntersectionObserver(([entry]) => setLit(entry.isIntersecting), {
      rootMargin: "-35% 0px -35% 0px",
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, lit] as const;
}
