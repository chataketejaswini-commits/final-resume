// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".card, section h3");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Typing effect
const text = "Aspiring Computer Science Engineer";
let i = 0;
const speed = 80;

function typeEffect() {
  const element = document.querySelector(".hero p");
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;