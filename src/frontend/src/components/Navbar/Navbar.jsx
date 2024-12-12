import NavbarButton from "./Components/NavbarButton";
import NavbarMobile from "./NavbarMobile";
import { useEffect, useState } from "react";
import NavbarLogo from "./Components/NavbarLogo";
import DarkModeButton from "./Components/DarkModeButton";
import links, { LINKS_GROUP_ONE_COUNT } from "./Data/Links";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <NavbarMobile />
  ) : (
    <div className="sticky top-0 left-0 right-0 flex w-screen h-12 justify-between items-center px-4 py-8 bg-white dark:bg-neutral-900">
      <NavbarLogo />
      <div className="flex flex-row gap-12">
        <div className="flex flex-row gap-4">
          {links.slice(0, LINKS_GROUP_ONE_COUNT).map((link) => (
            <NavbarButton key={link.text} text={link.text} to={link.to} />
          ))}
        </div>
        <div className="flex flex-row gap-2 items-center">
          <DarkModeButton />
          {links.slice(LINKS_GROUP_ONE_COUNT).map((link) => (
            <NavbarButton key={link.text} text={link.text} to={link.to} />
          ))}
        </div>
      </div>
    </div>
  );
}
