'use strict';
const loader = document.getElementById('loader');
const item = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		typeCurrency(xhr.response);
		loader.classList.remove('loader_active');
	}
}

function typeCurrency(obj){
	const valute = obj['response']['Valute'];
 	for ( let prop in valute) {
 		const valObj = valute[prop];
 		const charCode = valObj['CharCode'];
 		const value = valObj['Value'];
 		const clone = item.firstElementChild.cloneNode();
 		item.insertAdjacentElement('beforeEnd',clone);
 		clone.insertAdjacentHTML('beforeEnd',`<div class="item__code">${charCode}</div><div class="item__value">${value}</div><div class="item__currency">руб.</div>`);
 	}
}