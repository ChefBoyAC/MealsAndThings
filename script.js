// this is for the carousel 

const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots');
let currentSlide = 0;

// Create navigation dots
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
        goToSlide(i);
    });
}

// Set the first dot as active
dotsContainer.children[currentSlide].classList.add('active');

function goToSlide(index) {
    slides[currentSlide].style.display = 'none';
    dotsContainer.children[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].style.display = 'block';
    dotsContainer.children[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

// Change slide every 5 seconds (adjust the interval as needed)
const interval = setInterval(nextSlide, 5000);