'use strict';
const sliderPrev = document.getElementsByClassName('slider__arrow_prev');
const sliderNext = document.getElementsByClassName('slider__arrow_next');
const sliderItems = Array.from(document.querySelectorAll('div.slider__item'));
let index = 0;
const sliderDots = Array.from(document.querySelectorAll('div.slider__dot'));
sliderDots[0].className = 'slider__dot slider__dot_active';

sliderPrev[0].onclick = () => {
	sliderItems[index].className = 'slider__item';
	sliderDots[index].className = 'slider__dot';
	(index === 0) ? (index = (sliderItems.length - 1)) : (index --);
	sliderItems[index].className = 'slider__item slider__item_active';
	sliderDots[index].className = 'slider__dot slider__dot_active';
}
	
sliderNext[0].onclick = () => {
	sliderItems[index].className = 'slider__item';
	sliderDots[index].className = 'slider__dot';
	(index === (sliderItems.length - 1)) ? (index = 0) : (index ++);
	sliderItems[index].className = 'slider__item slider__item_active';
	sliderDots[index].className = 'slider__dot slider__dot_active';
}

for (let i = 0; i < sliderDots.length; i ++) {
	sliderDots[i].onclick = () => {
		sliderItems[index].className = 'slider__item';
		sliderDots[index].className = 'slider__dot';
		sliderDots[i].className = 'slider__dot slider__dot_active';
		sliderItems[i].className = 'slider__item slider__item_active';
		index = i;
		}
}
