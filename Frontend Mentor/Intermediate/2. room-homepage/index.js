document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const nav = document.getElementById("navigation");
    const overlay = document.querySelector(".overlay");

    // open
    menuIcon.addEventListener("click", () => {
        nav.classList.add("active");
        overlay.classList.add("active");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    });
    
    // close
    closeIcon.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    });
    
    // press overlay to close
    overlay.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    });

    const pictures = document.querySelectorAll(".slide-img");
    const descriptions = document.querySelectorAll(".slide-text");
    const next = document.getElementById("right-box");
    const previous = document.getElementById("left-box");
    
    let currentIndex = 0;
    
    function showSlide(index) {
        // Bilder ein-/ausblenden
        pictures.forEach((picture, i) => {
            picture.classList.toggle("active", i === index);
        });
    
        // Texte ein-/ausblenden
        descriptions.forEach((desc, i) => {
            desc.classList.toggle("active", i === index);
        });
    }
    
    // Initial anzeigen
    showSlide(currentIndex);
    
    // Event Listener
    next.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % pictures.length;
        showSlide(currentIndex);
    });
    
    previous.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
        showSlide(currentIndex);
    });
    

});