import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Inter Display at weight 500 (opsz 32), cut from the Inter variable font and subset to Latin (~18KB instead of
// 73KB for the full variable file). It is only used for headlines; see .font-inter-display.
const inter = localFont({
  src: "./fonts/InterDisplay-500.woff2",
  variable: "--font-inter",
  weight: "500",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  // Only the logo and a few figures use it, so it is not worth preloading ahead of the hero photo.
  preload: false,
});

// viewport-fit=cover lets env(safe-area-inset-bottom) report the phone's floating browser bar / home indicator.
export const viewport: Viewport = { viewportFit: "cover" };

export const metadata: Metadata = {
  title: "Pegasus Pixels | Socio Tecnológico para la Era Digital",
  description:
    "Infraestructura digital para modernizar y estandarizar tu empresa: catálogo inteligente, captura de leads, automatización de ventas y gestión centralizada.",
};

// Runs before first paint so the saved theme never flashes. Dark is the default; only an explicit "light" choice overrides it.
const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem("pt-theme")==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${instrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-canvas text-fg font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
