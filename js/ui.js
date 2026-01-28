const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);
toggleBtn.textContent = savedTheme === "dark" ? "🌙" : "☀️";

toggleBtn.onclick = () => {
  const next =
    root.getAttribute("data-theme") === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  toggleBtn.textContent = next === "dark" ? "🌙" : "☀️";
};
