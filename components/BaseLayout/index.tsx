"use client";

import { ReactNode } from "react";
import { Providers } from "@/providers";
import { Toaster } from "sonner";
import Navbar from "../shared/navbar";
import WhatsAppButton from "../shared/whatsapp-button";
import { Footer } from "../shared/footer";
import { usePathname } from "next/navigation";

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  const pathname = usePathname();

  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isAuthRoute = pathname === "/login" || pathname === "/signup";

  const showNavbar = !isDashboardRoute && !isAuthRoute;
  const showFooter = !isDashboardRoute;
  const showWhatsApp = !isDashboardRoute;

  return (
    <Providers>
      <Toaster richColors />
      {showNavbar && <Navbar />}
      {showWhatsApp && <WhatsAppButton />}
      {children}
      {showFooter && <Footer />}
    </Providers>
  );
}
