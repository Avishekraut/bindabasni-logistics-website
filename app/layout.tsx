import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import BaseLayout from "@/components/BaseLayout";

const outfit = Outfit({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bindasani Logistics",
  description: "Bindasani Logistics Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
