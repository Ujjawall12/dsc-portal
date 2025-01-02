import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselCard = ({ image, date, title }) => (
  <div className="flex-none w-[calc(33.33%-16px)] bg-white dark:bg-[#3C3D37] rounded-xl p-4 shadow-lg">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-lg"
    />
    <span className="inline-block px-4 py-1 mt-3 mb-2 text-sm text-gray-600 dark:text-gray-400 bg-custom-gray dark:bg-[#536066] rounded-full">
      {date}
    </span>
    <h2 className="text-lg text-gray-800 dark:text-gray-100 font-medium">{title}</h2>
  </div>
);

const Carousel = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);

  const carouselSets = [
    [
      { image: "/sample-image.jpg", date: "Dec 25, 2024", title: "Latest Robotics Technology" },
      { image: "/sample-image.jpg", date: "Dec 17, 2024", title: "AI Integration Systems" },
      { image: "/sample-image.jpg", date: "Dec 10, 2024", title: "Future of Machine Learning" },
    ],
    [
      { image: "/sample-image.jpg", date: "Dec 5, 2024", title: "Neural Network Advances" },
      { image: "/sample-image.jpg", date: "Dec 1, 2024", title: "Robotic Interface Design" },
      { image: "/sample-image.jpg", date: "Nov 28, 2024", title: "Smart Automation Tools" },
    ],
  ];

  const navigate = useCallback(
    (direction) => {
      setCurrentSet((prev) => {
        const newSet = prev + direction;
        if (newSet < 0) return carouselSets.length - 1;
        if (newSet >= carouselSets.length) return 0;
        return newSet;
      });
    },
    [carouselSets.length]
  );

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      navigate(1);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [navigate]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    stopAutoplay();
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    setOffsetX(currentX - startX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (Math.abs(offsetX) > 50) {
      navigate(offsetX > 0 ? -1 : 1);
    }
    setOffsetX(0);
    startAutoplay();
  };

  const visibleDots = 3; // Number of dots to show at once
  const startDot = Math.max(0, currentSet - Math.floor(visibleDots / 2));
  const endDot = Math.min(carouselSets.length, startDot + visibleDots);

  return (
<<<<<<< HEAD
    <div className="w-full max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-black dark:text-gray-100">Visual Media</h2>
      <div className="max-w-6xl w-full mx-auto p-8 bg-gray-50 dark:bg-[#2D2D2D] rounded-2xl">
        <div
          className="relative overflow-hidden"
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
=======
    <>
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-black dark:text-gray-100">Visual Media</h2>

        <div className="max-w-6xl w-full mx-auto p-8 bg-gray-50 dark:bg-[#2D2D2D] rounded-2xl">
          {/* Carousel */}
>>>>>>> main
          <div
            className="flex gap-x-4 transition-transform duration-300"
            style={{ transform: `translateX(${offsetX}px)` }}
          >
            {carouselSets[currentSet].map((item, index) => (
              <CarouselCard key={`${currentSet}-${index}`} {...item} />
            ))}
          </div>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#3C3D37] p-2 rounded-full shadow-md hover:shadow-lg flex items-center justify-center z-10"
            onClick={() => navigate(-1)}
            aria-label="Previous set"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600 dark:text-blue-300" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#3C3D37] p-2 rounded-full shadow-md hover:shadow-lg flex items-center justify-center z-10"
            onClick={() => navigate(1)}
            aria-label="Next set"
          >
            <ChevronRight className="w-6 h-6 text-blue-600 dark:text-blue-300" />
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {carouselSets.slice(startDot, endDot).map((_, index) => (
              <button
                key={index + startDot}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + startDot === currentSet
                    ? 'bg-blue-600 dark:bg-blue-300 scale-125'
                    : 'bg-gray-300 dark:bg-gray-500'
                }`}
                onClick={() => setCurrentSet(index + startDot)}
                aria-label={`Go to set ${index + startDot + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
