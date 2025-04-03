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
      title: "Solution Challenge",
      date: "January 2, 2024",
      description: "Build innovative solutions to real-world problems using Google technologies! Join the challenge, collaborate, and make an impact with your ideas.",
      image: "https://i.ibb.co/RTD19Wyz/All-that-you-need-to-know-about-GSC-at-a-glance-Swipe-right.jpg",
      details: "Learn from experts, build real projects, and get hands-on experience with modern Android development.",
      duration: {
        start: "7:00 PM",
        end: "8:30 PM"
      },
      mode: "Online",
      onlineLink: null
    },
    {
      id: "2",
      title: "Gen AI Study Jams",
      date: "April 26-27, 2024",
      description: "Dive into Generative AI with hands-on sessions! Learn how AI creates text, images, and more while exploring real-world applications. Perfect for all skill levels! ",
      image: "https://i.ibb.co/4nw45mJ4/Don-t-be-a-Gen-Z-without-AI-Join-the-Study-Jam-Only-limited-slots-150-available-So-register-ASAP-bef.jpg",
      details: "Learn full-stack development from industry experts",
      duration: {
        start: "2:00 PM",
        end: " 4:00 PM"
      },
      mode: "Online",
      onlineLink: null
    },
    {
      id: "3",
      title: "Among Us",
      date: "April 11, 2024",
      description: "Step into the world of Among Us, but this time, it's real! Navigate tasks, work with your crew, and uncover the impostors among you in this thrilling offline, real-life version. Stay sharp, trust wisely, and may the best crewmate win!",
      image: "https://i.ibb.co/BK32VgVX/Join-us-for-a-real-life-Among-Us-showdown-Gather-your-crewmates-and-sharpen-your-detective-skills-be.jpg",
      details: "Deep dive into AWS, Azure, and Google Cloud Platform",
      duration: {
        start: "3:00 PM",
        end: "8:00 PM"
      },
      mode: "Offline"
    },
    {
      id: "4",
      title: "GDSC Design Day",
      date: "April 1-3, 2024",
      description: "Unleash your creativity! Join us for a day of design, innovation, and hands-on sessions to explore UI/UX, graphic design, and more. Let’s design something amazing! ",
      image: "https://i.ibb.co/6J1WdD8p/Unveiling-a-universe-of-imagination-at-GDSC-Design-Day-in-collaboration-with-Friends-of-Figma-Hamirp.jpg",
      details: "Hands-on experience with popular ML frameworks",
      duration: {
        start: "5:30 PM",
        end: "7:00 PM"
      },
      mode: "Offline"
    },
    {
      id: "5",
      title: "Android Mania",
      date: "Jan 27-29, 2024",
      description: "Dive into the world of Android development! Learn the basics, build apps, and explore the latest trends in mobile tech. Perfect for beginners and enthusiasts!",
      image: "https://i.ibb.co/KcNkPjjC/Calling-all-Android-enthusiasts-Android-app-dreams-taking-flight-Join-our-epic-3-day-workshop-and-bu.jpg",
      details: "Hands-on experience with popular ML frameworks",
      duration: {
        start: "5:00 PM",
        end: "7:00 PM"
      },
      mode: "Offline"
    },
    {
      id: "6",
      title: "ML Study Jam",
      date: "Feb 19-20, 2024",
      description: "Kickstart your journey into Machine Learning with hands-on sessions! Learn core ML concepts, build models, and explore real-world applications. Perfect for all skill levels! ",
      image: "https://i.ibb.co/4g5ynbR2/Attention-technophiles-Feel-like-you-are-lagging-behind-in-this-fast-paced-AI-fuelled-world-Stay-no.jpg",
      details: "Hands-on experience with popular ML frameworks",
      duration: {
        start: "5:30 PM",
        end: "7:00 PM"
      },
      mode: "Offline"
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
          <div className="sm:w-24 sm:py-7 sm:px-3 hidden sm:block">
            {/* <YearSelector
              years={years}
              selectedYear={selectedYear}
              onYearSelect={(year) => {
                setSelectedYear(year);
                setPage(1); // Reset page when year changes
              }}
            /> */}
          </div>

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
