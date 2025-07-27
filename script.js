document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    document.getElementById("modeToggle").textContent = "🌙";
  } else {
    document.body.classList.remove("light");
    document.getElementById("modeToggle").textContent = "☀️";
  }
});

function toggleMode() {
  const isLight = document.body.classList.toggle("light");
  document.getElementById("modeToggle").textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
}
