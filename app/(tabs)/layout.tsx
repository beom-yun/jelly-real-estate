import TabBar from "./tab-bar";

export default function TabsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <TabBar />
    </>
  );
}
