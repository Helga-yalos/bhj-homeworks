'use strict';
const slider = Array.from(document.getElementsByClassName('slider__arrow'));//[div.slider__arrow.slider__arrow_prev, div.slider__arrow.slider__arrow_next]
const sliderItems = Array.from(document.querySelectorAll('div.slider__item'));//[div.slider__item.slider__item_active, div.slider__item, div.slider__item, div.slider__item, div.slider__item]
let index = 0;
const sliderDots = Array.from(document.querySelectorAll('div.slider__dot'));//[div.slider__dot.slider__dot_active, div.slider__dot, div.slider__dot, div.slider__dot, div.slider__dot]
sliderDots[index].classList.add('slider__dot_active'); 

function activeSlide(index) {
	sliderDots[index].classList.add('slider__dot_active');
	sliderItems[index].classList.add('slider__item_active'); 
	for (let j = 0; j < sliderItems.length; j++) {
		if (sliderItems[j].classList.contains('slider__item_active') && (index !== j)){
		sliderItems[j].classList.remove('slider__item_active');
		sliderDots[j].classList.remove('slider__dot_active');
		}
	}
}

for (let i = 0; i < slider.length; i++) {
	slider[i].onclick = () => {
		if (slider[i].classList.contains('slider__arrow_prev')) {
			(index === 0) ? (index = (sliderItems.length - 1)) : (index --);
		}
		if (slider[i].classList.contains('slider__arrow_next')) {
			(index === (sliderItems.length - 1)) ? (index = 0) : (index ++);
		}
		activeSlide(index);
	}
}

for (let i = 0; i < sliderDots.length; i ++) {
	sliderDots[i].onclick = () => {
		index = i;
		activeSlide(index);
	}
}

