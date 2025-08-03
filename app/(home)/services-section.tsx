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

const services = [
  {
    id: 1,
    title: "Rail Freight",
    description:
      "A logistic service provider company plays a pivotal role in the global supply.",
    image: "/service1.jpg",
    icon: Train,
    features: [
      "Quality Control System",
      "Real-Time Tracking",
      "100% True Result Provide",
    ],
  },
  {
    id: 2,
    title: "Road Freight",
    description:
      "A logistic service provider company plays a pivotal role in the global supply.",
    image: "/service2.jpg",
    icon: Truck,
    features: [
      "Quality Control System",
      "Real-Time Tracking",
      "100% True Result Provide",
    ],
  },
  {
    id: 3,
    title: "Local Truck Transport",
    description:
      "A logistic service provider company plays a pivotal role in the global supply.",
    image: "/service3.jpg",
    icon: MapPin,
    features: [
      "Quality Control System",
      "Real-Time Tracking",
      "100% True Result Provide",
    ],
  },
  {
    id: 4,
    title: "Air Freight",
    description:
      "A logistic service provider company plays a pivotal role in the global supply.",
    image: "/service4.jpg",
    icon: Plane,
    features: [
      "Quality Control System",
      "Real-Time Tracking",
      "100% True Result Provide",
    ],
  },
  {
    id: 5,
    title: "Sea Freight",
    description:
      "A logistic service provider company plays a pivotal role in the global supply.",
    image: "/service5.jpg",
    icon: Ship,
    features: [
      "Quality Control System",
      "Real-Time Tracking",
      "100% True Result Provide",
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
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-primary rounded-full opacity-30"></div>
      <div className="absolute top-32 right-32 w-3 h-3 bg-primary rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-primary rounded-full opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Carousel */}
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
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        {/* Orange Icon Circle */}
                        <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-700 mb-3">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features List */}
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

                        {/* Read More Link */}
                        <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-primary transition-colors duration-200">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Indicator */}
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
