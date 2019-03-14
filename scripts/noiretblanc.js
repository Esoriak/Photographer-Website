/*
function myFunction() {
    // Code for Chrome, Safari, Opera
    document.querySelector(".test").style.WebkitTransform = "translate(20px)"; 
    document.querySelector(".test").innerHtml =" asd";
    // Code for IE9
    document.querySelector(".test").style.msTransform = "translate(20px)"; 
    // Standard syntax
    document.querySelector(".test").style.transform = "translate(20px)"; 
}

document.querySelectorAll("i").addEventListener("click", function() {
  console.log('clic');
  myFunction();
})
*/

let audio = $("#audioID")[0];
$("ul").click(function() {
    audio.play();
})