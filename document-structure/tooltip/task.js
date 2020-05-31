'use strict';

const linkHasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
const tooltip = [];

for (let i = 0; i < linkHasTooltip.length; i ++){
	createTooltip(i);
	linkHasTooltip[i].addEventListener('click', () =>{
		event.preventDefault();
		activeTooltip(i);
	})
}

function createTooltip(i){
	tooltip[i] = document.createElement('div');
	tooltip[i].classList.add('tooltip');
	tooltip[i].innerText = `${linkHasTooltip[i].title}`;
	linkHasTooltip[i].insertAdjacentElement('afterEnd', tooltip[i]);
}

function activeTooltip(i) {
	tooltip[i].classList.toggle('tooltip_active');
	tooltip[i].style = `left:${linkHasTooltip[i].getBoundingClientRect().left}px`;
	for (let j = 0; j < tooltip.length; j ++) {
		if (tooltip[j].classList.contains('tooltip_active') && (j != i)) {
			tooltip[j].classList.remove('tooltip_active');
		}
	}
}

