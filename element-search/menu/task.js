'use strict';
const menuLink = Array.from(document.getElementsByClassName('menu__link'));
const menuSub = Array.from(document.querySelectorAll('ul.menu.menu_sub'));
const menu = menuLink.filter(isList);

function isList(link) {
	for (let i = 0; i < menuSub.length; i++) {
		if (menuSub[i].closest('li') === link.closest('li')){
			return true;
		}
	}
	return false;
}

function clearMenuSub(i){
	for (let j = 0; j < menuSub.length; j++) {
		if (menuSub[j].classList.contains('menu_active') && (i !== j)){
		menuSub[j].classList.remove('menu_active');
		}
	}
}

for (let i = 0; i < menu.length; i++) {
	menu[i].onclick = () => {
		menuSub[i].classList.toggle('menu_active');
		clearMenuSub(i);
		return false;
	}
}



