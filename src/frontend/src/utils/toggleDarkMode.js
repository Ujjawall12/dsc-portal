import { initializeTheme } from "./init";

export default function toggleDarkMode(darkMode, setDarkMode) {
  const newDarkMode = !darkMode;
  setDarkMode(newDarkMode);
  localStorage.setItem("darkMode", newDarkMode.toString());
  initializeTheme(newDarkMode);
}
