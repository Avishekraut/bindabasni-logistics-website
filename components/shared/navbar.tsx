"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HamburgerMenuBtn from "./hamburger-menu-btn";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dropdownOpen || isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [dropdownOpen, isOpen]);

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "TERMINALS", href: "/terminals" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT", href: "/contact" },
  ];

  const textColor = scrolled
    ? "text-gray-800 hover:text-primary"
    : "text-white hover:text-primary";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
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
                className={`font-medium text-sm tracking-wide transition-colors duration-200 ${textColor}`}
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  className={`flex items-center space-x-1 font-medium text-sm tracking-wide transition-colors duration-200 ${textColor} group`}
                >
                  <span>TRACK ORDER</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </DropdownMenuTrigger>

              {/* Dropdown Content */}
              <DropdownMenuContent
                align="end"
                className="w-40 mt-2 p-2"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <DropdownMenuItem asChild>
                  <Link href="/track-order" className="w-full cursor-pointer">
                    Track Order
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="https://www.ldb.co.in/ldb/containersearch"
                    className="w-full cursor-pointer"
                    target="blank"
                  >
                    Track Container
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className={`${
                scrolled
                  ? "text-gray-800 border-gray-300"
                  : "text-white bg-transparent hover:bg-primary hover:text-white hover:border-primary"
              } rounded-full`}
              onClick={() => router.push("/contact")}
            >
              GET A QUOTE
            </Button>
            <Button
              className="bg-primary hover:bg-primary/80 px-6 py-2 rounded-full font-medium text-white"
              onClick={() => router.push("/login")}
            >
              LOGIN
              <ArrowRight className="ml-0.5 h-4 w-4" />
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
              <Link
                href="/track-order"
                className="block text-gray-800 hover:text-primary font-semibold text-lg transition-colors duration-200 uppercase"
                onClick={() => setIsOpen(false)}
              >
                Track Order
              </Link>

              <Link
                href="https://www.ldb.co.in/ldb/containersearch"
                className="block text-gray-800 hover:text-primary font-semibold text-lg transition-colors duration-200 uppercase"
                onClick={() => setIsOpen(false)}
                target="blank"
              >
                Track Container
              </Link>

              <div className="mt-6 space-y-4">
                <Button
                  variant="outline"
                  className="w-full py-6 rounded-full font-semibold uppercase"
                  onClick={() => {
                    router.push("/contact");
                    setIsOpen(false);
                  }}
                >
                  GET A QUOTE
                </Button>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-full font-semibold uppercase"
                  onClick={() => {
                    router.push("/login");
                    setIsOpen(false);
                  }}
                >
                  Login
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
