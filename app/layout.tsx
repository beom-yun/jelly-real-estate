import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Real Jelly",
    default: "Real Jelly",
  },
  description: "Sell and buy all the things!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body
        className={`${inter.className} mx-auto max-w-screen-md`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
