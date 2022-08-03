'use strict';

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i,
  slides = document.getElementsByClassName("fade"),
  dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let d1=document.getElementsByClassName("d1"),
d2=document.getElementsByClassName("d2"),
d3=document.getElementsByClassName("d3"),
d4=document.getElementsByClassName("d4"),
d5=document.getElementsByClassName("d5"),
divs  = ['d1', 'd2', 'd3', 'd4', 'd5'],
length  = divs.length,
index   = 1;
setInterval(function() {
  for(i=0; i<=divs.length; i++) {
    if(i == length) index = 0;
    document.getElementsByClassName('fade').src = images[index++];
  }
}, 1000);



  