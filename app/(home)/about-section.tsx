"use client";

import Image from "next/image";
import { Ship, Globe, Clock, Shield } from "lucide-react";
import { AnimatedButton } from "@/components/shared/animated-button";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const highlights = [
    {
      icon: Ship,
      text: "25 years of expertise in transportation & customs clearance",
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

  const router = useRouter();

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
                Have a Wide Range of Smart
                <p className="text-primary">Solutions for Business</p>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Bindabasini Logistics was founded on June 20, 2011, by Mr.
                Madhav Prasad Baral and is backed by over 25 years of experience
                in transportation management and customs clearance. From the
                outset, we have been dedicated to making logistics simpler,
                faster, and more reliable for businesses of all sizes. With our
                own fleet of trailers and a dedicated team, we make sure that
                goods are moved smoothly and on time.
              </p>
              <p>
                Our mission is to bring innovation, reliability, and energy to
                logistics while helping businesses grow. At Bindabasini
                Logistics, we combine trusted carrier networks with smart,
                cost-saving insights so clients can focus on their core
                business. We believe success is a shared journey built on trust,
                transparency, and respect. Every delivery is more than reaching
                a destination; it&apos;s about driving our customers&apos;
                success forward.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-y-6 mt-8 md:mt-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-yellow-600" />
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
              <AnimatedButton
                label="Who We Are"
                onClick={() => router.push("/about")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
