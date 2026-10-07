import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

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
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-canvas text-fg font-sans">
        {children}
      </body>
    </html>
  );
}
