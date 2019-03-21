// [DOM] - Variables DOM
const timelineDOM = document.querySelector("#timelineContent");
const genesisParaph = document.querySelector(".paragraph-wrapper");
const readBtn = document.querySelector(".read-button"); 

// [DOM] - Navigation 
let navList = document.querySelectorAll(".timelineList");

const navOne = document.querySelector("#timeline-nav-one");
const navTwo = document.querySelector("#timeline-nav-two");
const navThree = document.querySelector("#timeline-nav-three");
const navFour = document.querySelector("#timeline-nav-four");
const navFive = document.querySelector("#timeline-nav-five");

// Controllers
const upBtn = document.querySelector("#upButton")
const downBtn = document.querySelector("#downButton")

// Function variables
let currentTimeline = 0;
const timelineLength = timelineDOM.children.length;

console.log(document.querySelector("#timelineBoxOne").classList)

// Function that changes section
const nextSection = (down) => {
    for (i = 0; i < timelineDOM.children.length; i++) {
        if (timelineDOM.children[i].classList.contains("active")) {
            timelineDOM.children[i].classList.remove("active");
        }
    }
    if (down === "down") {
        currentTimeline += 1;
        timelineDOM.children[currentTimeline].classList.add("active");
        // timelineDOM.children[currentTimeline].fadeIn("slow");
    }
    else {
        currentTimeline -= 1;
        timelineDOM.children[currentTimeline].classList.add("active");
        // timelineDOM.children[currentTimeline].fadeIn("slow");
    }
    console.log(currentTimeline);
}

const goToSection = (num) => {
    if (num !== currentTimeline) {
        timelineDOM.children[currentTimeline].classList.remove("active");
        currentTimeline = num;
        timelineDOM.children[currentTimeline].classList.add("active");
    }
}

//Apply functions on navigation side bar click
navList.forEach(elem => {
    elem.addEventListener("click", () => {
        switch (elem.id) {
            case "timeline-nav-one":
                goToSection(0);
            break;
            case "timeline-nav-two":
                goToSection(1);
            break;
            case "timeline-nav-three":
                goToSection(2);
            break;
            case "timeline-nav-four":
                goToSection(3);
            break;
            case "timeline-nav-five":
                goToSection(4);
            break;
            default:
            console.log("not found");
        }
    })
});

// Apply functions on down button click
downBtn.addEventListener("click", () => {
    if (currentTimeline !== 4) {
        nextSection("down");
    }
});
// Apply functions on up button click
upBtn.addEventListener("click", () => {
    if (currentTimeline !== 0) {
        nextSection();
    }
});

// Animation of genesis section

// readBtn.addaddEventListener("click", () => {
//     genesisParaph.classList.add("slide-down-anim");
// });