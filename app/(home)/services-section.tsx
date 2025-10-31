"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Check,
  ArrowRight,
  Train,
  Truck,
  MapPin,
  Plane,
  Ship,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Rail & Bulk Cargo Handling",
    description:
      "Efficient handling of bulk cargo through rail and road from India, ensuring cost-effective and timely delivery for large-scale goods.",
    image: "/service1.jpg",
    icon: Train,
    features: [
      "Rail and road connectivity from India",
      "Specialized bulk cargo management",
      "Timely and cost-effective delivery",
    ],
  },
  {
    id: 2,
    title: "Road Transportation",
    description:
      "Seamless road freight service via Tatopani and Kerung routes with reliable logistics support for safe and on-time cargo delivery.",
    image: "/service2.jpg",
    icon: Truck,
    features: [
      "Tatopani and Kerung route coverage",
      "Safe and reliable road delivery",
      "Flexible transport options",
    ],
  },
  {
    id: 3,
    title: "Door-to-Door Delivery",
    description:
      "Direct container delivery from ports to warehouses or factories, minimizing hassle with a smooth end-to-end logistics experience.",
    image: "/service3.jpg",
    icon: MapPin,
    features: [
      "From ports to warehouse/factory",
      "End-to-end logistics support",
      "Secure and hassle-free delivery",
    ],
  },
  {
    id: 4,
    title: "Air Cargo Handling",
    description:
      "Fast and reliable air freight services for import and export shipments, designed to handle time-sensitive and high-value cargo securely.",
    image: "/service4.jpg",
    icon: Plane,
    features: [
      "Import and export air shipments",
      "Time-sensitive cargo solutions",
      "Global air freight coverage",
    ],
  },
  {
    id: 5,
    title: "Ocean Freight",
    description:
      "Comprehensive sea freight solutions managed by experts, covering import and export shipments with cost-effective and secure shipping worldwide.",
    image: "/service5.jpg",
    icon: Ship,
    features: [
      "Expert ocean freight handling",
      "Import and export support",
      "Cost-effective global shipping",
    ],
  },
];

export default function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set initial current slide
    setCurrent(api.selectedScrollSnap());

    // Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      clearInterval(autoplay);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="pb-16 px-4 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-primary rounded-full opacity-30"></div>
      <div className="absolute top-32 right-32 w-3 h-3 bg-primary rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-primary rounded-full opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gray-500 text-sm font-medium tracking-wide uppercase mb-2">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2 mt-2 md:mt-4">
            Efficient Logistics Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary">
            for Your Business
          </h3>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service) => (
                <CarouselItem
                  key={service.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-white transition-shadow duration-300 overflow-hidden rounded-lg cursor-pointer">
                    <div className="p-0">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />

                        <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-700 mb-3">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-600 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-primary transition-colors duration-200">
                          <Link href="/services">Read More</Link>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                  index === current
                    ? "bg-primary"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
