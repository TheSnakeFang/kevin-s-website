import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./kevinfangwebsite.webflow.2bfe15bad.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Fang Personal Website",
  description: "a Webflow x Next Amalgamation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
