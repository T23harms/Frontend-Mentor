const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

// Öffnen
menuIcon.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

// Schließen
closeIcon.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});

// Optional: Klick auf Overlay schließt das Menü
overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});
