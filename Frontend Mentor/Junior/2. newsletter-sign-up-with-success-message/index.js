document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.sign-up');
    const emailInput = document.getElementById("email");
    const successMessage = document.getElementById("success-message");
    const emailConfirmation = document.getElementById("email-confirmation");
    const dismissBtn = document.querySelector(".dismiss-btn");
    const signUpSection = document.getElementById("sign-up-section");
    const card = document.querySelector(".card");
    const errorText = document.querySelector(".error-message");

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Verhindert Seiten-Neuladen

            const emailValue = emailInput.value.trim();

            if (isValidEmail(emailValue)) {
                emailConfirmation.innerText = emailValue;

                // Form verstecken, Success-Message zeigen & Card verkleinern
                signUpSection.style.display = "none";
                successMessage.style.display = "block";
                card.classList.add("success");

                // Fehler zurücksetzen
                errorText.style.display = "none";
                emailInput.style.borderColor = "var(--Grey)";
            } else {
                errorText.style.display = "block";
                emailInput.style.borderColor = "red";
            }
        });
    }

    if (dismissBtn) {
        dismissBtn.addEventListener("click", function() {
            // Erfolgsmeldung ausblenden, Formular wieder anzeigen & Card zurücksetzen
            successMessage.style.display = "none";
            signUpSection.style.display = "block";
            card.classList.remove("success");

            // Eingabe zurücksetzen (optional)
            emailInput.value = "";
        });
    }
});
