"use client";

import { LazyMotion } from "motion/react";

// Loads Motion's animation features in a separate chunk so they stay off the critical path.
const loadFeatures = () => import("./motionFeatures").then((mod) => mod.default);

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
