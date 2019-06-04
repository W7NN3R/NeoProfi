var slideIndex = 1, timer = 0;
showSlides(slideIndex);

function plusSlides(n) {
    if(slideIndex > 5){ slideIndex = 0};
    slideIndex++;
    timer--;
    showSlides(n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-slide";
    if(timer <= 0 ){
      setTimeout(plusSlides,5000); 
      timer++;
  } 
 
}
$(document).ready(function(){
      $(".hamburger-btn .fa-times").hide();

    $(".hamburger-btn .fa-bars").click(function(){
      $(this).hide();
      $(".hamburger-btn .fa-times").show();
      $(".mobile ul").addClass("active");
    });

    $(".hamburger-btn .fa-times").click(function(){
      $(this).hide();
      $(".hamburger-btn .fa-bars").show();
      $(".mobile ul").removeClass("active");
    });
    });

