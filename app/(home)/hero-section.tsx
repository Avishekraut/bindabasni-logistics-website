// "use client";

// import Image from "next/image";
// import { AnimatedButton } from "@/components/shared/animated-button";

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/hero-section-bg.png"
//           alt="Cargo ship with containers on ocean"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       {/* Content Overlay */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-32 md:pb-29 md:pt-39">
//         <div className="max-w-2xl">
//           <div className="inline-block mb-8">
//             <span className="bg-primary/30 backdrop-blur-sm text-white px-4 py-2 rounded text-xs md:text-sm font-medium">
//               Logistics & Supply Chain Solutions
//             </span>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
//             Welcome to
//             <br />
//             Delivery Shipping
//             <br />
//             Services
//           </h1>

//           {/* Description */}
//           <p className="text-base text-white/90 mb-10 leading-relaxed max-w-lg">
//             In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
//             in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
//             finibus, enim diam interdum nulla, sed laoreet risus lectus.
//           </p>
//           <AnimatedButton label="Get In Touch" />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { AnimatedButton } from "@/components/shared/animated-button";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  {
    src: "/hero-section-bg.png",
    alt: "Cargo ship loaded with containers sailing at sunrise",
  },
  {
    src: "/hero-section-bg2.jpg",
    alt: "Shipping port cranes moving containers during blue hour",
  },
  {
    src: "/hero-section-bg3.png",
    alt: "Forklift loading pallets in a logistics warehouse",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, x: 16 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 5000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section className="relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <div className="h-screen w-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, i) => (
              <div key={i} className="relative h-full min-w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
                {/* Subtle dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-32 md:pt-40 md:pb-36">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial="hidden"
            animate="show"
            exit={{
              opacity: 0,
              x: -16,
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
            variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-block mb-8">
              <span className="bg-primary/50 backdrop-blur-sm text-white px-4 py-2 rounded text-xs md:text-sm font-medium">
                Logistics & Supply Chain Solutions
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
            >
              Welcome to
              <br />
              Delivery Shipping
              <br />
              Services
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base text-white/90 mb-10 leading-relaxed max-w-lg"
            >
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl
              id dapibus finibus, enim diam interdum nulla, sed laoreet risus
              lectus.
            </motion.p>

            <motion.div variants={itemVariants}>
              <AnimatedButton label="Get In Touch" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-10 md:bottom-16 z-10 flex items-center justify-center">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full  px-3 py-2 backdrop-blur-sm">
          {slides.map((_, i) => {
            const isActive = i === selectedIndex;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={isActive ? "true" : "false"}
                onClick={() => scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
                  isActive ? "bg-white w-5" : "bg-white/60 hover:bg-white/80"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
