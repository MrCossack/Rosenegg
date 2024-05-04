/* global bootstrap: false */
(() => {
	'use strict'
	const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	tooltipTriggerList.forEach(tooltipTriggerEl => {
	  new bootstrap.Tooltip(tooltipTriggerEl)
	})
  })()

function openModal(text)
{
	//document.getElementById("lilieModal").style.display = "block";
	document.getElementById(text).style.display = "block";
}

function closeModal(text)
{
	document.getElementById(text).style.display = "none";
}

var slideIndex = 1;
//showSlides(slideIndex);

function plusSlides(n, sliderName) {
  showSlides(slideIndex += n, sliderName);
}

function currentSlide(n, sliderName) {
  showSlides(slideIndex = n, sliderName);
}

const sliderCaptionText = new Map();
sliderCaptionText.set("lilieSlider" , [ "lilieCaption", "Appartement Lilie", "Appartement Lilie Bad", "Appartement Lilie Küche", "Appartement Lilie Plan"]);
sliderCaptionText.set("roseSlider" , [ "roseCaption", "Appartement Rose", "Appartement Rose Küche", "Appartement Rose Küche", "Appartement Rose Plan"]);
sliderCaptionText.set("orchideeSlider" , [ "orchideeCaption", "Appartement Orchidee Wohnzimmer", "Appartement Orchidee Plan"]);

function showSlides(n, sliderName) {
  var i;
  var slides = document.getElementsByClassName(sliderName);
  var captionText = document.getElementById(sliderCaptionText.get(sliderName)[0]);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  
  captionText.innerHTML = sliderCaptionText.get(sliderName)[slideIndex];
}