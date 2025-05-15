window.onload = function () {
  const slides = document.querySelectorAll('.slides img');
  const dotsContainer = document.getElementById('dots');
  let currentIndex = 0;
  let slideInterval;

  // ساخت دات‌ها
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
      resetTimer();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('button');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  showSlide(currentIndex);
  resetTimer();
};

const boxes = document.querySelectorAll('.section');

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.3
    });

    boxes.forEach(box => observer2.observe(box));

const el = document.querySelector('.page');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.3
});