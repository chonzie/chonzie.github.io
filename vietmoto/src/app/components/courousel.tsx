'use client';

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type CarouselProps = {
  day: number;
  listImages: string[];
  distance: string;
  route: string;
  map: string;
  blip: string;
};

export default function Courousel({ 
  day, 
  listImages = [], 
  distance, 
  route, 
  map, 
  blip 
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const validImages = Array.isArray(listImages) ? listImages.filter(Boolean) : [];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  }, [validImages.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  }, [validImages.length]);

  // Auto-scroll effect
  useEffect(() => {
    if (validImages.length <= 1 || isPaused) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [validImages.length, isPaused, goToNext]);
  
  if (validImages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg">
        <p className="text-gray-500 text-lg mb-4">No images available for Day {day}</p>
        <div className="text-sm text-gray-600">
          <p>Route: {route}</p>
          <p>Distance: {distance}</p>
        </div>
      </div>
    );
  }

  const currentImage = validImages[currentIndex % validImages.length];
  
  return (
    <div 
      className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Image Display */}
      <div className="relative aspect-video bg-gray-200">
        {currentImage && (
          <Image
            src={currentImage.startsWith('/') ? currentImage : `/${currentImage}`}
            alt={`Day ${day} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        )}
        
        {/* Navigation Arrows */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}
      </div>
      
      {/* Info Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">Day {day}: {route}</h3>
        <p className="text-gray-600 text-sm">Distance: {distance}</p>
        <p className="text-gray-700 mt-2">{blip}</p>
        
        {/* Dots Navigation */}
        {validImages.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {validImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex % validImages.length
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

