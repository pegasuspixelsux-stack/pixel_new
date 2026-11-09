// Shared shell for every public page. The gradient background lives here (not in each page), so it stays put
// while visitors navigate between pages. The dashboard and login keep their own layouts outside this group.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className="body_gradient flex flex-1 flex-col">{children}</div>;
}
