"use client";
import React from "react";

type Props = {
  active: boolean;
  onClick: () => void;
  className?: string;
};

const HamburgerMenuBtn: React.FC<Props> = ({ active, onClick, className }) => {
  return (
    <button
      type="button"
      aria-label={active ? "Close menu" : "Open menu"}
      onClick={onClick}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-gray-100 focus:outline-none ${
        className || ""
      }`}
    >
      <span className="sr-only">{active ? "Close menu" : "Open menu"}</span>
      <span className="block absolute">
        {/* Hamburger to X animation */}
        <svg
          viewBox="0 0 32 32"
          width={28}
          height={28}
          className="transition-transform duration-500"
          style={{
            transform: active ? "rotate(-45deg)" : "rotate(0deg)",
          }}
        >
          <path
            className={`transition-all duration-500 stroke-gray-800`}
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            fill="none"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: active ? "20 300" : "12 63",
              strokeDashoffset: active ? -32.42 : 0,
              transition:
                "stroke-dasharray 600ms cubic-bezier(0.4,0,0.2,1), stroke-dashoffset 600ms cubic-bezier(0.4,0,0.2,1)",
            }}
          />
          <path
            className="transition-all duration-500 stroke-gray-800"
            d="M7 16 27 16"
            fill="none"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default HamburgerMenuBtn;
