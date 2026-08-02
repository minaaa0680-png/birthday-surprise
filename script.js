const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");

const nameInput = document.getElementById("nameInput");
const searchText = document.getElementById("searchText");

const welcomeName = document.getElementById("welcomeName");
const giftBtn = document.getElementById("giftBtn");

const music = document.getElementById("bgMusic");

const nextButtons = document.querySelectorAll(".nextBtn");


// Function to change pages
function showScreen(screenId) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

}



// Welcome button
startBtn.addEventListener("click", () => {

    showScreen("nameScreen");

});




// Name Entry

continueBtn.addEventListener("click", () => {

    const name = nameInput.value.trim().toLowerCase();


    if (name === "ahmer") {


        searchText.innerHTML = "✨ Searching the stars...";


        setTimeout(() => {

            searchText.innerHTML = "🌟 One special soul found.";

        }, 2000);



        setTimeout(() => {

            welcomeName.innerHTML = "Welcome, Ahmer 💙";

            showScreen("giftScreen");


        }, 3500);



    } else {


        searchText.innerHTML =
        "The stars are still searching... ✨";


    }

});






// Open Gift + Play Music

giftBtn.addEventListener("click", () => {


    music.play().catch(() => {

        console.log("Music requires user interaction");

    });


    showScreen("letter");


});







// Next Chapters

let chapters = [
    "reasons",
    "wish",
    "final"
];


let currentChapter = 0;



nextButtons.forEach(button => {


    button.addEventListener("click", () => {


        if(currentChapter < chapters.length){


            showScreen(chapters[currentChapter]);


            currentChapter++;


        }


    });


});







// Floating stars

function createStar(){


    const star = document.createElement("div");


    star.className = "floating-star";


    star.innerHTML = "✦";


    star.style.left = Math.random() * 100 + "%";


    star.style.top = Math.random() * 100 + "%";


    star.style.animationDuration =
    (3 + Math.random() * 5) + "s";



    document.body.appendChild(star);



    setTimeout(() => {

        star.remove();

    },8000);



}



setInterval(createStar,900);
