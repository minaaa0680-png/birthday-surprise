const startBtn = document.getElementById("startBtn");

const hiddenSections = document.querySelectorAll(".hidden");

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";

    hiddenSections.forEach(section => {

        section.style.opacity = "1";

        section.style.transition = "1s";

    });

    window.scrollTo({
        top: document.querySelector(".letter").offsetTop,
        behavior: "smooth"
    });

});
