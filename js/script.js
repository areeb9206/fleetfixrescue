console.log("Fleet Fix Rescue loaded");


const menuBtn = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });


  const track = document.querySelector('.testimonial-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');
  const carousel = document.querySelector('.testimonial-carousel');

  let index = 0;
  let autoSlide;
  const gap = 40;

  function visibleCards() {
    return window.innerWidth <= 900 ? 1 : 2;
  }

  function cardWidth() {
    return cards[0].offsetWidth + gap;
  }

  function updateCarousel() {
    track.style.transform = `translateX(-${index * cardWidth()}px)`;
  }

  function nextSlide() {
    if (index < cards.length - visibleCards()) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  }

  function prevSlide() {
    if (index > 0) {
      index--;
    } else {
      index = cards.length - visibleCards();
    }
    updateCarousel();
  }

  next.addEventListener('click', () => {
    nextSlide();
    restartAutoSlide();
  });

  prev.addEventListener('click', () => {
    prevSlide();
    restartAutoSlide();
  });

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 1000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);

  window.addEventListener('resize', updateCarousel);

  startAutoSlide();