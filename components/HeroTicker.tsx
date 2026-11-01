import Image from "next/image";

// Phone screenshots (402x874) from public/ticker_images. phone-7.png is a duplicate of phone-6.png, so it's skipped.
const images = [1, 2, 3, 4, 5, 6, 8].map((n) => `/ticker_images/phone-${n}.png`);

function Set({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 gap-4 pr-4 lg:gap-6 lg:pr-6">
      {images.map((src) => (
        <li key={src} className="relative aspect-[402/874] h-96 shrink-0 lg:h-[30rem]">
          <Image src={src} alt="" fill sizes="220px" quality={75} className="object-contain" />
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
