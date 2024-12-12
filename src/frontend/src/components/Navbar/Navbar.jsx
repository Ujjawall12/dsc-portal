import NavbarButton from "./Components/NavbarButton";
import NavbarMobile from "./NavbarMobile";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    <div className="sticky top-0 left-0 right-0 flex w-screen h-12 justify-between items-center px-4 py-8">
      <div className="flex flex-row items-end gap-2">
        <img className="h-8" src="/knight.png" alt="logo" />
        <span className="font-Exo font-medium text-lg text-neutral-700">
          DEVELOPERS CLUB
        </span>
      </div>
      <div className="flex flex-row gap-12">
        <div className="flex flex-row gap-4">
          <NavbarButton text="Home" to="/" />
          <NavbarButton text="About Us" to="/about" />
          <NavbarButton text="Events" to="/events" />
          <NavbarButton text="Team" to="/team" />
          <NavbarButton text="Resources" to="/resources" />
        </div>
        <NavbarButton text="Become a Member" to="/login" type="black" />
      </div>
    </div>
  );
}
