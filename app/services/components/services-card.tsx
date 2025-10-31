import type React from "react";
import Image from "next/image";
import { Service } from "../page";
import { AnimatedButton } from "@/components/shared/animated-button";

export function ServicesCard({ servicesData }: { servicesData: Service[] }) {
  return (
    <section className="w-full flex flex-col gap-6">
      {servicesData.map((service) => (
        <div
          key={service.id}
          className="flex flex-col lg:flex-row bg-primary/8 rounded-b-lg md:rounded-lg"
        >
          <div className="relative lg:w-1/2 h-64 lg:h-auto">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
              loading="lazy"
            />
            <div className="absolute top-6 right-6 w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center">
              {service.icon}
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 md:mb-8 mt-2 md:mt-4">
                {service.title}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <AnimatedButton label="Get In Touch" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
