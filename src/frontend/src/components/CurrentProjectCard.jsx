// this image will be dynamically fetched from the backend
import computer from "assets/computer.jpg";
import { motion } from "framer-motion";

export default function CurrentProjectCard() {
  return (
    <motion.div
      id="current-project-card"
      initial={{ x: "120px" }}
      animate={{ x: 0 }}
      style={{
        backgroundImage: `url(${computer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(10px)",
      }}
      className="relative overflow-hidden hidden lg:flex flex-col gap-4 rounded-xl self-stretch w-72 h-96 p-4 group"
    >
      <div className="-z-10 absolute top-0 left-0 right-0 h-full w-full bg-gradient-to-t from-transparent to-neutral-900"></div>
      <div className="grid grid-cols-2 w-[52rem] group-hover:-translate-x-1/2 transition-transform">
        <h1 className="text-2xl font-bold text-neutral-200">Current Project</h1>
        <h1 className="text-2xl font-bold text-green-500">Project Name</h1>
      </div>
      <p className="text-white">
        Currently we are working on a project that aims to solve the issue
        present in the current system.
      </p>
      {/* <button className="btn btn-primary bg-green-700 mt-auto">
        View Project
      </button> */}
    </motion.div>
  );
}
