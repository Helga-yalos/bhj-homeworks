'use strict';

const modalMain = document.getElementById('modal_main');
const modalClose = Array.from(document.getElementsByClassName('modal__close'));
const showSuccess = document.querySelector('a.show-success');
const modalSuccess = document.getElementById('modal_success');
modalMain.classList.add('modal_active');
const modalCloseTimes = modalClose.filter((modal) => {return (modal.classList.contains('modal__close_times'))});

for (let i = 0; i < modalCloseTimes.length; i ++) {
	modalCloseTimes[i].onclick = () => {
		closed(modalCloseTimes[i]);
	}
}

showSuccess.onclick = () => {
	closed(showSuccess);
	modalSuccess.classList.add('modal_active'); 
}

function closed(modal) {
	modal.closest('div.modal').classList.remove('modal_active');
}