'use strict';
(() => {
const click = document.getElementById('clicker__counter');
let counterClicker = parseInt(click.textContent);
const cookies = document.getElementById('cookie');
const speed = document.getElementById('clicker__speeder');
const date = Date.now();
let dateNow;
console.log(date);
cookies.onclick = () => {
	counterClicker++;
	dateNow = Date.now();
	click.textContent = counterClicker;
	speed.textContent = ((counterClicker) / ((dateNow - date) * 0.001)).toFixed(2);
	if (cookies.width === 200) {
		cookies.width = 300;
	} else {
		cookies.width = 200;
	}
}
}) ()