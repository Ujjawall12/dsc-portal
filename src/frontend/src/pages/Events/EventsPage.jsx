import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { events } from './EventsData';
import EventCard from './EventCard';
import YearSelector from './YearSelector';

function EventsPage() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const years = ['2024', '2023'];

  const filteredEvents = events.filter((event) => event.year === selectedYear);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors duration-300">
            <Calendar className="w-10 h-10 text-black" />
          </div>
          <div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 font-serif"
            >
               Events
            </motion.h1>
            <p className="text-gray-600">Discover and join amazing tech events</p>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="sm:w-24">
            <YearSelector
              years={years}
              selectedYear={selectedYear}
              onYearSelect={setSelectedYear}
            />
          </div>

          <div className="flex-1 min-h-[600px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatePresence mode="wait">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.title}
                    {...event}
                  />
                ))}
              </AnimatePresence>
            </div>

            {filteredEvents.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
               
              >
                <div>
                  <p className="text-gray-600">No events scheduled for {selectedYear}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default EventsPage;