// Typing effect
const text = "Hi, I'm Srihari Gudipati - Full Stack Developer";
let index = 0;
function typeEffect() {
  const element = document.getElementById("typed-text");
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let el of reveals) {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) {
      el.classList.add("visible");
    }
  }
});

// Theme toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
