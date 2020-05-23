'use strict';
const reveal = Array.from(document.getElementsByClassName('reveal'));

for (let i = 0; i < reveal.length; i++) {
	document.addEventListener('scroll', () => inViewport(reveal[i]));
}

function inViewport(elem) {
	if (elem.getBoundingClientRect().top < window.innerHeight) {
		elem.classList.add('reveal_active');
	}
	if ((elem.getBoundingClientRect().bottom < 0) || (elem.getBoundingClientRect().top > window.innerHeight)){
		elem.classList.remove('reveal_active');
	}
}
	