// Absolute site URL, shared by the root layout (metadataBase) and pages that build absolute Open Graph image URLs.
// WhatsApp can only resolve absolute https URLs. Set NEXT_PUBLIC_SITE_URL in Vercel (Production) if the site
// moves to its own domain.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://pixelnew.vercel.app").replace(/\/+$/, "");
