import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import EventCard from "./EventCard";
import YearSelector from "./YearSelector";
import MainLayout from "@/Layout/MainLayout";
import Section from "@/Layout/Section";

function EventsPage() {
  const [years] = useState(["2024"]);
  const [selectedYear, setSelectedYear] = useState("2024");
  const [page, setPage] = useState(1);
  const eventsPerPage = 9;

  // Hardcoded events data
  const eventsData = [
    {
      id: "1",
      title: "Android Study Jams",
      date: "February 15-28, 2024",
      description: "Join us for an intensive learning program focused on Android app development using Kotlin.",
      image: "/placeholder-image.jpg",
      details: "Learn from experts, build real projects, and get hands-on experience with modern Android development.",
      duration: {
        start: "6:00 PM",
        end: "8:00 PM"
      },
      mode: "Hybrid",
      onlineLink: "https://meet.google.com/example"
    },
    {
      id: "2",
      title: "Web Development Workshop",
      date: "March 10, 2024",
      description: "Master modern web development with React and Node.js",
      image: "/placeholder-image.jpg",
      details: "Learn full-stack development from industry experts",
      duration: {
        start: "10:00 AM",
        end: "4:00 PM"
      },
      mode: "In-person",
      onlineLink: null
    },
    {
      id: "3",
      title: "Cloud Computing Summit",
      date: "April 5, 2024",
      description: "Explore cloud technologies and deployment strategies",
      image: "/placeholder-image.jpg",
      details: "Deep dive into AWS, Azure, and Google Cloud Platform",
      duration: {
        start: "9:00 AM",
        end: "5:00 PM"
      },
      mode: "Online",
      onlineLink: "https://meet.google.com/example2"
    },
    {
      id: "4",
      title: "AI & ML Workshop",
      date: "May 15, 2024",
      description: "Introduction to Artificial Intelligence and Machine Learning",
      image: "/placeholder-image.jpg",
      details: "Hands-on experience with popular ML frameworks",
      duration: {
        start: "11:00 AM",
        end: "3:00 PM"
      },
      mode: "Hybrid",
      onlineLink: "https://meet.google.com/example3"
    },
    {
      id: "5",
      title: "Cybersecurity Training",
      date: "June 20, 2024",
      description: "Learn about modern cybersecurity practices",
      image: "/placeholder-image.jpg",
      details: "Practical sessions on security testing and vulnerability assessment",
      duration: {
        start: "2:00 PM",
        end: "6:00 PM"
      },
      mode: "In-person",
      onlineLink: null
    },
    {
      id: "6",
      title: "DevOps Workshop",
      date: "July 10, 2024",
      description: "Master DevOps tools and practices",
      image: "/placeholder-image.jpg",
      details: "Learn CI/CD, containerization, and automation",
      duration: {
        start: "10:00 AM",
        end: "4:00 PM"
      },
      mode: "Online",
      onlineLink: "https://meet.google.com/example4"
    }
  ];

  // Filter events by selected year and paginate
  const filteredEvents = eventsData.filter(event => {
    const eventYear = event.date.split(',')[1]?.trim();
    return eventYear === selectedYear;
  });

  const totalEvents = filteredEvents.length;
  const startIndex = (page - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  return (
    <MainLayout>
      <Section className="py-1">
        <motion.div
          className="flex flex-col gap-1 sm:ml-32 ml-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <Calendar className="w-8 h-8 text-black dark:text-white hidden sm:block" />
            <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-2 font-Exo">
              Events
            </motion.h1>
          </div>
          {/* <p className="text-gray-600 dark:text-gray-400 sm:ml-12  ">
            Discover and join amazing tech events
          </p> */}
        </motion.div>

        <div className="flex flex-col mt-8 sm:flex-row sm:items-start sm:gap-8">
          {/* Year Selectors */}
          {/* <div className="sm:w-24 sm:py-7 sm:px-3 hidden sm:block">
            <YearSelector
              years={years}
              selectedYear={selectedYear}
              onYearSelect={(year) => {
                setSelectedYear(year);
                setPage(1); // Reset page when year changes
              }}
            />
          </div> */}

          {/* Mobile Year Selector */}
          {/* <div className="flex sm:hidden gap-2 mt-2 px-4 overflow-x-auto">
            {years.map((year) => (
              <button
                key={year}
                className={`min-w-14 min-h-14 flex items-center justify-center border rounded-full ${
                  selectedYear === year
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-white text-black dark:bg-black dark:text-white"
                }`}
                onClick={() => {
                  setSelectedYear(year);
                  setPage(1);
                }}
              >
                {year}
              </button>
            ))}
          </div> */}

          {/* Events Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <AnimatePresence mode="wait">
                {currentEvents.map((event) => (
                  <div key={event.id} className="flex justify-center items-center">
                    <EventCard  {...event} />
                  </div>
                ))}
              </AnimatePresence>

              {currentEvents.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full"
                >
                  <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
                    No events scheduled for {selectedYear}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Pagination */}
            {totalEvents > eventsPerPage && (
              <div className="flex justify-center mt-8 gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page * eventsPerPage >= totalEvents}
                  className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}

export default EventsPage;
