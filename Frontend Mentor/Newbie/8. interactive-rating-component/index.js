document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("rating-card");
    const rating = document.querySelectorAll("#rate-buttons > button");
    const submit = document.getElementById("submit");
    const secondCard = document.getElementById("thank-card");
    const feedback = document.getElementById("selected-feedback");

    let selectedRating = null;

    rating.forEach(button => {
        button.addEventListener("click", function() {
            
            rating.forEach(btn => btn.classList.remove("active"));

            this.classList.add("active");

            selectedRating = this.innerText;
        });
    });


    submit.addEventListener("click", function() {
        if (selectedRating) {
            feedback.innerText = selectedRating;

            form.style.display = "none";
            secondCard.style.display = "flex";
        } else {
            alert("Please select a rating before submitting!");
        }
    })
});