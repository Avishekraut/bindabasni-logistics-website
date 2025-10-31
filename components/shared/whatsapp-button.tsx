"use client";
import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "9779820103932";
  const message = encodeURIComponent(
    "Hello! I want to know more about your services."
  );

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-999"
    >
      <div className="relative flex items-center justify-center">
        {/* Ripple ring */}
        <span className="absolute w-12 h-12 rounded-full bg-green-400 opacity-50 animate-ping [animation-duration:2s]"></span>

        <Image
          src="/whatsapp-icon.png"
          alt="WhatsApp Chat"
          width={400}
          height={400}
          className="relative z-10 w-14 h-14 drop-shadow-lg hover:scale-110 transition-transform duration-300"
        />
      </div>
    </Link>
  );
}
