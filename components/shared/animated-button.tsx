"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export const AnimatedButton = ({
  label,
  className,
  onClick,
}: AnimatedButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      size="lg"
      className={cn(
        "relative overflow-hidden text-white py-6 px-5 rounded-full font-semibold transition-all duration-300 group hover:border-primary hover:text-primary bg-white",
        className
      )}
    >
      <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>

      <span className="relative text-gray-700 group-hover:text-white z-10 transition-all duration-100">{label}</span>
      <span className="relative z-10 ml-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-300">
        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300" />
        <ArrowRight className="w-4 h-4 text-gray-700 absolute left-[-100%] opacity-0 group-hover:left-1/2 group-hover:translate-x-[-50%] group-hover:opacity-100 transition-all duration-150 delay-150" />
      </span>
    </Button>
  );
};
