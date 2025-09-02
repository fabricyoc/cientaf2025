const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

// Abre/fecha o menu
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // evita que o clique feche imediatamente
  nav.classList.toggle("active");
});

// Fecha ao clicar fora
document.addEventListener("click", (e) => {
  if (nav.classList.contains("active") && !nav.contains(e.target) && e.target !== menuToggle) {
    nav.classList.remove("active");
  }
});