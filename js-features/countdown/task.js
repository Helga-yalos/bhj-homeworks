'use strict';
(() => {
const timer = document.getElementById('timer');
let timerCounter = parseInt(timer.textContent);
const timerId =	setInterval(() => {
		timerCounter--;
	    timer.textContent = timerCounter;
	    if(timerCounter === 0) {
			clearInterval(timerId);
			alert('Вы победили в конкурсе!');
		}
	}, 1000);
}) ()
