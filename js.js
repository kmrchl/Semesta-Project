let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlides(slideIndex);
setInterval(function(){ showSlides(slideIndex += 1); }, 2000);


function switchview(viewId) {
  const view1 = document.getElementById("love-letter");
  const view2 = document.getElementById("facts");

  if (viewId === "love-letter") {
    console.log("ini berfungsi")
    view1.style.display = "block";
    view2.style.display = "none";
  } else if(viewId === "facts"){
    view1.style.display = "none";
    view2.style.display = "block";
  }
}
