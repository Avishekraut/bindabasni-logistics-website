"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryPhoto {
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  photos: GalleryPhoto[];
  title?: string;
}

export default function ImageGallery({
  photos,
  title = "Image Gallery",
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? photos.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === photos.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <section className="py-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-18">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-balance">
            {title}
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-3"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-sm font-medium">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full max-h-[80vh] max-w-4xl flex items-center justify-center">
              <Image
                src={photos[selectedIndex].src || "/placeholder.svg"}
                alt={photos[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              {selectedIndex + 1} / {photos.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
