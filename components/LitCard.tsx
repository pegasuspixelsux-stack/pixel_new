"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useCenterLit } from "@/components/useCenterLit";

type LitCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

// Wrapper that sets data-lit while the card sits in the middle of the viewport on touch screens, so the
// `lit:` hover styles (accent border, glow, lift) also show there. Pointer devices keep the normal hover.
export default function LitCard<T extends ElementType = "div">({ as, children, className, ...rest }: LitCardProps<T>) {
  const [ref, lit] = useCenterLit<HTMLElement>();
  const Tag: ElementType = as ?? "div";
  return (
    <Tag ref={ref} data-lit={lit} className={className} {...rest}>
      {children}
    </Tag>
  );
}
