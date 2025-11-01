"use client";

import { ReactNode } from "react";
import { Providers } from "@/providers";
import { Toaster } from "sonner";
import Navbar from "../shared/navbar";
import WhatsAppButton from "../shared/whatsapp-button";
import { Footer } from "../shared/footer";

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Providers>
      <Toaster richColors />
      <Navbar />
      <WhatsAppButton />
      {children}
      <Footer />
    </Providers>
  );
}
