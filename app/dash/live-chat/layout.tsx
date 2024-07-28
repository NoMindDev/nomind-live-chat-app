import LiveChatNavigation from "@/components/LiveChatNavigation";

export default function LiveChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      <LiveChatNavigation />
      {children}
    </div>
  );
}
