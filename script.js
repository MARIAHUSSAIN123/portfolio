/* ================= NAVBAR TOGGLE ================= */
const navMenuBtn = document.querySelector(".nav-menu-btn i");
const menuBtn = document.getElementById("myNavMenu");

navMenuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("responsive");
});


/* Close mobile menu when clicking outside */
document.addEventListener("click", (e) => {
  if (!navMenuBtn.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove("responsive");
  }
});

/* ================= NAVBAR SCROLL SHADOW ================= */
window.addEventListener("scroll", () => {
  const navHeader = document.getElementById("header");

  if (window.scrollY > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
});

/* ================= TYPING EFFECT ================= */
var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Youtuber", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ================= SCROLL REVEAL ================= */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: window.innerWidth > 768,
});

sr.reveal(".featured-text-card");
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-card", { interval: 200 });
sr.reveal(".top-header");

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ================= ACTIVE NAV LINK ON SCROLL ================= */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 60;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector(
      `.nav-menu a[href*="${sectionId}"]`
    );

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    }
  });
}
window.addEventListener("scroll", scrollActive);
