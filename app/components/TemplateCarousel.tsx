"use client";
import { motion, useMotionValue, PanInfo } from "framer-motion";
import { useState } from "react";

const templates = [
  { id: 1, name: "Minimalist", image: "/img/resume1.png" },
  { id: 2, name: "Executive", image: "/img/resume1.png" },
  { id: 3, name: "Creative", image: "/img/resume1.png" },
  { id: 4, name: "Tech", image: "/img/resume1.png" },
  { id: 5, name: "Modern", image: "/img/resume1.png" },
  { id: 6, name: "ATS Optimized", image: "/img/resume1.png" },
];

export function TemplatesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const x = useMotionValue(0);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold) {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    } else if (info.offset.x < -swipeThreshold) {
      setCurrentIndex(prev => Math.min(prev + 1, templates.length - 1));
    }
  };

  const goToPrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const goToNext = () => setCurrentIndex(prev => Math.min(prev + 1, templates.length - 1));

  return (
    <div className="relative w-full h-[550px] mx-auto overflow-visible">
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-gray-800/80 rounded-full hover:bg-gray-700 transition-colors"
        disabled={currentIndex === 0}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-gray-800/80 rounded-full hover:bg-gray-700 transition-colors"
        disabled={currentIndex === templates.length - 1}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {templates.map((template, index) => {
          const position = index - currentIndex;
          const isActive = position === 0;
          const isVisible = Math.abs(position) <= 1; // Only show 3 cards
          
          if (!isVisible) return null;

          return (
            <motion.div
              key={template.id}
              className={`absolute w-[400px] h-[500px] bg-white border-2 ${
                isActive ? "border-indigo-400 z-10" : "border-gray-200 z-0"
              } rounded-lg shadow-lg overflow-hidden`}
              style={{
                x: position * 300, // Adjusted spacing
                scale: isActive ? 1.06 : 0.9, // Center card is larger
                opacity: isActive ? 1 : 0.8,
                y: isActive ? 0 : 30, // Active card lifts up
                rotate: !isActive ? (position > 0 ? "5deg" : "-5deg") : "0deg", // Tilt side cards
              }}
              animate={{
                x: position * 300,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
            >
              {/* Template Name (Subtle) */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs font-medium bg-gray-900/80 text-white px-2 py-1 rounded-md backdrop-blur-sm">
                  {template.name}
                </span>
              </div>
              
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-full object-contain bg-white p-4"
              />
              
              {/* Centered CTA Button */}
              {isActive && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 bg-indigo-600 text-white rounded-md shadow-lg flex items-center gap-2"
                  >
                    <span>Use This Template</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-8">
        {templates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-indigo-400 w-6" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}