import NavbarButton from "./Components/NavbarButton";
import NavbarMobile from "./NavbarMobile";
import { useEffect, useState } from "react";
import NavbarLogo from "./Components/NavbarLogo";
import DarkModeButton from "./Components/DarkModeButton";
import links, { LINKS_GROUP_ONE_COUNT } from "./Data/Links";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  // todo: change this to tailwind classes
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const darkModeButtonVariants = {
    initial: { color: "rgb(23,23,23)" },
    animate: { color: "currentColor" },
  };

  useEffect(() => {
    // shift + number to navigate to a specific page
    const handleKeyDown = (event) => {
      console.log("event.key", event.key);
      if (event.altKey && !isNaN(event.key)) {
        const index = parseInt(event.key) - 1;
        if (index < links.length) {
          navigate(links[index].to);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return isMobile ? (
    <NavbarMobile />
  ) : (
    <motion.div
      className="sticky top-0 left-0 right-0 flex w-screen h-12  justify-between items-center px-4 py-8 bg-white dark:bg-neutral-900 border-b-2 border-b-neutral-100 dark:border-b-neutral-800 z-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={logoVariants}>
        <NavbarLogo />
      </motion.div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-4">
          {links.slice(0, LINKS_GROUP_ONE_COUNT).map((link) => (
            <motion.div key={link.text} variants={linkVariants}>
              <NavbarButton text={link.text} to={link.to} />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-row gap-2 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={darkModeButtonVariants}
          >
            <DarkModeButton />
          </motion.div>
          {links.slice(LINKS_GROUP_ONE_COUNT).map((link) => (
            <motion.div key={link.text} variants={linkVariants}>
              <NavbarButton text={link.text} to={link.to} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
