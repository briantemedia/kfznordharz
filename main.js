document.addEventListener("DOMContentLoaded", function() {
  const sliderWrapper = document.querySelector('.slider__wrapper');
  const slides = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.slider__arrow--prev');
  const nextBtn = document.querySelector('.slider__arrow--next');

  let currentIndex = 0;
  const totalCards = slides.length; // Jede Karte entspricht einer Seite

  function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  updateSlider();

  // Header-Hintergrund beim Scrollen anpassen:
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
