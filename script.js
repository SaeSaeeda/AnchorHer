// NAV: highlight active section on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "var(--gold-light)";
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// NAV: shrink on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.style.height = "52px";
    nav.style.background = "rgba(26, 10, 46, 0.97)";
  } else {
    nav.style.height = "64px";
    nav.style.background = "rgba(74, 26, 140, 0.95)";
  }
});

// SMOOTH SCROLL for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// SCROLL REVEAL: fade-in sections as they enter viewport
const revealElements = document.querySelectorAll(
  ".detail-card, .speaker-card, .perk-card, .audience-item, .about-stat"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  revealObserver.observe(el);
});
