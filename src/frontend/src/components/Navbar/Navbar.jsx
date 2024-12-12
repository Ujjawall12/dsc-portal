import NavbarButton from "./Components/NavbarButton";
import NavbarMobile from "./NavbarMobile";
import { useEffect, useState } from "react";
import NavbarLogo from "./Components/NavbarLogo";

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
      <NavbarLogo />
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
