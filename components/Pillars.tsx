import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LazyPhoto from "@/components/LazyPhoto";
import { bottomRow, topRow } from "@/config/featured";

// Five boxes in two rows. The grid has 6 columns: the first row is 3 boxes of 2 columns, the second is 2 boxes of 3.
// Names and descriptions come from the featured projects (config/featured.ts), in the same order as the cards below.
// TEMPORARY placeholder photos, stored locally as WebP in /public/photos. Replace with real project imagery.
const photos = [
  "/services_images/dealio_mobile.webp",
  "/ticker_images/phone-4.png",
  "/ticker_images/phone-5.png",
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

// Boxes whose image is a phone mockup on a white background: shown whole on the right, on a white card (the others are full photos).
const mockupBoxes = new Set(["Dealio", "Oikos", "Hermio"]);

// Same visual size for every mockup (the Oikos one). The Dealio screenshot is cropped tighter than the others, so it is scaled down to match.
const mockupClass = "object-contain object-right origin-right scale-[1.15] translate-x-[5%]";
const mockupClassByTitle: Record<string, string> = {
  Dealio: "object-contain object-right origin-right scale-[0.95] -translate-x-[1.5%]",
};

// "Ver más" goes to the product landing when there is one (Dealio, Oikos), otherwise to the project page.
const landings: Record<string, string> = { Dealio: "/dealio", Oikos: "/oikos" };

const boxes = [...topRow, ...bottomRow].map(({ title, description, href }, i) => ({
  title,
  href,
  moreHref: landings[title] ?? href,
  text: description,
  mockup: mockupBoxes.has(title),
  image: photos[i],
  span: spans[i],
}));

export default function Pillars() {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-fr lg:gap-6">
      {boxes.map(({ title, moreHref, image, text, mockup, span }, i) => (
        <li
          key={title}
          className={`relative isolate flex flex-col justify-between overflow-hidden rounded-2xl ${mockup ? "bg-white" : "bg-black"} p-6 pb-5 text-black transition-transform duration-300 ease-out motion-safe:lit:-translate-y-1 lg:p-8 lg:pb-6 ${span}`}
        >
          <LazyPhoto
            src={image}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 3rem)"
            imageClassName={mockup ? (mockupClassByTitle[title] ?? mockupClass) : undefined}
          />
          {/* Photos are shown clean, with no gradient overlays */}
          <span className="font-inter-display text-[8.55vw] relative z-10 leading-none font-medium tracking-[-0.03em] md:text-[min(4.6vw,4.5rem)]">{String(i + 1).padStart(2, "0")}</span>
          <div className="relative z-10 w-[45%]">
            <h2 className="font-inter-display text-xl font-medium lg:text-2xl">
              {/* The ::after stretches this link over the whole box, so the box itself is clickable */}
              <Link href={moreHref} className="after:absolute after:inset-0 after:content-['']">
                {title}
              </Link>
            </h2>
            <p className="mt-px max-w-sm text-sm leading-snug">{text}</p>
            {/* Subtle divider, then the "Ver más" link (sits above the box-wide link) */}
            <hr className="mt-4 border-0 border-t border-black/25" />
            <Link
              href={moreHref}
              className="relative mt-3 inline-flex items-center gap-1.5 text-sm font-medium transition-[gap] duration-200 hover:gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Ver más
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
