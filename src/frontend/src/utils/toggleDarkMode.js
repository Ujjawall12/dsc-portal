export default function toggleDarkMode(darkMode, setDarkMode) {
  const newDarkMode = !darkMode;
  setDarkMode(newDarkMode);
  if (newDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
    document.getElementById("root").style.backgroundColor = "#333";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
    document.getElementById("root").style.backgroundColor = "#fff";
  }
}
