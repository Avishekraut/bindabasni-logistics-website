"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26.5">
        <div className="max-w-2xl">
          <div className="inline-block mb-8">
            <span className="bg-gray-800/40 backdrop-blur-sm text-white px-4 py-2 rounded text-sm font-medium">
              Logistics & Supply Chain Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            Welcome to
            <br />
            Delhivery Shipping
            <br />
            Services
          </h1>

          {/* Description */}
          <p className="text-base text-white/90 mb-10 leading-relaxed max-w-lg">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.
          </p>

          {/* CTA Button */}
          {/* <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-200"
          >
            Read More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
          {/* <Button
            variant="outline"
            size="lg"
            className="group border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-6 px-5 rounded-full font-semibold transition-all duration-200 bg-white"
          >
            Get In Touch
            <div className="ml-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Button> */}
          <AnimatedButton label="Get In Touch" />
        </div>
      </div>
    </section>
  );
}
