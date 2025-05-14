document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Initial animation: fade in the split image and text
  const tl = gsap.timeline();
  tl.fromTo(
    ".face-img",
    { opacity: 0 }, // Start invisible
    { opacity: 1, duration: 0.8, ease: "power2.out" } // Fade in the split image
  ).fromTo(
    ".animate-text",
    { opacity: 0, y: 20 }, // Start invisible, below
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.2 }, // Fade in, slide up text
    "-=0.3" // Overlap with image animation
  );

  // Respect reduced motion for initial animation
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(".face-img, .animate-text", { opacity: 1, y: 0 });
  }

  // Hover animation for full face reveal
  const designerHalf = document.querySelector(".text-half.designer");
  const coderHalf = document.querySelector(".text-half.coder");
  const faceImg = document.querySelector("#face-img");
  const designerImg = document.querySelector("#designer-img");
  const coderImg = document.querySelector("#coder-img");

  // Set initial opacity states
  gsap.set(faceImg, { opacity: 1 });
  gsap.set(designerImg, { opacity: 0 });
  gsap.set(coderImg, { opacity: 0 });

  // Designer half hover
  designerHalf.addEventListener("mouseenter", () => {
    gsap.to(faceImg, { opacity: 0, duration: 0.5, ease: "power2.out" });
    gsap.to(designerImg, { opacity: 1, duration: 0.5, ease: "power2.out" });
    gsap.to(coderImg, { opacity: 0, duration: 0.5, ease: "power2.out" });
  });

  designerHalf.addEventListener("mouseleave", () => {
    gsap.to(faceImg, { opacity: 1, duration: 0.5, ease: "power2.out" });
    gsap.to(designerImg, { opacity: 0, duration: 0.5, ease: "power2.out" });
  });

  // Coder half hover
  coderHalf.addEventListener("mouseenter", () => {
    gsap.to(faceImg, { opacity: 0, duration: 0.5, ease: "power2.out" });
    gsap.to(coderImg, { opacity: 1, duration: 0.5, ease: "power2.out" });
    gsap.to(designerImg, { opacity: 0, duration: 0.5, ease: "power2.out" });
  });

  coderHalf.addEventListener("mouseleave", () => {
    gsap.to(faceImg, { opacity: 1, duration: 0.5, ease: "power2.out" });
    gsap.to(coderImg, { opacity: 0, duration: 0.5, ease: "power2.out" });
  });

  // Initial language setup
  switchLanguage("en");
});

// Language switching function
function switchLanguage(lang) {
  // Navigation menu
  const navAbout = document.getElementById("nav-about");
  const navProjects = document.getElementById("nav-projects");
  const navContact = document.getElementById("nav-contact");

  // Update navigation text
  if (lang === "en") {
    navAbout.textContent = "About Me";
    navProjects.textContent = "Projects";
    navContact.textContent = "Contact";
  } else if (lang === "de") {
    navAbout.textContent = "Über mich";
    navProjects.textContent = "Projekte";
    navContact.textContent = "Kontakt";
  } else if (lang === "ua") {
    navAbout.textContent = "Про мене";
    navProjects.textContent = "Проекти";
    navContact.textContent = "Контакти";
  } else if (lang === "ru") {
    navAbout.textContent = "Обо мне";
    navProjects.textContent = "Проекты";
    navContact.textContent = "Контакты";
  }

  // Projects description
  const projectsDesc = document.getElementById("projects-description");
  if (lang === "en") {
    projectsDesc.textContent =
      "Each project is a unique solution and approach.";
  } else if (lang === "de") {
    projectsDesc.textContent =
      "Jedes Projekt ist eine einzigartige Lösung und Herangehensweise.";
  } else if (lang === "ua") {
    projectsDesc.textContent = "Кожен проєкт — це унікальне рішення та підхід.";
  } else if (lang === "ru") {
    projectsDesc.textContent =
      "Каждый проект — это уникальное решение и подход.";
  }

  // Contact description
  const contactDesc = document.getElementById("contact-description");
  if (lang === "en") {
    contactDesc.textContent = "Contact me via email or social media!";
  } else if (lang === "de") {
    contactDesc.textContent =
      "Kontaktieren Sie mich per E-Mail oder über soziale Netzwerke!";
  } else if (lang === "ua") {
    contactDesc.textContent =
      "Зв’яжіться зі мною через електронну пошту або соцмережі!";
  } else if (lang === "ru") {
    contactDesc.textContent =
      "Свяжитесь со мной по электронной почте или через соцсети!";
  }

  // About section text
  const designerText = document.getElementById("designer-text");
  const coderText = document.getElementById("coder-text");
  if (lang === "en") {
    designerText.textContent = "I’m Tetiana Maltseva";
    coderText.textContent = "Web Developer";
  } else if (lang === "de") {
    designerText.textContent = "Ich bin Tetiana Maltseva";
    coderText.textContent = "Webentwicklerin";
  } else if (lang === "ua") {
    designerText.textContent = "Я Тетяна Мальцева";
    coderText.textContent = "Веб-розробниця";
  } else if (lang === "ru") {
    designerText.textContent = "Я Татьяна Мальцева";
    coderText.textContent = "Веб-разработчица";
  }
}

// Scroll button
const toTopBtn = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Preloader
window.addEventListener("load", () => {
  gsap.to("#preloader", {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      document.getElementById("preloader").style.display = "none";
    },
  });
});
