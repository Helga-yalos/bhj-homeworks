'use strict';
const book = document.getElementById('book');
const fontSize = Array.from(document.getElementsByClassName('font-size'));
const color = Array.from(document.getElementsByClassName('color'));
const colorText = color.filter((elem) => {return (elem.parentElement.classList.contains('book__control_color'))});
const colorBack = color.filter((elem) => {return (elem.parentElement.classList.contains('book__control_background'))});

for (let i = 0; i < fontSize.length; i++) {
	fontSize[i].addEventListener('click', () =>{
		changeActive(i,fontSize,'font-size_active');
		checkText(i,fontSize,'size','book_fs-',book,'big','small');
		event.preventDefault();
	})
}

for (let i = 0; i < colorText.length; i ++) {
	colorText[i].addEventListener('click', () => {
		changeActive(i,colorText,'color_active');
		checkText(i,colorText,'color','book_color-',book,'gray','whitesmoke');
		event.preventDefault();
	})
}

for (let i = 0; i < colorBack.length; i ++) {
	colorBack[i].addEventListener('click', () => {
		changeActive(i,colorBack,'color_active');
		checkText(i,colorBack,'color','book_bg-',book,'gray','black');
		event.preventDefault();
	})
}

function changeActive(i, element, string) {
	element[i].classList.add(string);
	for (let j = 0; j < element.length; j ++) {
		if ((element[j].classList.contains(string)) && (i !== j)){
			element[j].classList.remove(string);
		}
	}
}

function checkText(i,element,parametr,string,tag,par1,par2) {
	const dataParametr = element[i].dataset[parametr];
	if ((dataParametr != par1) && (dataParametr != par2)){
		tag.classList.remove(`${string}${par1}`);
		tag.classList.remove(`${string}${par2}`);
	}
	if (dataParametr == par1) {
		tag.classList.remove(`${string}${par2}`);
		tag.classList.add(`${string}${dataParametr}`);
	}
	if (dataParametr == par2) {
		tag.classList.remove(`${string}${par1}`);
		tag.classList.add(`${string}${dataParametr}`);
	}	
}
	