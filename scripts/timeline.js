// Variables DOM
const timelineDOM = document.querySelector("#timeline-content");

// Each sections DOM
const navOne = document.querySelector("#timeline-nav-one");
const navTwo = document.querySelector("#timeline-nav-two");
const navThree = document.querySelector("#timeline-nav-three");

// Controllers
const upBtn = document.querySelector("#upButton")
const downBtn = document.querySelector("#downButton")

let currentTimeline = 0;

console.log(document.querySelector("#timelineBoxOne").classList)

downBtn.addEventListener("click", () => {
    
    for (i = 0; i < timelineDOM.children.length; i++) {
        if (timelineDOM.children[i].classList.contains("active") && i !== timelineDOM.children.length - 1) {
            currentTimeline = i;
            timelineDOM.children[i].classList.remove("active");
        }
    }
    timelineDOM.children[currentTimeline + 1].classList.add("active");
})


upBtn.addEventListener("click", () => {
    for (i = 0; i < timelineDOM.children.length; i++) {
        if (timelineDOM.children[i].classList.contains("active") && i !== 0) {
            currentTimeline = i;
            timelineDOM.children[i].classList.remove("active");
        }
    }
    timelineDOM.children[currentTimeline - 1].classList.add("active");
})


console.log(timelineDOM.children[1].classList);
console.log(timelineDOM.children[0]);