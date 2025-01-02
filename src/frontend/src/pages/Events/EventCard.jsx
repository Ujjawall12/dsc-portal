import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin, Clock } from 'lucide-react';

function EventCard({ title, date, description, image, details }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`bg-white max-w-sm rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 cursor-pointer ${
        isExpanded ? 'h-auto' : 'h-fit-content'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className='relative h-48 sm:h-64 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-700'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 hover:from-black/20 hover:to-black/50 transition-all duration-500' />
      </div>

      <div className='p-6'>
        <h3 className='text-2xl font-bold text-gray-900 mb-3 font-serif hover:text-black transition-colors duration-300'>
          {title}
        </h3>

        <div className='flex items-center gap-4 mb-4 text-sm text-gray-600'>
          <div className='flex items-center gap-1'>
            <Calendar size={16} className='text-black' />
            <span>{date}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock size={16} className='text-black' />
            <span>2 Hours</span>
          </div>
          <div className='flex items-center gap-1'>
            <MapPin size={16} className='text-black' />
            <span>Online</span>
          </div>
        </div>

        <p className='text-gray-600 mb-4'>{description}</p>

        <motion.div
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className='overflow-hidden'
        >
          <div className='bg-gray-50 p-4 rounded-lg mb-4'>
            <p className='text-gray-700'>{details}</p>
          </div>
        </motion.div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 font-medium'
        >
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
          {isExpanded ? (
            <ChevronUp
              size={16}
              className='group-hover:-translate-y-1 transition-transform duration-300'
            />
          ) : (
            <ChevronDown
              size={16}
              className='group-hover:translate-y-1 transition-transform duration-300'
            />
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default EventCard;
