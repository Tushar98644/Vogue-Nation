const body = document.getElementById('body')
const logo = document.getElementById('logo')
const moto1 = document.getElementById('moto1')
const moto2 = document.getElementById('moto2')
const option =dcoument.getElementById('option')


function show() {
  logo.style.opacity = 1;
  moto1.style.opacity = 1;
  moto1.style.transform="translateX(-450px)";
  moto1.style.transitionDuration="0.5s";
  moto2.style.opacity = 1;
  moto2.style.transform="translateX(-450px)";
  moto2.style.transitionDuration="0.4s";
}

function leave() {
  logo.style.opacity = 0;
  moto1.style.opacity = 0;
  moto1.style.transform="translateX(-18.5rem)";
  moto2.style.opacity = 0;
  moto2.style.transform="translateX(-18.5rem)";

}

function show1(){
option.style.opacity=1;
option.style.transform="translateX(-30px)";
}

function leave1(){
  option.style.opacity=0;
  option.style.transform="translateX(30px)";
}