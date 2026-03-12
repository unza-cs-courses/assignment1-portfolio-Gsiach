document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("view-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("view-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("view-theme", savedTheme);
});