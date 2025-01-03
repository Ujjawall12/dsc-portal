import { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { events } from './EventsData';
import EventCard from './EventCard';
import YearSelector from './YearSelector';
import MainLayout from '@/Layout/MainLayout';
import Section from '@/Layout/Section';

function EventsPage() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const years = ['2024', '2023'];

  const filteredEvents = events.filter((event) => event.year === selectedYear);

  return (
    <MainLayout>
      <Section className='py-1'>
        <motion.div
          className='flex flex-col gap-1 sm:ml-32 ml-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex flex-row items-center gap-3'>
            <Calendar className='w-8 h-8 text-black ' />
            <motion.h1 className='text-4xl sm:text-5xl  lg:text-4xl font-semibold text-gray-900 mb-2 font-Exo h-[1.8rem]'>
              Events
            </motion.h1>
          </div>
          <p className='text-gray-600 sm:ml-12 ml-4'>
            Discover and join amazing tech events
          </p>
        </motion.div>

        <div className=' flex flex-col sm:flex-row sm:items-start sm:gap-8'>
          <div className='sm:w-24 sm:py-7 sm:px-3 hidden sm:block '> 
            <YearSelector
              years={years}
              selectedYear={selectedYear}
              onYearSelect={setSelectedYear}
            />
          </div>

          <div className='flex sm:hidden gap-04 mt-2 px-4'>
            {years.map((year) => (
              <button
                key={year}
                className={`w-12 h-12 flex items-center justify-center border rounded-full ${
                  selectedYear === year ? 'bg-black text-white' : 'bg-white text-black'
                }`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
            <AnimatePresence mode='wait'>
              {filteredEvents.map((event) => (
                <EventCard key={event.title} {...event} />
              ))}
            </AnimatePresence>

            {filteredEvents.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div>
                  <p className='text-gray-600'>
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

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Calendar } from 'lucide-react';
// import { events } from './EventsData';
// import EventCard from './EventCard';
// import YearSelector from './YearSelector';
// import MainLayout from '@/Layout/MainLayout';
// import Section from '@/Layout/Section';

// function EventsPage() {
//   const [selectedYear, setSelectedYear] = useState('2024');
//   const years = ['2024', '2023'];

//   const filteredEvents = events.filter((event) => event.year === selectedYear);

//   return (
//     <MainLayout>
//       <Section className='py-1'>
//         <motion.div
//           className='flex flex-col gap-1 ml-32'
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className='flex flex-row items-center gap-3 '>
//             <Calendar className='w-8 h-8 text-black ' />
//             <motion.h1 className='text-4xl sm:text-5xl lg:text-4xl font-semibold text-gray-900 mb-2 font-Exo h-[1.8rem]'>
//               Events
//             </motion.h1>
//           </div>
//           <p className='text-gray-600 ml-12'>
//             Discover and join amazing tech events
//           </p>
//         </motion.div>

//         <div className='flex flex-col sm:flex-row items-center sm:items-start gap-8'>
//           <div className='sm:w-24 py-7 px-3'> 
//             <YearSelector
//               years={years}
//               selectedYear={selectedYear}
//               onYearSelect={setSelectedYear}
//             />
//           </div>

//           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
//             <AnimatePresence mode='wait'>
//               {filteredEvents.map((event) => (
//                 <EventCard key={event.title} {...event} />
//               ))}
//             </AnimatePresence>

//             {filteredEvents.length === 0 && (
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                 <div>
//                   <p className='text-gray-600'>
//                     No events scheduled for {selectedYear}
//                   </p>
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </Section>
//     </MainLayout>
//   );
// }

// export default EventsPage;
