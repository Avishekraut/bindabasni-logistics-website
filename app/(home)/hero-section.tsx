"use client";

import Image from "next/image";
import { AnimatedButton } from "@/components/shared/animated-button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-section-bg.png"
          alt="Cargo ship with containers on ocean"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-32 md:pb-29 md:pt-39">
        <div className="max-w-2xl">
          <div className="inline-block mb-8">
            <span className="bg-primary/30 backdrop-blur-sm text-white px-4 py-2 rounded text-xs md:text-sm font-medium">
              Logistics & Supply Chain Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            Welcome to
            <br />
            Delivery Shipping
            <br />
            Services
          </h1>

          {/* Description */}
          <p className="text-base text-white/90 mb-10 leading-relaxed max-w-lg">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.
          </p>
          <AnimatedButton label="Get In Touch" />
        </div>
      </div>
    </section>
  );
}
