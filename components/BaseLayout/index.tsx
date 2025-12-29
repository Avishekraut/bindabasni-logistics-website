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
  //  routes where navbar/footer/whatsapp should be hidden
  const hiddenRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/change-password",
  ];

  const isHiddenRoute = hiddenRoutes.includes(pathname);

  const showNavbar = !isDashboardRoute && !isHiddenRoute;
  const showFooter = !isDashboardRoute && !isHiddenRoute;
  const showWhatsApp = !isDashboardRoute && !isHiddenRoute;

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
