'use strict';
const classActive = document.getElementById('modal_main');
classActive.className = 'modal modal_active';
const modalClose = document.getElementsByClassName('modal__close');
modalClose[0].onclick = () => {
	classActive.className = 'modal';
}
const showSuccess = document.getElementsByClassName('show-success');
const modalSuccess = document.getElementById('modal_success');
showSuccess[0].onclick = () => {
	classActive.className = 'modal';
	modalSuccess.className = 'modal modal_active';
}
modalClose[2].onclick = () => {
	modalSuccess.className = 'modal';
}

