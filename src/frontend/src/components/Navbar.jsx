import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <div className="absoulte top-0 left-0 right-0 flex w-screen h-12 justify-between items-center px-4">
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
          <NavbarButton text="Us" to="/us" />
        </div>
        <NavbarButton text="Become a Member" to="/login" type="black" />
      </div>
    </div>
  );
}
