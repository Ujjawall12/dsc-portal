import React, { useState } from "react";
import { Linkedin, Github } from "lucide-react";

const ProfileCard = ({ image, name, position, category, year }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-neutral-700 transition-all duration-500 ${
        isHovered ? "hover:shadow-2xl hover:scale-[1.02]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Profile Image with Hover Animation */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        />
      </div>

      {/* Profile Details */}
      <div className="p-6 text-center relative">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-300">
          {name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-6">
          {position} | {category} | {year} Year
        </p>

        {/* Social Links */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 transition duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>

        {/* Animated Bottom Line */}
        <div
          className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 ${
            isHovered ? "scale-x-100" : "scale-x-0"
          } transition-transform duration-500 origin-left`}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
