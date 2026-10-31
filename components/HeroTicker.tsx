import Image from "next/image";

// Same photos as the service cards plus the hero mockups. Swap for real project imagery.
const images = [
  "/hero/app_mockup_1.webp",
  "/hero/catalog_1.webp",
  "/photos/1519389950473-47ba0277781c.webp",
  "/photos/1556761175-5973dc0f32e7.webp",
  "/photos/1504384308090-c894fdcc538d.webp",
  "/photos/1551288049-bebda4e38f71.webp",
  "/photos/1460925895917-afdab827c52f.webp",
  "/photos/1518770660439-4636190af475.webp",
];

function Set({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 gap-4 pr-4 lg:gap-6 lg:pr-6">
      {images.map((src) => (
        <li key={src} className="relative aspect-square w-60 shrink-0 overflow-hidden rounded-2xl border border-fg/15 bg-neutral-900 lg:w-72">
          <Image src={src} alt="" fill sizes="288px" quality={50} className="object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/5 to-transparent" />
        </li>
      ))}
    </ul>
  );
}

export default function HeroTicker() {
  return (
    <div className="ticker -mx-6 overflow-hidden lg:-mx-16" aria-label="Proyectos">
      <div className="ticker-track">
        <Set />
        <Set hidden />
      </div>
    </div>
  );
}
