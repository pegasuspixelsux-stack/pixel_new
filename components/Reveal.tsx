import type { ReactNode } from "react";

// Section entry animation removed: sections now render in place with no fade or lift.
// Kept as a pass-through so the many <Reveal> wrappers across pages keep working.
export default function Reveal({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
