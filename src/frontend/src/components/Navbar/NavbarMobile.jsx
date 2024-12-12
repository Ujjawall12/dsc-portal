import { useState } from "react";
import NavbarButton from "./Components/NavbarButton";
import closeIcon from "../assets/X.svg";
import menuIcon from "../assets/hamburger.svg";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 left-0 right-0 flex flex-col w-screen h-12 justify-between items-center px-4">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row items-end gap-2">
          <img className="h-8" src="/knight.png" alt="logo" />
          <span className="font-Exo font-medium text-lg text-neutral-700">
            DEVELOPERS CLUB
          </span>
        </div>
        <button onClick={toggleMenu} className="text-neutral-700">
          <img
            src={isOpen ? closeIcon : menuIcon}
            alt={isOpen ? "Close" : "Menu"}
            className="h-6 w-6"
          />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-4">
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={toggleMenu}
              className={`self-end text-neutral-700 transition-transform ${
                isOpen ? "transform -translate-x-48" : ""
              }`}
            >
              <img src={closeIcon} alt="Close" className="h-6 w-6" />
            </button>
            <div className="flex flex-col gap-4 mt-4 w-full">
              <NavbarButton text="Home" to="/" />
              <NavbarButton text="About Us" to="/about" />
              <NavbarButton text="Events" to="/events" />
              <NavbarButton text="Team" to="/team" />
              <NavbarButton text="Resources" to="/resources" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <NavbarButton text="Become a Member" to="/login" type="black" />
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
