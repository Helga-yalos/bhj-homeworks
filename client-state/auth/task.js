'use strict';
const signIn = document.getElementById('signin');
signIn.classList.add('signin_active');

const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const login = document.getElementsByName('login')[0];
const password = document.getElementsByName('password')[0];
let result;
const userId = document.getElementById('user_id');

if (localStorage.getItem('id') != null) {
	welcomeUser(localStorage.getItem('id'));
	deauthor();
} 
	
signinForm.addEventListener('submit', () => {
	if ((login.value != '') && (password.value != '')) {
		event.preventDefault();
		authorization();
		} else {
			event.preventDefault();
			alert('Введите логин/пароль');
			}	
	});

function welcomeUser(id) {
	userId.textContent = `${id}`;
	welcome.classList.add('welcome_active');
}

function authorization() {
	const formData = new FormData(signinForm);
	let request = new XMLHttpRequest();
	request.responseType = 'json';
	request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
	request.send(formData);
	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			result = request.response;
			if (result.success) {
				localStorage.setItem('id', `${result.user_id}`);
				welcomeUser(result.user_id);
				deauthor();
				clearValue();
				} else {
					alert('Неверный логин/пароль');
					clearValue();
				}
			}
		}
}

function deauthor() {
	signinBtn.textContent = 'Выйти';
	signinBtn.addEventListener('click', () => {
		event.preventDefault();
		localStorage.clear();
		userId.textContent = '';
		welcome.classList.remove('welcome_active');
		signinBtn.textContent = 'Войти';
		clearValue();
		location.reload();
	})
}

function clearValue() {
	login.value = '';
	password.value = '';
}
