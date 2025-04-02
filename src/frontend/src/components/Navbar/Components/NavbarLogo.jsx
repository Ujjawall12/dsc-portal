export default function NavbarLogo() {
  return (
    <a href="/" className="flex flex-row items-end gap-2 cursor-pointer">
      <div className="flex flex-row items-end gap-2">
        {/* <img className="h-8" src="/knight.png" alt="logo" /> */}
        <div className="flex items-center gap-1">
          <img src="/dsc_logo.png" className="h-6"/>
          <span className="font-Exo hidden md:flex font-medium text-lg text-neutral-700 dark:text-neutral-300">
            DEVELOPERS STUDENT CLUB
          </span>
          <span className="font-Exo flex md:hidden font-medium text-lg text-neutral-700 dark:text-neutral-300">
            DSC
          </span>
        </div>
      </div>
    </a>
  );
}
