export default function toggleDarkMode(darkMode, setDarkMode) {
  const newDarkMode = !darkMode;
  setDarkMode(newDarkMode);
  if (newDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  }
}
