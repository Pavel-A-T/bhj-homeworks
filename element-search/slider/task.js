const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const slider = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
//Индекс для отслеживания, какой слайд в данный момент активен
let index = 0;

const activeSlide = n => {
    for (slide of slider) {
        slide.classList.remove("slider__item_active");
    }
    slider[n].classList.add("slider__item_active");
}

const getCurrentSlide = (ind) => {
    dotActive(ind);
    activeSlide(ind);
}

const dotActive = n => {
    for (dot of dots) {
        dot.classList.remove("slider__dot_active");
    }
    dots[n].classList.add("slider__dot_active");
}

const nextSlide = () => {
    if (index === slider.length - 1) {
        index = 0;
        getCurrentSlide(index);
    }
    else {
        index++;
        getCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index === 0) {
        index = slider.length - 1;
        getCurrentSlide(index);
    }
    else {
        index--;
        getCurrentSlide(index);
    }
}

next.onclick = () => {
    nextSlide();
    return false;
}

prev.onclick = () => {
    prevSlide();
    return false;
}

dots.forEach((item, indexDot) => {
    item.onclick = () => {
        index = indexDot;
        getCurrentSlide(index);
        return false;
    }
})

