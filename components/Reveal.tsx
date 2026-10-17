"use client";

import type { ReactNode } from "react";
import * as m from "motion/react-m";

// Fades a block in and lifts it slightly the first time it scrolls into view.
export default function Reveal({ children }: { children: ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}
