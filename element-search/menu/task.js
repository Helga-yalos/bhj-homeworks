'use strict';
const menuLink = Array.from(document.getElementsByClassName('menu__link'));
const menuSub = document.querySelectorAll('ul.menu.menu_sub');
for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].onclick = () => {
		if (menuSub[0].closest('li') === menuLink[i].closest('li')) {
			menuSub[0].className = 'menu menu_sub menu_active';
			menuSub[1].className = 'menu menu_sub';
			return false;
		}
		if (menuSub[1].closest('li') === menuLink[i].closest('li')) {
			menuSub[1].className = 'menu menu_sub menu_active';
			menuSub[0].className = 'menu menu_sub';
			return false;
		}
	}
}