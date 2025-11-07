"use client";

import { ReactNode, useEffect, useState } from "react";
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
  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  useEffect(() => {
    const isDashboardRoute = pathname.startsWith("/dashboard");
    setShowNavbar(!isDashboardRoute);
    setShowFooter(!isDashboardRoute);
    setShowWhatsApp(!isDashboardRoute);
  }, [pathname]);
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
