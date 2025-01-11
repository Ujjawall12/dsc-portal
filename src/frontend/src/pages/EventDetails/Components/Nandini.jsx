import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const eventsData = [
    {
      id: 1,
      title: "Summer Music Festival",
      location: "Central Park • New York",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Tech Conference 2025",
      location: "San Francisco Convention Center",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      location: "Chicago Exhibition Hall",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Art & Design Fair",
      location: "Miami Convention Center",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Gaming Expo",
      location: "Seattle Gaming Center",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      title: "Fashion Week",
      location: "Paris Exhibition Hall",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % eventsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));
  };

  const getSlideIndex = (index) => (index + eventsData.length) % eventsData.length;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-8 py-16">
      {/* Heading */}
      <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent pb-2 transition-all duration-500 group-hover:scale-[1.02] font-Exo">
        Events
      </h1>

      {/* Slider Section */}
      <div className="relative flex items-center mt-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full text-white shadow-lg hover:bg-gray-700 transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Main Slider */}
        <div className="w-full overflow-hidden">
          <div className="flex justify-center gap-10">
            {[-1, 0, 1].map((offset) => {
              const index = getSlideIndex(activeIndex + offset);
              const isActive = offset === 0;

              return (
                <div
                  key={eventsData[index].id}
                  className={`relative w-[35%] transition-transform duration-500 ${
                    isActive ? "scale-105 z-10" : "scale-95 opacity-70"
                  }`}
                >
                  <div className="rounded-lg overflow-hidden shadow-lg relative">
                    {/* Image */}
                    <img
                      src={eventsData[index].image}
                      alt={eventsData[index].title}
                      className="w-full h-[450px] object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent p-4">
                      <h2 className="text-white text-xl font-bold">
                        {eventsData[index].title}
                      </h2>
                      <p className="text-white text-sm">
                        {eventsData[index].location}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full text-white shadow-lg hover:bg-gray-700 transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="mt-8 flex justify-center gap-2">
        {eventsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 rounded-full ${
              activeIndex === index
                ? "bg-gray-800"
                : "bg-gray-400 hover:bg-gray-500"
            } transition-all`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default EventsSlider;
