import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DeliverablesShowcase from "@/components/services/menu-engineering/DeliverablesShowcase";
import MenuEngineeringHero from "@/components/services/menu-engineering/MenuEngineeringHero";
import MenuPricingCard from "@/components/services/menu-engineering/MenuPricingCard";
import MenuProcessWorkflow from "@/components/services/menu-engineering/MenuProcessWorkflow";
import MenuValueProps from "@/components/services/menu-engineering/MenuValueProps";

export const metadata: Metadata = {
  title: "Ingeniería de Menú y Rentabilidad | Pegasus Pixels",
  description:
    "Auditoría de margen gastronómico para restaurantes y food trucks: costos de insumos, estandarización de porciones y precios optimizados, sin instalaciones en tu local.",
};

// Same layout language as the other service pages: theme-aware, accent glow hero, glass cards. The accent is
// emerald here (growth / margin).
export default function MenuEngineeringPage() {
  return (
    <>
      <Navbar />
      <main className="accent-emerald relative flex w-full flex-1 flex-col overflow-x-clip">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_at_50%_0%,var(--accent-glow),transparent_65%)]"
        />
        <MenuEngineeringHero />
        <MenuValueProps />
        <MenuProcessWorkflow />
        <DeliverablesShowcase />
        <MenuPricingCard />
      </main>
      <Footer />
    </>
  );
}
