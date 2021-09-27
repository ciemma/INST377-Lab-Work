let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

const next = document.getElementById('carousel_button--next');
next.addEventListener("click", function() {
        moveToNextSlide();
    })

const prev = document.getElementById('carousel_button--prev');
prev.addEventListener("click", function() {
        moveToPrevSlide();
    })

function updateSlidePosition() {
    for ( let slide of slides){
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }

    slides[slidePosition].classList.add('carousel_item--visible')
}

function moveToNextSlide(){
    console.log("hello next")
    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide(){
    console.log("Hello prev")
    if(slidePosition === 0){
        slidePosition= totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}