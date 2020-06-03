'use strict';

const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
	localStorage.setItem('lastInput', editor.value);
})
editor.value = localStorage.getItem('lastInput');
console.log(editor.value);