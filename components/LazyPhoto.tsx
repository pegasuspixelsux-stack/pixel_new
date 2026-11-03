"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface LazyPhotoProps {
  src: string;
  sizes: string;
  quality?: number;
  /** How far outside the viewport the photo starts loading. */
  margin?: string;
  /** Classes for the image itself. Defaults to filling the card (object-cover). */
  imageClassName?: string;
  /** Position and size of the photo area. Defaults to the whole card (inset-0). */
  wrapperClassName?: string;
}

// Background photo for a card that is not on screen yet. Native loading="lazy" still fetches anything within
// a screen or two of the viewport, which on phones pulls every card photo in ahead of the hero. Mounting the
// image only when the card nears the viewport keeps those bytes out of the initial load.
export default function LazyPhoto({ src, sizes, quality = 50, margin = "200px", imageClassName = "object-cover", wrapperClassName = "inset-0" }: LazyPhotoProps) {
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
    <span ref={ref} aria-hidden className={`absolute -z-20 ${wrapperClassName}`}>
      {near && <Image src={src} alt="" fill sizes={sizes} quality={quality} className={imageClassName} />}
    </span>
  );
}
