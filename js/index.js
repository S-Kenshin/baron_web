function startSlideshow() {
  var images = document.querySelectorAll(".slideshow-image");
  var index = 0;

  function showImage() {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove("active");
    }
    images[index].classList.add("active");
  }

  function nextImage() {
    index = (index + 1) % images.length;
    showImage();
  }

  setInterval(nextImage, 5000);
}

startSlideshow();
