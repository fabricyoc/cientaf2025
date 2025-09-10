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

// Data do evento: 11 de setembro de 2025
const eventDate = new Date("September 11, 2025 18:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML = "<h1>O evento começou!</h1>";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Atualiza imediatamente
