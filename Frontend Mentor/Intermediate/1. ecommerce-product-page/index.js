document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const nav = document.getElementById("navigation");
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
    
    // Klick auf Overlay schließt das Menü
    overlay.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    });

    const pictures = document.querySelectorAll(".product-image");
    const previous = document.getElementById("icon-back");
    const next = document.getElementById("icon-next");

    let currentIndex = 0;

    function showSlide(index) {
        pictures.forEach((picture, i) => {
            picture.classList.remove("active");
            if (i == index) {
                picture.classList.add("active");
            }
        });
    }

    next.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % pictures.length;
        showSlide(currentIndex);
    });

    previous.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
        showSlide(currentIndex);
    });


    const minus = document.getElementById("minus-icon");
    const plus = document.getElementById("plus-icon");
    const quantity = document.getElementById("quantity");
    const addBtn = document.getElementById("add-button");

    const cartIcon = document.getElementById("cart-icon");
    const cartBox = document.getElementById("cart-box");
    const emptyBasket = document.getElementById("empty-basket");
    const fullBasket = document.getElementById("full-basket");
    const amountOutput = document.getElementById("amount");
    const priceOutput = document.getElementById("price");
    const cartCount = document.getElementById("cart-count");

    let count = 0;
    const itemPrice = 125;

    plus.addEventListener("click", () => {
        count++;
        updateQuantity();
    });

    minus.addEventListener("click", () => {
        if (count > 0) {
            count--;
            updateQuantity();
        }
    });

    function updateQuantity() {
        quantity.textContent = count;
        addBtn.disabled = count == 0;
    }

    addBtn.addEventListener("click", () => {
        if (count > 0) {
            amountOutput.textContent = count;
            priceOutput.textContent = ` = $${(count * itemPrice).toFixed(2)}`;
            emptyBasket.style.display = "none";
            fullBasket.style.display = "flex";

            cartCount.textContent = count;
            cartCount.style.display = "block";
        }
    });

    let cartVisible = false;

    cartIcon.addEventListener("click", () => {
        cartVisible = !cartVisible;
        cartBox.style.display = cartVisible ? "block" : "none";
    });

        cartBox.style.display = "none";
        fullBasket.style.display = "none";
        emptyBasket.style.display = "block";
        addBtn.disabled = true;

    const trash = document.getElementById("trash");

    trash.addEventListener("click", () => {
        count = 0;
        updateQuantity();
        fullBasket.style.display = "none";
        emptyBasket.style.display = "block";

        cartCount.textContent = "";
        cartCount.style.display = "none";
    });

    const reset = document.getElementById("checkout-button");

    reset.addEventListener("click", () => {
        location.reload();
    });

    if (window.innerWidth >= 600) {
        const thumbnails = document.querySelectorAll(".product-thumbnail");
        const productImages = document.querySelectorAll(".product-image");

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener("click", () => {
                productImages.forEach(image => image.classList.remove("active"));
                productImages[index].classList.add("active");                
                thumbnails.forEach(thumbnail => thumbnail.classList.remove("selected"));
                thumbnail.classList.add("selected");
            });
        });
    }    
});