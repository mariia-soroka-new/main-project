const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

var $btnTop = $(".btn-top")
$(window).on("scroll", function(){
    if ($(window).scrollTop() >= 10){
        $btnTop.fadeIn();
    }else{
        $btnTop.fadeOut();
    }
});

$btnTop.on( "click", function(){
    $("html, body").animate({scrollTop:0}, 900)
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}