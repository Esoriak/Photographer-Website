// [DOM] - Variables DOM
const timelineDOM = document.querySelector("#timelineContent");

// [DOM] - Sections by ID
const navOne = document.querySelector("#timeline-nav-one");
const navTwo = document.querySelector("#timeline-nav-two");
const navThree = document.querySelector("#timeline-nav-three");

// [DOM] - Navigation 


// Controllers
const upBtn = document.querySelector("#upButton")
const downBtn = document.querySelector("#downButton")

// Function variables
let currentTimeline = 0;
const timelineLength = timelineDOM.children.length;

console.log(document.querySelector("#timelineBoxOne").classList)

// Function that changes section
const changeSection = (down = 0) => {
    for (i = 0; i < timelineDOM.children.length; i++) {
        if (timelineDOM.children[i].classList.contains("active") && i !== down) {
            currentTimeline = i;
            timelineDOM.children[i].classList.remove("active");
        }
    }
    if (down !== 0){
        timelineDOM.children[currentTimeline + 1].classList.add("active");
    }
    else {
        timelineDOM.children[currentTimeline - 1].classList.add("active");
    }
}

// Apply functions on down button click
downBtn.addEventListener("click", () => {
    changeSection(timelineLength - 1);
})
// Apply functions on up button click
upBtn.addEventListener("click", () => {
    changeSection();
});

//Apply functions on navigation side bar click


console.log(timelineDOM.children[1].classList);
console.log(timelineDOM.children[0]);