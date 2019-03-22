$(function(){
  $('.btnli').click(function(){
    $('#icon').hasClass('open') ? $('#icon').removeClass('open'):$('#icon').addClass('open')
  })
})

let audio = $("#audioID")[0];
$(".btnli").click(function() {
    audio.play();
})

/*const noneOpacity = document.getElementsByClassName('flash');
const buttonBtnLi = document.getElementsByClassName('btnli');

console.log(buttonBtnLi);

function opacityButton() {
}
console.log(buttonBtnLi)*/