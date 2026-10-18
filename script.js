
/* ---------- Animated typing text ---------- */
const typingText = document.getElementById("typingText");

const phrases = [
  "Data Analytics",
  "Web Development",
  "Programming",
  "Data Visualization"
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (deleting) {
    characterIndex--;
  } else {
    characterIndex++;
  }

  typingText.textContent = currentPhrase.substring(0, characterIndex);

  let delay = deleting ? 45 : 90;

  if (!deleting && characterIndex === currentPhrase.length) {
    deleting = true;
    delay = 1400;
  } else if (deleting && characterIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 350;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();


/* ---------- Reveal elements while scrolling ---------- */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  // Fallback for browsers without IntersectionObserver
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}


/* ---------- Mobile navigation ---------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a section
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});


/* ---------- Footer year-ready message ---------- */
console.log("Shreya's portfolio is ready!");
