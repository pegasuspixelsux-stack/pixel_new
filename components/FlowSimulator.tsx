"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { glass } from "@/components/landing-styles";

export interface FlowSimulatorTab {
  /** Short tab label. */
  label: string;
  /** Heading of the panel. */
  title: string;
  text: string;
  /** "mobile" shows a tall phone-shaped frame, "desktop" a wide screen-shaped one. */
  device: "mobile" | "desktop";
  /** Placeholder caption (also the alt text when `image` is set). */
  placeholder: string;
  /** Optional real screenshot in /public that replaces the placeholder. */
  image?: string;
}

// Accessible tabs (roving tabindex, arrow/Home/End keys). Only the active panel is rendered.
export default function FlowSimulator({ tabs }: { tabs: FlowSimulatorTab[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = tabs[active];
  const mobile = tab.device === "mobile";

  function onKeyDown(e: KeyboardEvent) {
    const last = tabs.length - 1;
    const next = e.key === "ArrowRight" ? (active === last ? 0 : active + 1) : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1) : e.key === "Home" ? 0 : e.key === "End" ? last : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div className="flex flex-col gap-8">
      <div role="tablist" aria-label="Vistas del sistema" onKeyDown={onKeyDown} className="flex flex-col gap-2 sm:flex-row">
        {tabs.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={t.label}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`flow-tab-${i}`}
              aria-selected={on}
              aria-controls="flow-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex flex-1 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                on ? "border-accent bg-accent/10 text-fg" : "border-fg/15 text-fg/60 hover:border-fg/30 hover:text-fg"
              }`}
            >
              <span className={`font-inter-display text-2xl leading-none font-medium ${on ? "text-accent" : ""}`}>{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-medium md:text-base">{t.label}</span>
            </button>
          );
        })}
      </div>

      <div id="flow-panel" role="tabpanel" aria-labelledby={`flow-tab-${active}`} tabIndex={0} className={`grid items-center gap-8 rounded-2xl p-6 lg:grid-cols-2 lg:gap-16 lg:p-10 ${glass}`}>
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-2xl leading-snug lg:text-3xl">{tab.title}</h3>
          <p className="leading-relaxed text-fg/70 md:text-lg">{tab.text}</p>
        </div>
        <div className={`mx-auto w-full ${mobile ? "max-w-[18rem]" : ""}`}>
          {tab.image ? (
            <div className={`relative w-full overflow-hidden rounded-2xl border border-fg/15 ${mobile ? "aspect-[9/16]" : "aspect-[16/10]"}`}>
              <Image src={tab.image} alt={tab.placeholder} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
            </div>
          ) : (
            <ImagePlaceholder label={tab.placeholder} aspect={mobile ? "aspect-[9/16]" : "aspect-[16/10]"} />
          )}
        </div>
      </div>
    </div>
  );
}
