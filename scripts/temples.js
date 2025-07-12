// Footer year and last modified
const currentYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

// Set current year
const now = new Date();
currentYearElement.textContent = now.getFullYear();

// Set last modified date with time
const modified = new Date(document.lastModified);
const formattedDateTime = modified.toLocaleString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
lastModifiedElement.textContent = `Last updated: ${formattedDateTime}`;

// 🍔 Hamburger menu toggle (mobile only)
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.getElementById("mainNav");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  // Switch symbol between ☰ and ✖
  hamburgerBtn.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

