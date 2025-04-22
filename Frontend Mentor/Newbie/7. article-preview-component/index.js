document.addEventListener("DOMContentLoaded", () => {
    const shareBtn = document.querySelector(".share-btn");
    const shareBox = document.querySelector(".share-box");
  
    shareBtn.addEventListener("click", () => {
      shareBtn.classList.toggle("active");
      shareBox.classList.toggle("active"); 
    });

    document.addEventListener("click", (event) => {
        if (!shareBtn.contains(event.target) && !shareBox.contains(event.target)) {
            shareBtn.classList.remove("active");
            shareBox.classList.remove("active");
        }
    });
  });