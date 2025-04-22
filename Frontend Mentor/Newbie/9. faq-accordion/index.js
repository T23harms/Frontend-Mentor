document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".headlines");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const plusIcon = question.querySelector(".plus-icon");
            const minusIcon = question.querySelector(".minus-icon");

            // Prüfen, ob die aktuelle Antwort bereits sichtbar ist
            const isOpen = answer.style.display === "block";

            // Alle Antworten & Icons zurücksetzen
            document.querySelectorAll(".text").forEach((text) => text.style.display = "none");
            document.querySelectorAll(".plus-icon").forEach((plus) => plus.style.display = "inline");
            document.querySelectorAll(".minus-icon").forEach((minus) => minus.style.display = "none");

            // Falls sie nicht sichtbar war → öffnen, sonst bleibt sie geschlossen
            if (!isOpen) {
                answer.style.display = "block";
                plusIcon.style.display = "none";
                minusIcon.style.display = "inline";
            }
        });
    });
});
