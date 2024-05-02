let animationFlag = true

const slides = document.getElementsByClassName("slides")
const dots = document.getElementsByClassName("dot")
let i
const showSlides = (n) => {
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"

    if (animationFlag) {
        slideIndex < 3 ? slideIndex++ : slideIndex = 1
        return new Promise((resolve) => setTimeout(resolve, 2000)).then((_) => showSlides(slideIndex))
    }
}

let slideIndex = 1
showSlides(slideIndex)

function currentSlide(n) {
    animationFlag = false
    showSlides(slideIndex = n)
}
