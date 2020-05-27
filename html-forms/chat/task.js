'use strict';
const chatWidgetSide = document.querySelector('.chat-widget__side');
const chatInput = document.getElementById('chat-widget__input');
const chatBotAnswers = ['Вы кто такой?', 'К сожалению, все операторы заняты' , 'До свидания' , 'Это Вы мне?' , 'Не очень приятно с Вами познакомиться' , 'Вы ещё ничего не купили, а уже хамите' , 'Ваш заказ не оформлен' , 'Привет-привет!' , 'Привет, пиши!!!' , 'Привет и пока!'];
const chatWidgetMessages = document.getElementById('chat-widget__messages');


chatWidgetSide.addEventListener('click', () => {
	document.querySelector('.chat-widget').classList.add('chat-widget_active');
});

chatInput.addEventListener('keydown', (e) => {
	typeChat(e);
})

function typeChat(event) {
	const message = chatInput.value;
	if (event.keyCode === 13 && message != '') {
		const time = getTimeNow();
		const answer = chatBotAnswers[Math.round(Math.random() * 9)];
		console.log(answer);
		chatWidgetMessages.innerHTML += `<div class="message message_client"><div class="message__time">${time}</div><div class="message__text">${message}</div></div><div class="message"><div class="message__time">${time}</div><div class="message__text">${answer}</div></div>`;
		chatInput.value = '';
	}
}
function getTimeNow() {
	const date = new Date();
	const hours = Number(date.getHours());
	const minutes = Number(date.getMinutes());
	const timeHours = ( hours < 10 ? `0${hours}` : `${hours}`);
	const timeMinutes = ( minutes < 10 ? `0${minutes}` : `${minutes}`);
	return `${timeHours}:${timeMinutes}`;
}
