"use client";

import Image from "next/image";
import { ArrowRight, Ship, Globe, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/shared/animated-button";

export default function AboutSection() {
  const highlights = [
    {
      icon: Ship,
      text: "Global shipping network with 200+ ports worldwide",
    },
    {
      icon: Clock,
      text: "24/7 real-time tracking and customer support",
    },
    {
      icon: Shield,
      text: "Secure and insured cargo handling",
    },
    {
      icon: Globe,
      text: "Sustainable logistics solutions",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-us.jpg"
                alt="Aerial view of container ship with colorful cargo containers"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-8">
            <div>
              <span className="text-gray-500 text-sm font-medium tracking-wide uppercase">
                About Us
              </span>
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight md:mt-2">
                Have a Wide Range of Smart Solutions for Business
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                With over two decades of experience in global logistics, we
                provide comprehensive shipping and supply chain solutions that
                connect businesses worldwide. Our advanced technology and
                extensive network ensure your cargo reaches its destination
                safely and on time.
              </p>
              <p>
                From small packages to oversized cargo, we handle every shipment
                with precision and care. Our commitment to excellence has made
                us a trusted partner for thousands of businesses across the
                globe.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-y-6 mt-8 md:mt-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              {/* <Button
                variant="outline"
                size="lg"
                className="group border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-6 px-5 rounded-full font-semibold transition-all duration-200 bg-transparent"
              >
                Who We Are
                <div className="ml-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Button> */}
              <AnimatedButton label="Who We Are" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
