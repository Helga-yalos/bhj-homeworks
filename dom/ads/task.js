'use strict';
const rotators = Array.from(document.getElementsByClassName('rotator'));
const rotatorCase = Array.from(document.getElementsByClassName('rotator__case'));
let time = 1000;
let index = [];

for (let i = 0; i < rotators.length; i++) {
	index.push(0);
	const rotator = Array.from(rotators[i].children);
	setInterval(() => {
		changeText(i,rotator);
	}, time)	
}		
		
function changeText(i,rotator) {
	((index[i] === (rotator.length - 1)) ? (index[i] = 0) : (index[i] ++));	
	rotator[index[i]].classList.add('rotator__case_active');
	for (let j = 0; j < rotator.length; j++) {
		if ((rotator[j]. classList.contains('rotator__case_active')) && ( index[i] !== j)) {
			rotator[j].classList.remove('rotator__case_active');
		}
	}
	rotator[index[i]].setAttribute('style', `color:${rotator[index[i]].dataset.color}`);
}


	