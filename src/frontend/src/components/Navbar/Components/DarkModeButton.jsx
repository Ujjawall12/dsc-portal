import { useState, useEffect } from "react";
import sun from "assets/sun.jsx";
import moon from "assets/moon.jsx";
import toggleDarkMode from "../../../utils/toggleDarkMode";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <button
      onClick={() => toggleDarkMode(darkMode, setDarkMode)}
      className="ml-4 p-2 dark:bg-gray-200 bg-neutral-900 rounded-full"
    >
      {darkMode ? sun : moon}
    </button>
  );
}
