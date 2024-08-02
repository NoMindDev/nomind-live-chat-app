import DashNavigation from "@/components/DashNavigation";
import DashHeader from "@/components/DashHeader";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}

// Original Layout => There is a styling in here which is disturbing the layout of the chat inbox
{/* <div className="min-h-screen flex">
  <DashNavigation />
  <div className="flex-1 ml-1">
    <DashHeader/>
    {children}
  </div>
</div> */}