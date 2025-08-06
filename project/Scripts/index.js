document.addEventListener("DOMContentLoaded", () => {
  // DOM interaction and conditional branching
  const welcome = document.getElementById("welcome");
  welcome.addEventListener("click", () => {
    welcome.textContent = "Glad you're here—let's create something beautiful!";
  });

  // Object and array usage
  const artMediums = [
    { name: "Sketching", tools: ["Pencil", "Charcoal"] },
    { name: "Watercolor", tools: ["Brush", "Palette"] },
    { name: "Digital Illustration", tools: ["Tablet", "Stylus"] }
  ];

  const list = document.getElementById("mediums-list");
  artMediums.forEach(medium => {
    const li = document.createElement("li");
    li.textContent = `${medium.name}: ${medium.tools.join(", ")}`;
    list.appendChild(li);
  });

  // Template literal and localStorage
  const visits = localStorage.getItem("visits") || 0;
  localStorage.setItem("visits", Number(visits) + 1);
  console.log(`You've visited this site ${localStorage.getItem("visits")} times.`);
});

const toggleBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("menu-close");
const navList = document.querySelector("#main-nav ul");

toggleBtn.addEventListener("click", () => {
  navList.classList.add("show");
  closeBtn.classList.add("show");
  toggleBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  navList.classList.remove("show");
  closeBtn.classList.remove("show");
  toggleBtn.style.display = "block";
});
