import DashboardSidebar from "@/components/dashboard-sidebar";
import DashboardTopbar from "@/components/DashboardTopbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-light flex min-h-screen w-full bg-canvas font-sans text-fg">
      <DashboardSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar />
        <main className="flex min-w-0 flex-1 flex-col gap-12 px-6 pt-10 pb-[max(3rem,env(safe-area-inset-bottom))] lg:px-12 lg:pt-14">{children}</main>
      </div>
    </div>
  );
}
