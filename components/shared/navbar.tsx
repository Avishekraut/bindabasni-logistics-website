"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, LogOut } from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  // Helper function for initials
  const getInitials = (username: string | null | undefined): string => {
    if (!username) return "??";

    const names = username.trim().split(/\s+/);
    if (names.length === 1) return names[0].slice(0, 2).toUpperCase();

    // First letter of first name + first letter of last name
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

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

            <DropdownMenu
              open={dropdownOpen}
              onOpenChange={setDropdownOpen}
              modal={false}
            >
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
            {session ? (
              // Logged-in: Show Avatar Dropdown Avatar
              <div>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-10 w-10 rounded-full p-0"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-white font-medium text-sm">
                          {getInitials(session.user.username)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-62">
                    <div className="flex items-center gap-3 p-4 pb-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-white">
                          {getInitials(session.user.username)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="overflow-hidden">
                        <p className="font-semibold truncate">
                          {session.user.username}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {session.user.email}
                        </p>
                      </div>
                    </div>

                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/change-password" className="cursor-pointer">
                        Change password
                      </Link>
                    </DropdownMenuItem>

                    <hr className="my-2" />

                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive cursor-pointer"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              // Not logged in: Show Login button
              <Button
                className="bg-primary hover:bg-primary/80 px-6 py-2 rounded-full font-medium text-white"
                onClick={() => router.push("/login")}
              >
                LOGIN
                <ArrowRight className="ml-0.5 h-4 w-4" />
              </Button>
            )}
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
            className="w-full fixed z-40 flex flex-col bg-white lg:hidden"
          >
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {session && (
                <div className="border-b pb-1 -mx-6">
                  <Collapsible defaultOpen={false}>
                    <CollapsibleTrigger className="flex items-center gap-4 w-full  px-6 py-2 transition-colors">
                      <Avatar className="h-10 w-10 ring-4 ring-white shadow-md">
                        <AvatarFallback className="bg-primary text-white font-bold text-sm">
                          {getInitials(session.user.username)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left flex-1">
                        <p className="font-bold text-gray-900 text-sm">
                          {session.user.username}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {session.user.email}
                        </p>
                      </div>
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>

                    <CollapsibleContent className="bg-gray-50/70 px-8 border-t border-gray-200">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 text-gray-700 hover:text-primary font-medium py-2.5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/change-password"
                        className="flex items-center gap-3 text-gray-700 hover:text-primary font-medium py-2.5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Change password
                      </Link>
                      <button
                        onClick={() => {
                          signOut({ callbackUrl: "/" });
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-3 text-destructive hover:text-destructive/80 font-medium py-2.5 transition-colors w-full"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              )}

              {/* === Menu Items === */}
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-800 hover:text-primary font-semibold text-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/track-order"
                className="block text-gray-800 hover:text-primary font-semibold text-lg transition-colors uppercase"
                onClick={() => setIsOpen(false)}
              >
                Track Order
              </Link>
              <Link
                href="https://www.ldb.co.in/ldb/containersearch"
                className="block text-gray-800 hover:text-primary font-semibold text-lg transition-colors uppercase"
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Track Container
              </Link>

              {/* === Bottom Buttons === */}
              <div className="pt-6 space-y-4 border-t">
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

                {/* Show Login button only if NOT logged in */}
                {!session && (
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
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
