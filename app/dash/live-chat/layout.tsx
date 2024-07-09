export default function LiveChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Live Chat Navigation</h1>
      {children}
    </div>
  );
}
