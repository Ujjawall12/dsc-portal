export function initializeTheme(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    document.getElementById("root").style.backgroundColor = "rgb(23,23,23)";
    document.body.style.backgroundColor = "rgb(23,23,23)";
  } else {
    document.documentElement.classList.remove("dark");
    document.getElementById("root").style.backgroundColor = "#fff";
    document.body.style.backgroundColor = "#fff";
  }
}

export function init() {
  const darkMode = localStorage.getItem("darkMode") === "true";
  initializeTheme(darkMode);
}
