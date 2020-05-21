'use strict';
const dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownList = Array.from(document.getElementsByClassName('dropdown__list'));
const dropdownItem = Array.from(document.getElementsByClassName('dropdown__item'));

for (let i = 0; i < dropdownValue.length; i++) {
dropdownValue[i].addEventListener('click', () => {
	dropdownList[i].classList.toggle('dropdown__list_active');
	event.preventDefault();
})}

for (let i = 0; i < dropdownItem.length; i++) {
dropdownItem[i].addEventListener('click', () => {
	changeTitle(i);
	event.preventDefault();
})}

function changeTitle(i) {
	for (let j = 0; j < dropdownValue.length; j ++) {
		if (dropdownItem[i].closest('div.dropdown') == dropdownValue[j].closest('div.dropdown')) {
			dropdownValue[j].textContent = dropdownItem[i].firstElementChild.textContent;
			dropdownList[j].classList.remove('dropdown__list_active');
		}
	}
}

