const body = document.getElementById('body')
const logo = document.getElementById('logo')
const moto1 = document.getElementById('moto1')
const moto2 = document.getElementById('moto2')
const option =document.getElementById('option')
const triangle=document.getElementById('triangle')
const shaper=document.getElementById('shaper')
const secondpage=document.getElementById('secondpage')
const heading1=document.getElementById('heading1')
const moto6=document.getElementById('moto6')
const heading2=document.getElementById('heading2')
const moto7=document.getElementById('moto7')
const heading3=document.getElementById('heading3')
const moto8=document.getElementById('moto8')
const triclick1=document.getElementById('triclick1')
const triclick2=document.getElementById('triclick2')
const prize=document.getElementById('prize')
const it=document.getElementById('it')

// const main=document.getElementById('main')
// const moto=document.getElementById('moto')


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

function press(){
  body.style.backdropFilter="blur(15px)";
  // secondpage.style.backdropFilter="blur(15px)";
}

function point() {
   heading1.style.opacity=1;
   moto6.style.opacity=1;
}

function pointoff() {
  heading1.style.opacity=0;
  moto6.style.opacity=0;
}

function point1() {
  heading2.style.opacity=1;
  moto7.style.opacity=1;
}

function pointoff1() {
 heading2.style.opacity=0;
 moto7.style.opacity=0;
}

function menu(){
  triclick1.style.opacity=1;
  triclick2.style.opacity=1;
  triangle.style.opacity=0;
}

function point2() {
  heading3.style.opacity=1;
  moto8.style.opacity=1;
}

function pointoff2() {
  heading3.style.opacity=0;
  moto8.style.opacity=0;
 }
 
 function visible(){
  it.style.opacity=1;
  prize.style.opacity=1;
  option.style.opacity=1;
  option.style.transform="translateX(5.3rem)"
  option.style.transitionDuration="0.5s"
  prize.style.transitionDuration="0.5s"
  it.style.transitionDuration="0.5s"
 }
 
 function invisible(){
  it.style.opacity=0;
  prize.style.opacity=0;
  option.style.opacity=0;
  option.style.transform="translateX(-6rem)"
  
 }
 