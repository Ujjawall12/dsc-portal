import { motion } from "framer-motion";

function YearSelector({ years, selectedYear, onYearSelect }) {
  return (
    <div className="flex flex-row sm:flex-col gap-4 sm:gap-8 mb-8 sm:mb-0 overflow-x-scroll no-scrollbar sm:overflow-visible p-2 sticky top-4">
      {years.map((year) => (
        <motion.div
          key={year}
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => onYearSelect(year)}
            className={`min-w-14 min-h-14 rounded-full flex items-center justify-center text-lg font-bold ${
              selectedYear === year
                ? "bg-black dark:bg-neutral-700 text-white shadow-lg hover:bg-gray-800 dark:hover:bg-neutral-600"
                : "bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 border border-gray-200 dark:border-neutral-600"
            } transition-all duration-300`}
          >
            {year}
          </button>
          {selectedYear === year && (
            <motion.div
              className="hidden sm:block absolute left-20 top-1/2 w-3 h-3 bg-black dark:bg-neutral-700 rounded-full -translate-y-1/2"
              layoutId="yearIndicator"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default YearSelector;
