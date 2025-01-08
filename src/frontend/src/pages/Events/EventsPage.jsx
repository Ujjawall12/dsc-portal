import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { events } from "./EventsData";
import EventCard from "./EventCard";
import YearSelector from "./YearSelector";
import MainLayout from "@/Layout/MainLayout";
import Section from "@/Layout/Section";

const years = ["2024", "2023"];  // todo - get years from the backend

function EventsPage() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [filteredEvents, setFilteredEvents] = useState(events.filter((event) => event.year === selectedYear));

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredEvents(events.filter((event) => event.year === selectedYear));
  }, [selectedYear]);

  return (
    <MainLayout>
      <Section className="py-1">
        <motion.div
          className="flex flex-col gap-1 sm:ml-32 ml-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-row items-center gap-3">
            <Calendar className="w-8 h-8 text-black dark:text-white hidden sm:block" />
            <motion.h1 className="text-4xl sm:text-5xl  lg:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-2 font-Exo h-[1.8rem]">
              Events
            </motion.h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 sm:ml-12">
            Discover and join amazing tech events
          </p>
        </motion.div>

        <div className=" flex flex-col mt-8 sm:flex-row sm:items-start sm:gap-8">
          <div className="sm:w-24 sm:py-7 sm:px-3 hidden sm:block ">
            <YearSelector
              years={years}
              selectedYear={selectedYear}
              onYearSelect={setSelectedYear}
            />
          </div>

          <div className="flex sm:hidden gap-2 mt-2 px-4">
            {years.map((year) => (
              <button
                key={year}
                className={`w-12 h-12 flex items-center justify-center border rounded-full ${
                  selectedYear === year
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-white text-black dark:bg-black dark:text-white"
                }`}
                onClick={() => {
                  setSelectedYear(year)
                }}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <AnimatePresence mode="wait">
              {filteredEvents.map((event) => (
                <EventCard key={event.title} {...event} />
              ))}
            </AnimatePresence>

            {filteredEvents.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    No events scheduled for {selectedYear}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}

export default EventsPage;
