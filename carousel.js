let currentIndex = 0;
const imageEl = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function changeSlide(direction) {
  currentIndex += direction;
  imageEl.src = images[currentIndex];

  // Toggle button visibility
  prevBtn.style.display = currentIndex > 0 ? 'inline-block' : 'none';
  nextBtn.style.display = currentIndex < images.length - 1 ? 'inline-block' : 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  prevBtn.style.display = currentIndex > 0 ? 'inline-block' : 'none';
  nextBtn.style.display = currentIndex < images.length - 1 ? 'inline-block' : 'none';
});