"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface LazyPhotoProps {
  src: string;
  sizes: string;
  quality?: number;
  /** How far outside the viewport the photo starts loading. */
  margin?: string;
}

// Background photo for a card that is not on screen yet. Native loading="lazy" still fetches anything within
// a screen or two of the viewport, which on phones pulls every card photo in ahead of the hero. Mounting the
// image only when the card nears the viewport keeps those bytes out of the initial load.
export default function LazyPhoto({ src, sizes, quality = 50, margin = "200px" }: LazyPhotoProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [margin]);

  return (
    <span ref={ref} aria-hidden className="absolute inset-0 -z-20">
      {near && <Image src={src} alt="" fill sizes={sizes} quality={quality} className="object-cover" />}
    </span>
  );
}
