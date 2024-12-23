import { motion } from 'framer-motion';

import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import CurrentProjectCard from '@/components/CurrentProjectCard';
import ViewAllProjectCard from '@/components/ViewAllProjectCard';

export default function SectionTwo() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='flex flex-col gap-4 px-8'>
      <SectionHeading
        title={'FEATURED PROJECTS'}
        description={
          'Explore some of the projects that we have been working on.'
        }
      />
      <motion.div
        className='flex flex-row gap-4 sm:p-6'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          className='flex flex-col items-center gap-4 flex-1'
          id='project-card-container'
          variants={containerVariants}
        >
          <motion.div variants={cardVariants}>
            <ProjectCard />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ProjectCard />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ProjectCard />
          </motion.div>
          <button className='self-stretch bg-blue-400 hover:bg-blue-500 dark:bg-blue-800 dark:hover:bg-blue-900 transition-colors rounded-md h-10 sm:h-12 text-md font-semibold text-white lg:hidden'>
            View All Projects
          </button>
        </motion.div>
        <div
          className='flex flex-col items-center gap-4 w-fit'
          id='project-view-card-container'
        >
          <CurrentProjectCard />
          <ViewAllProjectCard />
        </div>
      </motion.div>
    </div>
  );
}
