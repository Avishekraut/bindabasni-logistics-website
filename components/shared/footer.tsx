import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-24">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between gap-8">
        {/* Logistic Section */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Bindabasani Logistics"
              width={200}
              height={200}
              className="object-contain"
            />
          </Link>
          <p className="text-gray-400 max-w-lg">
            Bindabasini Logistics, founded in 2011, delivers fast, reliable, and
            innovative logistics solutions backed by 25+ years of expertise.
          </p>
          <div className="text-gray-400 space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-v0-green" />
              <Link href="mailto:bindabasinilogistic@gmail.com">
                bindabasinilogistic@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-v0-green" />
              <Link href="tel:014984326">014984326</Link>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-v0-green" />
              <p>Nayabazaar Balaju, Valley Cold Store Complex</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mt-8 md:mt-0">
          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/terminals"
                  className="hover:text-white transition-colors"
                >
                  Terminals
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Help</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t border-gray-700">
        <div className="flex flex-start text-gray-400 text-sm">
          <p>Copyright © 2025 Bindabasani Logistics</p>
        </div>
      </div>
    </footer>
  );
}
