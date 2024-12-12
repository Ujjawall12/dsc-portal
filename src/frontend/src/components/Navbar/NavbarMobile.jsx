import { useState } from "react";
import NavbarButton from "./Components/NavbarButton";
import closeIcon from "assets/X.svg";
import menuIcon from "assets/hamburger.svg";
import NavbarLogo from "./Components/NavbarLogo";
import DarkModeButton from "./Components/DarkModeButton";
import links, { LINKS_GROUP_ONE_COUNT } from "./Data/Links";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky z-10 top-0 left-0 right-0 py-2 flex flex-col w-screen h-12 justify-between items-center px-4 bg-white dark:bg-neutral-900">
      <div className="flex flex-row justify-between items-center w-full">
        <NavbarLogo />
        <button
          onClick={toggleMenu}
          className="text-neutral-700 dark:text-neutral-300"
        >
          <img
            src={isOpen ? closeIcon : menuIcon}
            alt={isOpen ? "Close" : "Menu"}
            className="h-6 w-6 dark:invert"
          />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-neutral-800 shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-4">
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={toggleMenu}
              className={`self-end text-neutral-700 dark:text-neutral-300 transition-transform ${
                isOpen ? "transform -translate-x-48" : ""
              }`}
            >
              <img
                src={closeIcon}
                alt="Close"
                className="h-6 w-6 dark:invert"
              />
            </button>
            <div className="flex flex-col gap-4 mt-4 w-full">
              {links.map((link) => (
                <NavbarButton key={link.text} text={link.text} to={link.to} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <DarkModeButton textOnly={true} />
            {/* {links.slice(LINKS_GROUP_ONE_COUNT).map((link) => (
              <NavbarButton key={link.text} text={link.text} to={link.to} />
            ))} */}

            <NavbarButton
              text="Close"
              button={true}
              type="red"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
