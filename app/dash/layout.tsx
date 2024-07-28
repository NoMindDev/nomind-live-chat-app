import DashNavigation from "@/components/DashNavigation";
import DashHeader from "@/components/DashHeader";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      <DashNavigation />
      <div className=" bg-black flex-1">
        <DashHeader/>
        {children}
      </div>
    </div>
  );
}
