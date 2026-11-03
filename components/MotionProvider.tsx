"use client";

import { LazyMotion, MotionConfig } from "motion/react";

// Loads Motion's animation features in a separate chunk so they stay off the critical path.
const loadFeatures = () => import("./motionFeatures").then((mod) => mod.default);

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {/* "user": visitors who prefer reduced motion get no slide or scale, only fades (applies to every Motion animation on the site). */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
