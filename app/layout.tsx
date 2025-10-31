import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";

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
        <Navbar />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
