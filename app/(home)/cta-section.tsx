import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/shared/animated-button";

export default function CtaSection() {
  return (
    <section className="flex justify-center px-4 md:px-38 bg-gray-50 py-6 md:py-12">
      <div className="bg-primary/5 rounded-xl overflow-hidden w-full flex flex-col md:flex-row items-center px-8 md:px-12 py-6 md:py-6">
        <div className="flex-1 space-y-6 text-center md:text-left md:pr-8 lg:pr-12 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
            Ready to Revolutionize Your Logistics Operations?
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Join countless other businesses that have streamlined their
            logistics with our cutting-edge solutions
          </p>
          <AnimatedButton label="Get A Free Quote" />
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/red-truck.png"
            alt=" delivery truck"
            width={500}
            height={300}
            className="object-contain w-[480px] h-74 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
