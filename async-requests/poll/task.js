'use strict';
const pollTitle = document.getElementById('poll__title'); 
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		typePoll(xhr.response);
		changeAnswer(xhr.responce);
	}
}

function typePoll(obj){
	const question = obj['data']['title'];
	pollTitle.textContent = question;
	const answer = obj['data']['answers'];
	for (let i = 0; i < answer.length; i ++) {
		let btn = document.createElement('button');
			btn.className = 'poll__answer';
			btn.textContent = answer[i];
		pollAnswers.insertAdjacentElement('beforeEnd', btn);
	}
}

function changeAnswer(obj){
const answerPoll = Array.from(document.getElementsByClassName('poll__answer'));
let result = [];
console.log(answerPoll);
 	for (let j = 0; j < answerPoll.length; j ++) {
 		answerPoll[j].addEventListener('click', () => {
 			alert('Спасибо, ваш голос засчитан!');	
 		})
 	}
}