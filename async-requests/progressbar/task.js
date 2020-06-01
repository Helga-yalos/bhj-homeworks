'use strict';
const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', () => {
	event.preventDefault();
	const formData = new FormData(form);
	let request = new XMLHttpRequest();
	request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	request.send(formData);
	request.onreadystatechange = function() {
		if (request.readyState === 1) {
			progress.value = 0.01;
		}
		if (request.readyState === 2) {
			progress.value = 0.1;
		}
		if (request.readyState === 3) {
			const id = setTimeout(() =>{
				if (progress.value < 0.95){
					progress.value += 0.001;
				} else clearTimeout(id);
			}, 3000)
		}
		if (request.readyState === 4) {
			progress.value = 1;
		}	
	}
})

