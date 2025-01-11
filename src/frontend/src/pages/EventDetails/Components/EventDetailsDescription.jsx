import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/Projectutils/card";
import {
  Calendar,
  MapPin,
  Clock,
  Globe,
  Tag,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";


const EventDetailsDescription = () => {
  const [expandedPrereq, setExpandedPrereq] = useState(null);
  const [themeColor, setThemeColor] = useState("light");

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
          color: "from-blue-500/20 to-blue-600/20",
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Time",
          detail: "6:00 PM - 8:00 PM (IST)",
          color: "from-purple-500/20 to-purple-600/20",
        },
        {
          icon: <MapPin className="w-6 h-6" />,
          title: "Location",
          detail: "Software Lab 3, CSED",
          color: "from-pink-500/20 to-pink-600/20",
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Mode",
          detail: "Hybrid (In-person & Online)",
          color: "from-indigo-500/20 to-indigo-600/20",
        },
      ],
    },
    prerequisites: [
      {
        title: "Basic programming knowledge",
        description:
          "Familiarity with any programming language (Java preferred). Understanding of basic programming concepts like variables, loops, functions, and object-oriented programming principles.",
        resources: ["CodeAcademy Java Course", "W3Schools Java Tutorial", "Programming Basics Video Series"],
      },
      {
        title: "Laptop with Android Studio installed",
        description:
          "A computer with minimum 8GB RAM, Intel i5/AMD equivalent processor. Install the latest version of Android Studio (Hedgehog or later) with Android SDK and Android Emulator configured.",
        resources: ["Android Studio Setup Guide", "System Requirements Doc", "Troubleshooting Guide"],
      },
      {
        title: "Google Developer Account",
        description:
          "Active Google account registered as a developer. This is required for publishing apps and accessing certain Android development features and resources.",
        resources: ["Google Developer Console", "Account Setup Tutorial", "Developer Guidelines"],
      },
    ],
  };

  const handlePrereqClick = (index) => {
    setExpandedPrereq(expandedPrereq === index ? null : index);
    // Toggle theme color between light and dark on click
    setThemeColor(themeColor === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950" />
        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-full blur-3xl animate-slow-spin" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        </div>

        {/* Main Content */}
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Hero Section */}
            <div className="relative text-center space-y-8 mb-20">
              <div className="relative inline-block group">
                <div className="relative">
                  <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent pb-2 transition-all duration-500 group-hover:scale-[1.02] font-Exo">
                    {eventInfo.details.title}
                  </h1>
                  <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full transform origin-left transition-all duration-500 group-hover:scale-x-105" />
                </div>
              </div>
              <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                {eventInfo.details.description}
              </p>
            </div>

            {/* Event Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {eventInfo.details.highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="group relative cursor-pointer overflow-hidden border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm transition-all duration-500 hover:scale-105"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.color} dark:opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-slate-900/50 backdrop-blur-sm" />
                  <CardContent className="relative p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-100 to-white dark:from-slate-800 dark:to-slate-900 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-1">
                        {React.cloneElement(highlight.icon, {
                          className:
                            "w-8 h-8 text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                        })}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-200">
                        {highlight.detail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Prerequisites Section */}
            <Card className="relative overflow-hidden border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm mb-12">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/5 dark:to-purple-500/5" />
  <CardContent className="relative p-8">
    <h2 className="text-2xl font-semibold flex items-center gap-3 mb-8 text-gray-900 dark:text-gray-100">
      <Tag className="w-7 h-7 text-blue-600 dark:text-blue-400" />
      Prerequisites
    </h2>
    <div className="grid gap-4">
      {eventInfo.prerequisites.map((prereq, index) => (
        <div key={index} className="group relative cursor-pointer">
          <div
            onClick={() => handlePrereqClick(index)}
            className={`flex items-center justify-between p-4 rounded-xl bg-gray-50/80 dark:bg-slate-800/50 hover:bg-gradient-to-r transition-all duration-300 shadow-sm hover:shadow-md ${
              index === 0
                ? "hover:from-blue-400/20 hover:to-blue-600/20 dark:hover:from-blue-400/20 dark:hover:to-blue-600/20"
                : index === 1
                ? "hover:from-green-500/20 hover:to-green-700/20 dark:hover:from-green-500/20 dark:hover:to-green-700/20"
                : index === 2
                ? "hover:from-purple-500/20 hover:to-purple-700/20 dark:hover:from-purple-500/20 dark:hover:to-purple-700/20"
                : ""
            }`}
          >
            <div className="flex items-center space-x-4">
              <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 transform transition-transform duration-300 group-hover:translate-x-1" />
              <span className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {prereq.title}
              </span>
            </div>
            {expandedPrereq === index ? (
              <Minus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            ) : (
              <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            )}
          </div>
          {expandedPrereq === index && (
            <div
              className={`mt-2 p-4 bg-${themeColor === "light" ? "white/80" : "slate-800/80"} dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-inner`}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {prereq.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Helpful Resources:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {prereq.resources.map((resource, idx) => (
                    <li
                      key={idx}
                      className={`text-blue-600 dark:text-blue-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors duration-200 ${
                        index === 0
                          ? "hover:text-blue-600 dark:hover:text-blue-400"
                          : index === 1
                          ? "hover:text-teal-600 dark:hover:text-teal-400"
                          : index === 2
                          ? "hover:text-purple-600 dark:hover:text-purple-400"
                          : ""
                      }`}
                    >
                      {resource}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </CardContent>
</Card>


            {/* Footer */}
            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full hover:shadow-lg"
              >
                <span className="text-lg">View Full Schedule</span>
                <ExternalLink className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailsDescription;
