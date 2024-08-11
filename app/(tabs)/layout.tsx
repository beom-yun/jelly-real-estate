import TabBar from "./tab-bar";

export default function TabsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="pb-20">
      {children}
      <TabBar />
    </div>
  );
}
