const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');

    // Check for next slide, check if it has the next sibling element
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }

    // I don't think the follow part is required. A lot of the comment in the video said it was not required.
    // setTimeout(() => current.classList.remove('current'), 200);
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');

    // Check for prev slide, check if it has the next sibling element
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }

    // I don't think the follow part is required. A lot of the comment in the video said it was not required.
    // setTimeout(() => current.classList.remove('current'), 200);
};

// Button events
next.addEventListener('click', e => nextSlide());
prev.addEventListener('click', e => prevSlide());


