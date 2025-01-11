import React from "react";
import { Card, CardContent, CardHeader } from "@/components/Projectutils/card";
import {
  Calendar,
  MapPin,
  Clock,
  Globe,
  Tag,
  ChevronRight,
} from "lucide-react";

const EventDetailsDescription = () => {
  const eventInfo = {
    details: {
      title: "Android Study Jams",
      description:
        "Join us for an intensive learning program focused on Android app development using Kotlin. Learn from experts, build real projects, and get hands-on experience with modern Android development.",
      highlights: [
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Date",
          detail: "February 15-28, 2025",
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Time",
          detail: "6:00 PM - 8:00 PM (IST)",
        },
        {
          icon: <MapPin className="w-6 h-6" />,
          title: "Location",
          detail: "Software Lab 3, CSED",
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Mode",
          detail: "Hybrid (In-person & Online)",
        },
      ],
    },
    prerequisites: [
      "Basic programming knowledge",
      "Laptop with Android Studio installed",
      "Google Developer Account",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent pb-2">
              {eventInfo.details.title}
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 rounded-full" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {eventInfo.details.description}
          </p>
        </div>

        {/* Event Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventInfo.details.highlights.map((highlight, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 border-none bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-700 dark:to-gray-600 group-hover:from-blue-200 group-hover:to-blue-100 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-colors duration-300">
                    {React.cloneElement(highlight.icon, {
                      className: "w-8 h-8 text-blue-600 dark:text-blue-400",
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {highlight.detail}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Prerequisites Section */}
        <Card className="border-none bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-gray-900 dark:text-gray-100">
              <Tag className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              Prerequisites
            </h2>
            <div className="space-y-4">
              {eventInfo.prerequisites.map((prereq, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>{prereq}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventDetailsDescription;
