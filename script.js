let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
  });
}

function changeSlide(offset) {
  slideIndex = (slideIndex + offset + slides.length) % slides.length;
  showSlide(slideIndex);
}

prev.addEventListener('click', () => changeSlide(-1));
next.addEventListener('click', () => changeSlide(1));

// Auto-show first slide
showSlide(slideIndex);
