import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import { siteUrl } from "@/config/site-url";

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

const siteTitle = "Pegasus Pixels | Socio Tecnológico para la Era Digital";
const siteDescription =
  "Infraestructura digital para modernizar y estandarizar tu empresa: catálogo inteligente, captura de leads, automatización de ventas y gestión centralizada.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  // Default share card for every page. Pages with their own `openGraph` (e.g. /dealio) replace it.
  // WhatsApp wants a JPG or PNG, 1200x630, ideally under 300KB, served over https.
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Pegasus Pixels",
    url: "/",
    type: "website",
    locale: "es_ES",
    images: [{ url: "/og/default.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Pegasus Pixels: infraestructura digital para empresas modernas" }],
  },
  twitter: { card: "summary_large_image", images: ["/og/default.jpg"] },
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
