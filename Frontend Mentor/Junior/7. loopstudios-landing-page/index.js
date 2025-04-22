const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.getElementById("mobile-navigation");

// Öffnen
menuIcon.addEventListener("click", () => {
  nav.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

// Schließen
closeIcon.addEventListener("click", () => {
  nav.classList.remove("active");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});
