'use strict';
const tab = Array.from(document.getElementsByClassName('tab'));
const tabContent = Array.from(document.getElementsByClassName('tab__content'));

for (let j = 0; j < tab.length; j ++){
	tab[j].addEventListener('click', () => checked(j));
}

function checked(index){
	tab[index].classList.add('tab_active');
	tabContent[index].classList.add('tab__content_active');
	for (let i = 0; i < tab.length; i++) {
		if (tab[i].classList.contains('tab_active') && (i !== index) && (tab[i].closest('div.tab__navigation') == tab[index].closest('div.tab__navigation'))){
			tab[i].classList.remove('tab_active');
			tabContent[i].classList.remove('tab__content_active');
		}
	}
}
