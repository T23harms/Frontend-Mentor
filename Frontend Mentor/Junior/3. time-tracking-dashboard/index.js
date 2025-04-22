document.addEventListener("DOMContentLoaded", () => {
    const dailyHrs = document.querySelectorAll(".daily");
    const weeklyHrs = document.querySelectorAll(".weekly");
    const monthlyHrs = document.querySelectorAll(".monthly");
    const buttons = document.querySelectorAll(".time button");
    const dailyBtn = document.getElementById("daily-button");
    const weeklyBtn = document.getElementById("weekly-button");
    const monthlyBtn = document.getElementById("monthly-button");

    function showTimeframe(selected, hide1, hide2, activeBtn) {
        selected.forEach(el => el.style.display = "block");
        hide1.forEach(el => el.style.display = "none");
        hide2.forEach(el => el.style.display = "none");

        buttons.forEach(btn => btn.classList.remove("active"));
        activeBtn.classList.add("active");
    }

    dailyBtn.addEventListener("click", () => showTimeframe(dailyHrs, weeklyHrs, monthlyHrs, dailyBtn));
    weeklyBtn.addEventListener("click", () => showTimeframe(weeklyHrs, dailyHrs, monthlyHrs, weeklyBtn));
    monthlyBtn.addEventListener("click", () => showTimeframe(monthlyHrs, dailyHrs, weeklyHrs, monthlyBtn));

    showTimeframe(weeklyHrs, dailyHrs, monthlyHrs, weeklyBtn);
});