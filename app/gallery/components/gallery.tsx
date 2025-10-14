"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/terminal-birgunj8.JPG",
    alt: "Gallery",
  },
  {
    id: 2,
    src: "/gallery/about_1.jpg",
    alt: "Gallery",
  },
  {
    id: 3,
    src: "/gallery/birgunj1.JPG",
    alt: "Company headquarters building",
  },
  {
    id: 4,
    src: "/gallery/terminal-birgunj2.JPG",
    alt: "Gallery",
  },
  {
    id: 5,
    src: "/gallery/terminal-birgunj3.JPG",
    alt: "Gallery",
  },
  {
    id: 6,
    src: "/gallery/terminal-birgunj4.JPG",
    alt: "Gallery",
  },
  {
    id: 7,
    src: "/gallery/terminal-birgunj6.JPG",
    alt: "Gallery",
  },
  {
    id: 8,
    src: "/terminal-birgunj.JPG",
    alt: "Gallery",
  },
  {
    id: 9,
    src: "/gallery/gallery2.JPG",
    alt: "Gallery ",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openImage = (imageId: number) => {
    setSelectedImage(imageId);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage
    );
    const previousIndex =
      currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    setSelectedImage(galleryImages[previousIndex].id);
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage
    );
    const nextIndex =
      currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(galleryImages[nextIndex].id);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowLeft":
        goToPrevious();
        break;
      case "ArrowRight":
        goToNext();
        break;
      case "Escape":
        closeImage();
        break;
    }
  };

  // Add keyboard event listener (client-side only)
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const currentImage = selectedImage
    ? galleryImages.find((img) => img.id === selectedImage)
    : null;

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => openImage(image.id)}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px] border-none bg-white">
          {currentImage && (
            <div className="relative w-full h-full flex items-center justify-center bg-white">
              {/* Previous Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-600 hover:bg-gray-100"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              {/* Next Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-600 hover:bg-gray-100"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center p-16">
                <div className="relative max-w-full max-h-full">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-full object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-4 right-4 text-center">
                <p className="text-gray-600 text-sm">
                  {galleryImages.findIndex((img) => img.id === selectedImage) +
                    1}{" "}
                  of {galleryImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
