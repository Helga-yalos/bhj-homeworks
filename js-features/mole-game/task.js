'use strict';
(() => {
const deadMole = document.getElementById('dead');
let deadMoles = parseInt(deadMole.textContent);
const lostHole = document.getElementById('lost');
let lostHoles = parseInt(lostHole.textContent);
let hole = [];

for (let i = 0; i <= 8; i++) {
	hole[i] = getHole(i+1);
}
for (let j = 0; j < hole.length; j++){
	hole[j].onclick = () => {
		if (hole[j].className.includes('hole_has-mole')) {
			deadMoles++;
			deadMole.textContent = deadMoles;
			if (deadMoles === 10) {
				alert('Вы победили');
				reNewResult();
				}
	    	} else {
	        	lostHoles++;
	        	lostHole.textContent = lostHoles;
	        	if (lostHoles === 5) {
					alert('Игра окончена');
					reNewResult();
					}
	    	}
   	 }
}
function reNewResult() {
	deadMoles = 0;
	deadMole.textContent = deadMoles;
	lostHoles = 0;
	lostHole.textContent = lostHoles;        
}
function getHole(index) {
	return document.getElementById(`hole${index}`);
}
} )()

