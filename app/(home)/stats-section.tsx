"use client";

import { useEffect, useState } from "react";
import { SlidingNumber } from "@/components/ui/sliding-number";

interface StatItemProps {
  targetValue: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function StatItem({
  targetValue,
  suffix = "",
  label,
  duration = 2000,
}: StatItemProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const newValue = Math.floor(
        startValue + (targetValue - startValue) * easeOutQuart
      );

      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Start animation after a brief delay
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);

    return () => clearTimeout(timer);
  }, [targetValue, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
        <div className="flex items-center justify-center">
          <SlidingNumber value={currentValue} />
          {suffix && <span>{suffix}</span>}
        </div>
      </div>
      <p className="text-sm md:text-base text-gray-600 font-medium">{label}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <div className="w-full py-8 md:py-12 bg-gray-50">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 md:px-16">
        <StatItem
          targetValue={10}
          suffix="K+"
          label="Deliveries Managed"
          duration={2500}
        />
        <StatItem
          targetValue={50}
          suffix="+"
          label="Active Clients"
          duration={2200}
        />
        <StatItem
          targetValue={98}
          suffix="%"
          label="On-Time Delivery Rate"
          duration={1800}
        />
        <StatItem
          targetValue={40}
          suffix="+"
          label="Industry Awards"
          duration={2000}
        />
      </div>
    </div>
  );
}
