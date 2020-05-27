'use strict';
const interestCheck = Array.from(document.getElementsByClassName('interest__check'));
const interestActive = Array.from(document.getElementsByClassName('interests_active'));
const checkUl = interestCheck.filter((elem) => {
	for (let i = 0; i < interestActive.length; i ++) {
		const result = elem.closest('li.interest').contains(interestActive[i]);
		if (result) {
			return result;
		}
		}
});

for (let i = 0; i < checkUl.length; i ++) {
	checkUl[i].addEventListener('click', () => {
	checkIn(checkUl[i]);
})
}

function checkIn(element) {
	const checkedLi = interestCheck.filter((elem)=>{
		return (elem.closest('ul.interests_active') == element.parentElement.nextElementSibling);	
		});
	if (element.checked) {
		elementsCheck(checkedLi,true);
		} else {
			elementsCheck(checkedLi,false);
		}
}

function elementsCheck(checkedLi, check) {
	for (let j = 0; j < checkedLi.length; j ++) {
			checkedLi[j].checked = check;
		}
}