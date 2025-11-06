"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TerminalSection() {
  const router = useRouter();
  const cards = [
    {
      image: "/service1.jpg",
      alt: "ANNAPURNA TERMINALS PVT.LTD",
      title: <>ANNAPURNA TERMINALS PVT.LTD</>,
      route: "/terminals/annapurna-terminals-pvt-ltd",
    },
    {
      image: "/terminal-birgunj.JPG",
      alt: "Terminal Birgunj",
      title: <>TRS HIMALAYAN LOGIPARK PVT.LTD</>,
      route: "/terminals/trs-himalayan-logipark-pvt-ltd",
    },
    {
      image: "/service3.jpg",
      alt: "Global logistics offers",
      title: <>PRISTINE VALLEY DRYPORT PVT.LTD.</>,
      route: "/terminals/pristine-valley-dryport-pvt-ltd",
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-gray-500 text-sm font-medium tracking-wide uppercase mb-2">
            Our Terminals
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2 mt-2 md:mt-4">
            Our Locations
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary">
            Your Logistics Solutions
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-3xl h-60 md:h-72 group cursor-pointer}`}
            >
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-black/40`}></div>
              </div>
              <div className="relative h-full p-6 md:px-8 md:py-6 flex flex-col justify-end text-white">
                <div>
                  <h3 className="text-xl font-bold mb-1 md:mb-2 leading-tight">
                    {card.title}
                  </h3>
                </div>
                <div>
                  <Button
                    variant="link"
                    className="text-white hover:text-white p-0 m-0 font-semibold group/btn -ml-3 flex items-center justify-center"
                    onClick={() => {
                      router.push(`${card.route}`);
                    }}
                  >
                    Discover
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1 mt-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
