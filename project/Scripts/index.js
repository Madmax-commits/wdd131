document.addEventListener("DOMContentLoaded", () => {
  // DOM interaction and conditional branching
  const welcome = document.getElementById("welcome");
  if (welcome) {
    welcome.addEventListener("click", () => {
      welcome.textContent = "Glad you're here—let's create something beautiful!";
    });
  }

  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger");
  const navPopup = document.querySelector(".nav-popup");
  const closeBtn = document.querySelector(".close-btn");

  if (hamburger && navPopup && closeBtn) {
    hamburger.addEventListener("click", () => {
      navPopup.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      navPopup.style.display = "none";
    });
  }

  // Object and array usage
  const artMediums = [
    { name: "Sketching", tools: ["Pencil", "Charcoal"] },
    { name: "Watercolor", tools: ["Brush", "Palette"] },
    { name: "Digital Illustration", tools: ["Tablet", "Stylus"] }
  ];

  const list = document.getElementById("mediums-list");
  if (list) {
    artMediums.forEach(medium => {
      const li = document.createElement("li");
      li.textContent = `${medium.name}: ${medium.tools.join(", ")}`;
      list.appendChild(li);
    });
  }

  // Template literal and localStorage
  const visits = localStorage.getItem("visits") || 0;
  localStorage.setItem("visits", Number(visits) + 1);
  console.log(`You've visited this site ${localStorage.getItem("visits")} times.`);

  // Dynamic tutorial list
  const tutorialList = document.getElementById("tutorialList");
  if (tutorialList) {
    const tutorials = ["Intro to Sketching", "Watercolor Basics", "Digital Art for Beginners"];
    tutorials.forEach(tutorial => {
      const item = document.createElement("li");
      item.textContent = tutorial;
      tutorialList.appendChild(item);
    });
  }

  // Favorite button interaction
  const showFavorite = document.getElementById("showFavorite");
  const favoriteOutput = document.getElementById("favoriteOutput");
  if (showFavorite && favoriteOutput) {
    showFavorite.addEventListener("click", () => {
      const favorite = "Digital Illustration";
      favoriteOutput.textContent = `Your favorite medium is: ${favorite}`;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("site-footer");

  if (footer) {
    footer.innerHTML = `
      <p>&copy; 2025 Creative Pulse</p>
      <a href="references.html">References</a>
    `;
  }
});

// Add animation to favorite output
const showFavorite = document.getElementById("showFavorite");
const favoriteOutput = document.getElementById("favoriteOutput");

if (showFavorite && favoriteOutput) {
  showFavorite.addEventListener("click", () => {
    const favorite = "Digital Illustration";
    favoriteOutput.textContent = `🎯 Your favorite medium is: ${favorite}`;
    favoriteOutput.style.opacity = 0;
    favoriteOutput.style.transition = "opacity 0.8s ease";
    setTimeout(() => {
      favoriteOutput.style.opacity = 1;
    }, 100);
  });
}

const movingText = document.getElementById("movingText");
const phrases = ["Creative Pulse", "Gallery", "Inspiration", "Art in Motion"];
let index = 0;

setInterval(() => {
  index = (index + 1) % phrases.length;
  movingText.textContent = phrases[index];
}, 3000);

  // Create the animated text element
  const animatedText = document.createElement('div');
  animatedText.textContent = 'Art in Motion';

  // Apply styles directly with JS
  Object.assign(animatedText.style, {
    position: 'absolute',
    fontSize: '2rem',
    fontFamily: 'Montserrat, sans-serif',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    zIndex: '1000',
    textAlign: 'center',
    maxWidth: '90%',
    whiteSpace: 'nowrap',
    animation: 'floatText 4s ease-in-out infinite'
  });

  // Append to body
  document.body.appendChild(animatedText);

  // Center it using viewport dimensions
  function centerText() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const rect = animatedText.getBoundingClientRect();

    animatedText.style.left = `${(vw - rect.width) / 2}px`;
    animatedText.style.top = `${(vh - rect.height) / 2}px`;
  }

  // Initial center and on resize
  centerText();
  window.addEventListener('resize', centerText);


