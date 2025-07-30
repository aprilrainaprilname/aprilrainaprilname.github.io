document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    document.getElementById("modeToggle").textContent = "🌙";
  } else {
    document.body.classList.remove("light");
    document.getElementById("modeToggle").textContent = "☀️";
  }

  document.querySelectorAll("a[href]").forEach(link => {
    const url = new URL(link.href, window.location.href);
    const isSameOrigin = url.origin === window.location.origin;

    if (isSameOrigin && !link.target) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.add("page-exit", "fade-out");
        setTimeout(() => window.location.href = link.href, 150);
      });
    }
  });
});

function toggleMode() {
  const isLight = document.body.classList.toggle("light");
  document.getElementById("modeToggle").textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

function goBack() {
  window.history.back();
}
