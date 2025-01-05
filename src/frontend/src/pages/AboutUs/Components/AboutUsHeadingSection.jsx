import { useEffect, useState } from "react";
import { headerCards } from "../Data/PageData";
import { ChevronRight } from "lucide-react";

export default function AboutUsHeadingSection() {
      const [activeSection, setActiveSection] = useState("");
      const [showAbout, setShowAbout] = useState(false);
      const [currentWordIndex, setCurrentWordIndex] = useState(0);
    
      const words = ["Innovate", "Create", "Transform", "Build", "Inspire"];
      const colors = [
        "text-blue-600",
        "text-green-500",
        "text-purple-500",
        "text-red-500",
        "text-yellow-500",
      ];
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
    
        const handleScroll = () => {
          const sections = ["stats", "domains", "contact", "faq"];
          const current = sections.find((section) => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 150 && rect.bottom >= 150;
            }
            return false;
          });
          setActiveSection(current || "");
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
          clearInterval(interval);
        };
      }, []);
    
    return (
        <section
        id="about"
        className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>

          {/* Main Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Main Heading */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="relative">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    <span className="block mb-2 relative">
                      <span
                        className={`transition-colors duration-500 ${colors[currentWordIndex]}`}
                      >
                        {words[currentWordIndex]}.
                      </span>
                      <span className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-blue-600 to-green-500 rounded-full animate-pulse" />
                    </span>
                  </h1>
                </div>
                <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed relative">
                  Welcome to{" "}
                  <span className="relative inline-block group">
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                      GDSC NIT Hamirpur
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </span>
                  , where we turn ambitious ideas into reality.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {["Development", "Innovation", "Community", "Growth"].map(
                  (tag, index) => (
                    <span
                      key={tag}
                      className={`px-4 py-2 rounded-full text-sm font-semibold 
                    ${
                      index === 0
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : index === 1
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : index === 2
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }
                    transform hover:scale-110 transition-transform duration-300`}
                    >
                      #{tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {headerCards.map((feature, index) => (
                <div
                  key={index}
                  className="relative group p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative z-10">
                    <div className="text-white p-3 rounded-lg mb-4 w-fit bg-gradient-to-r from-blue-600 to-blue-700 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* About GDSC Button and Content */}
          <div className="mt-16 space-y-6 relative">
            <button
              onClick={() => setShowAbout(!showAbout)}
              className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
            >
              About GDSC
              <ChevronRight
                className={`w-5 h-5 transition-transform duration-300 ${showAbout ? "rotate-90" : ""} group-hover:translate-x-1`}
              />
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                showAbout ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  About Google Developer Student Clubs
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Join a community of passionate developers and
                      innovators. GDSC is your gateway to:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Hands-on learning experiences",
                        "Industry expert sessions",
                        "Networking opportunities",
                        "Real-world project experience",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg dark:text-white">
                      Why Join GDSC?
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Access to Google Developer resources",
                        "Build solutions for real problems",
                        "Enhance your technical skills",
                        "Be part of a global community",
                      ].map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <ChevronRight className="w-4 h-4 text-green-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}