var images = [
  "https://via.placeholder.com/400x200?text=Slide+1",
  "https://via.placeholder.com/400x200?text=Slide+2",
  "https://via.placeholder.com/400x200?text=Slide+3"
];

var index = 0;
var imgEl = document.getElementById("slide");

// Update the image element to the current index.
function showImage() {
  imgEl.src = images[index];
}

document.getElementById("prevBtn").addEventListener("click", function () {
  index = (index - 1 + images.length) % images.length;
  showImage();
});

document.getElementById("nextBtn").addEventListener("click", function () {
  index = (index + 1) % images.length;
  showImage();
});

showImage();
