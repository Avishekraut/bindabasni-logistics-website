"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HamburgerMenuBtn from "./hamburger-menu-btn";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "TERMINALS", href: "/terminals" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-black/8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Bindabasani Logistics"
              width={200}
              height={200}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium text-sm tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-800 hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary/80 px-6 py-2 rounded-full font-medium text-white">
              GET A QUOTE
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <HamburgerMenuBtn
              active={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed w-full z-40 flex flex-col bg-white lg:hidden"
          >
            <div className="flex-1 px-6 py-8 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-800 hover:text-primary font-semibold text-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-full font-semibold mt-6"
                onClick={() => setIsOpen(false)}
              >
                GET A QUOTE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
