"use client";

import { motion, type Variants } from "framer-motion";
import { AnimatedButton } from "@/components/shared/animated-button";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-screen w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-32 md:pb-26.5 md:pt-40">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-block mb-8">
            <span className="bg-primary/50 backdrop-blur-sm text-white px-4 py-2 rounded text-xs md:text-sm font-medium">
              Logistics & Supply Chain Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
          >
            Welcome to
            <br />
            Bindabasini Logistics
            <br />
            Services
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base text-white/90 mb-10 leading-relaxed max-w-lg"
          >
            Smart, reliable, seamless logistics delivering success on time,
            every time. At Bindabasini Logistics, we combine expertise,
            innovation, and trusted networks to move cargo securely,
            efficiently, and hassle-free.
          </motion.p>

          <motion.div variants={itemVariants}>
            <AnimatedButton
              label="Get In Touch"
              onClick={() => {
                router.push("/contact");
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
