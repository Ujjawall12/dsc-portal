import { motion } from "framer-motion";

export default function ViewAllProjectCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      id="view-all-projects-card"
      className="hidden lg:flex flex-col items-center min-h-56 px-4 py-6 gap-2 rounded-xl self-stretch w-72 flex-1 bg-gradient-to-br from-neutral-50 to-gray-200 dark:from-neutral-800 dark:to-neutral-700"
    >
      <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        View All Projects
      </h1>
      <p className="text-black dark:text-white text-center">
        Explore all the projects that we have been working on.
      </p>

      <button className="w-64 h-12 rounded-md mt-auto bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white font-semibold text-sm transition-colors duration-300 ease-in-out">
        View All Projects
      </button>
    </motion.div>
  );
}
