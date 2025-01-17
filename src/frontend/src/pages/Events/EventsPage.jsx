import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import EventCard from "./EventCard";
import YearSelector from "./YearSelector";
import MainLayout from "@/Layout/MainLayout";
import Section from "@/Layout/Section";

function EventsPage() {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString(),
  );
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalEvents, setTotalEvents] = useState(0);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Function to format event data for EventCard
  function formatEventForCard(event) {
    return {
      id: event._id,
      title: event.name,
      date: new Date(event.startDate).toLocaleDateString(),
      description: event.simpleDescription,
      image: event.images[0]?.link || "/placeholder-image.jpg",
      details: event.description[0]?.content || "",
      duration: {
        start: new Date(event.duration.start).toLocaleTimeString(),
        end: new Date(event.duration.end).toLocaleTimeString(),
      },
      mode: event.mode,
      onlineLink: event.onlineLink,
    };
  }

  // Fetch events for the selected year
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const URL = `${API_URL}/api/v1/events?year=${selectedYear}&page=${page}&max=9`;
        console.log("Fetching from:", URL);

        const response = await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`Failed to fetch events. Status: ${response.status}`);
        }

        const responseAwait = await response.json();
        console.log("Response data:", responseAwait);

        const { data, total } = responseAwait;
        setEvents(data.map(formatEventForCard));
        setTotalEvents(total);

        // Generate years array based on available data
        const currentYear = new Date().getFullYear();
        const yearsList = Array.from({ length: 5 }, (_, i) => (currentYear - 2 + i).toString());
        setYears(yearsList);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError(error.message || "Failed to fetch events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [selectedYear, page, API_URL]);

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
            <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-2 font-Exo">
              Events
            </motion.h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 sm:ml-12">
            Discover and join amazing tech events
          </p>
        </motion.div>

        <div className="flex flex-col mt-8 sm:flex-row sm:items-start sm:gap-8">
          {/* Year Selectors */}
          <div className="sm:w-24 sm:py-7 sm:px-3 hidden sm:block">
            <YearSelector
              years={years}
              selectedYear={selectedYear}
              onYearSelect={(year) => {
                setSelectedYear(year);
                setPage(1); // Reset page when year changes
              }}
            />
          </div>

          {/* Mobile Year Selector */}
          <div className="flex sm:hidden gap-2 mt-2 px-4 overflow-x-auto">
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
          </div>

          {/* Events Grid */}
          <div className="w-full">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-gray-600 dark:text-gray-400">
                  Loading events...
                </p>
              </div>
            ) : error ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-red-600 dark:text-red-400">Error: {error}</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  <AnimatePresence mode="wait">
                    {events.map((event) => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </AnimatePresence>

                  {events.length === 0 && (
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
                {totalEvents > 9 && (
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
                      disabled={page * 9 >= totalEvents}
                      className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}

export default EventsPage;
