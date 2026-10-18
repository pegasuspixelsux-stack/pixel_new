import Image from "next/image";
import Link from "next/link";
import LazyPhoto from "@/components/LazyPhoto";
import { bottomRow, topRow } from "@/config/featured";

// Five boxes in two rows. The grid has 6 columns: the first row is 3 boxes of 2 columns, the second is 2 boxes of 3.
// Names and descriptions come from the featured projects (config/featured.ts), in the same order as the cards below.
// TEMPORARY placeholder photos, stored locally as WebP in /public/photos. Replace with real project imagery.
const photos = [
  "/photos/1551288049-bebda4e38f71.webp",
  "/photos/1497366216548-37526070297c.webp",
  "/photos/1531297484001-80022131f5a1.webp",
  "/photos/1518770660439-4636190af475.webp",
  "/photos/1522071820081-009f0129c71c.webp",
];
const spans = [
  "lg:col-span-2 aspect-square",
  "lg:col-span-2 aspect-square",
  "lg:col-span-2 aspect-square",
  "lg:col-span-3 aspect-square lg:aspect-auto",
  "lg:col-span-3 aspect-square lg:aspect-auto",
];

const boxes = [...topRow, ...bottomRow].map(({ title, description, href }, i) => ({
  title,
  href,
  text: description,
  image: photos[i],
  span: spans[i],
}));

export default function Pillars() {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-fr lg:gap-6">
      {boxes.map(({ title, href, image, text, span }, i) => (
        <li
          key={title}
          className={`relative isolate flex flex-col justify-between overflow-hidden rounded-2xl border border-fg/15 bg-black p-6 pb-5 text-white transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:lit:-translate-y-1 lit:border-accent/70 lit:shadow-[0_0_35px_var(--accent-glow)] lg:p-8 lg:pb-6 ${span}`}
        >
          {i === 0 ? (
            <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 3rem)" quality={50} className="-z-20 object-cover" />
          ) : (
            <LazyPhoto src={image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 3rem)" />
          )}
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          {/* Soft corner gradient under the number, so it reads on any photo */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_240px_at_0_0,rgba(0,0,0,0.55),transparent)]"
          />
          <span className="font-inter-display text-[8.55vw] relative z-10 leading-none font-medium tracking-[-0.03em] text-white md:text-[min(4.6vw,4.5rem)]">{String(i + 1).padStart(2, "0")}</span>
          <div className="relative z-10">
            <h2 className="font-inter-display text-xl font-medium text-white lg:text-2xl">
              {/* The ::after stretches this link over the whole box, so the box itself is clickable */}
              <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                {title}
              </Link>
            </h2>
            <p className="mt-px max-w-sm text-sm leading-snug text-slate-200">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
