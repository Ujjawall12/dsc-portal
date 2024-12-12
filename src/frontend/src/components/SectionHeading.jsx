import PropTypes from "prop-types";
import { motion } from "framer-motion";

SectionHeading.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const titleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const descriptionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
};

function SectionHeading({ title, description }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <motion.span
        className="font-Exo font-medium text-md dark:text-neutral-400 text-neutral-700"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        {title}
      </motion.span>
      <motion.span
        className="font-Exo font-normal text-3xl break-before-auto self-stretch max-w-1/2 dark:text-neutral-300 text-neutral-600"
        initial="hidden"
        animate="visible"
        variants={descriptionVariants}
      >
        {description}
      </motion.span>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
    </div>
  );
}

export default SectionHeading;
