import { bottomRow, topRow } from "@/config/featured";

// Five boxes in two rows. The grid has 6 columns: the first row is 3 boxes of 2 columns, the second is 2 boxes of 3.
// TEMPORARY: Unsplash placeholder photos (image = Unsplash photo id). Replace with real project imagery.
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=60`;

// Names and descriptions come from the featured projects (config/featured.ts), in the same order as the cards below.
const photos = [
  "1551288049-bebda4e38f71",
  "1497366216548-37526070297c",
  "1531297484001-80022131f5a1",
  "1518770660439-4636190af475",
  "1522071820081-009f0129c71c",
];
const spans = [
  "lg:col-span-2 aspect-square",
  "lg:col-span-2 aspect-square",
  "lg:col-span-2 aspect-square",
  "lg:col-span-3 aspect-square lg:aspect-auto",
  "lg:col-span-3 aspect-square lg:aspect-auto",
];

const boxes = [...topRow, ...bottomRow].map(({ title, description }, i) => ({
  title,
  text: description,
  image: photos[i],
  span: spans[i],
}));

export default function Pillars() {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-fr lg:gap-6">
      {boxes.map(({ title, image, text, span }, i) => (
        <li
          key={title}
          className={`relative isolate flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-black p-6 text-white transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:lit:-translate-y-1 lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)] lg:p-8 ${span}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={unsplash(image)} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <span className="font-mono text-xs text-white/70">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h2 className="font-inter-display text-xl font-medium lg:text-2xl">{title}</h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
