import Image from "next/image";

// Hidden on phones (shown from md up). Five phone screenshots filling the full content width, graduated by size: the center one is the biggest, the two
// next to it are smaller, and the two at the ends are the smallest. All keep the screenshots' 402x874 proportions and
// are centered vertically. The widths add up to exactly 100% with no gaps, so the boxes touch. On phones only three show and the list bleeds to the screen edges: the center box is 56% of the screen and each side box is 44%, centered so that half of each side box is cut off by the screen edge.
const mockups = [
  // Phones: only the center and the two beside it show (the sides are cut off by the screen edge); the outer two appear from md up.
  { src: "/ticker_images/phone-1.png", cls: "hidden md:block md:w-[16.5%]", delay: "0.55s" },
  { src: "/ticker_images/phone-2.png", cls: "w-[44%] md:w-[21%]", delay: "0.4s" },
  { src: "/ticker_images/phone-3.png", cls: "w-[56%] md:w-[25%]", delay: "0.25s" },
  { src: "/ticker_images/phone-4.png", cls: "w-[44%] md:w-[21%]", delay: "0.4s" },
  { src: "/ticker_images/phone-5.png", cls: "hidden md:block md:w-[16.5%]", delay: "0.55s" },
];

export default function HeroMockups() {
  return (
    <ul aria-label="Proyectos" className="hidden items-center justify-center md:mx-0 md:-my-5 md:flex md:w-full md:overflow-visible">
      {mockups.map(({ src, cls, delay }, i) => (
        <li key={src} style={{ "--rise-delay": delay } as React.CSSProperties} className={`hero-rise relative aspect-[402/874] shrink-0 overflow-hidden ${cls}`}>
          <Image
            src={src}
            alt=""
            fill
            // Only the center phone is likely to matter for LCP on small screens; the rest can load lazily.
            priority={i === 2}
            sizes="(min-width: 1024px) 300px, 25vw"
            quality={75}
            className="scale-[1.35] object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
