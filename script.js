// Navbar Scroll Shadow
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Close menu on link click (mobile UX)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  });
});

// Typed.js (if used in Hero)
if (document.querySelector(".typed-text")) {
  new Typed(".typed-text", {
    strings: ["Web Developer", "Designer", "Freelancer"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  });
}

// AOS Init
AOS.init({
  duration: 1000,
  once: true,
});
