'use strict';
const productList = Array.from(document.getElementsByClassName('product'));
const quantity = Array.from(document.getElementsByClassName('product__quantity-control'));
const addedProduct = Array.from(document.getElementsByClassName('product__add'));
const basket = document.querySelector('.cart__products');
const images = Array.from(document.getElementsByClassName('product__image'));
const quantityValue = Array.from(document.getElementsByClassName('product__quantity-value'));

for (let i = 0; i < quantity.length; i++) {
	quantity[i].addEventListener('click', () => {
		if (quantity[i].classList.contains('product__quantity-control_dec')) {
			const elem = quantity[i].nextElementSibling;
			let elemQuantity = Number(elem.textContent);
			(elemQuantity === 1) ? elemQuantity = 1 : elemQuantity --;
			elem.textContent = elemQuantity;
		}
		if (quantity[i].classList.contains('product__quantity-control_inc')) {
			const elem = quantity[i].previousElementSibling;
			let elemQuantity = Number(elem.textContent);
			elemQuantity ++; 
			elem.textContent = elemQuantity;
		}
	})
}

for (let i = 0; i < addedProduct.length; i ++) {
	addedProduct[i].addEventListener('click', () => {
		addedBasket(productList[i], i);
	})
}

function addedBasket(product, i) {
 	if (checkCart(product,i)) {
 		return
 	} else {
 		createCartProduct(product, i)
 	}
}

function createCartProduct(product, i) {
	let elem = document.createElement('div');
		elem.className = 'cart__product';
		elem.dataset.id = product.dataset.id;
	basket.insertAdjacentElement('beforeEnd', elem);
	let image = document.createElement('img');
		image.className = 'cart__product-image';
		image.setAttribute('src', `${images[i].getAttribute('src')}`);
	elem.insertAdjacentElement('afterBegin', image);
	let quantityCart = document.createElement('div');
		quantityCart.className = 'cart__product-count';
		quantityCart.textContent = quantityValue[i].textContent;
	elem.insertAdjacentElement('beforeEnd', quantityCart);
}

function checkCart(product, i) {
	const productsCart = Array.from(basket.children);
	for ( let t = 0; t < productsCart.length; t++) {
		if (productsCart[t].dataset.id == product.dataset.id) {
			const elem = productsCart[t].lastElementChild;
			elem.textContent = Number(elem.textContent) + Number(quantityValue[i].textContent);
			return true;
		}
	}	
}
