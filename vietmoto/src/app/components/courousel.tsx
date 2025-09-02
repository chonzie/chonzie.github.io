'use client'

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import DayInfo from "./DayInfo";

export default function Courousel({ day, listImages, distance, route, map, blip }: { day: number; listImages: string[]; distance: string, route: string; map: string;blip: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);
  }, [isTransitioning]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || listImages.length <= 1) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        const nextIndex = (currentIndex + 1) % listImages.length;
        handleTransition(nextIndex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, listImages.length, currentIndex, isTransitioning, handleTransition]);

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % listImages.length;
    handleTransition(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? listImages.length - 1 : currentIndex - 1;
    handleTransition(prevIndex);
  };

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      handleTransition(index);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (listImages.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 w-full bg-gray-100 rounded-lg">
        <p className="text-gray-500 text-lg">No images available for Day {day}</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray grid grid-rows-[1fr_auto] min-h-[80vh]">
      {/* Main Content Grid Area */}
      <div className="grid grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-0 h-full min-h-[70vh]">
        
        {/* Left Panel - Information */}
        <DayInfo 
          day={day}
          distance={distance}
          route={route}
          map={map}
          blip={blip}
        />

        {/* Right Panel - Image */}
        <div className="relative bg-gray-900">
          <Image
            src={listImages[currentIndex]}
            alt={`Day ${day} - Image ${currentIndex + 1}`}
            fill
            className={`object-cover transition-opacity duration-650 ease-in-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.2, 0, 0.3, .9)'
            }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 75vw"
          />
          
          {/* Navigation Arrows */}
          {listImages.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Next image"
              >
                →
              </button>
            </>
          )}
        </div>
      </div>

      {/* Bottom Controls Grid Area */}
      <div className="bg-black p-3 sm:p-4">
        {listImages.length > 1 && (
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            {/* Auto-play toggle */}
            <button
              onClick={toggleAutoPlay}
              className="text-white/70 hover:text-white text-sm transition-colors"
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlaying ? "⏸️" : "▶️"}
            </button>
            
            {/* Dot Navigation */}
            <div className="flex justify-center space-x-2">
              {listImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Image counter */}
            <div className="text-white/70 text-sm">
              {currentIndex + 1} / {listImages.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

