'use strict';
const taskInput = document.getElementById('task__input');
const taskBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');
const removeTask = Array.from(document.getElementsByClassName('task__remove'));
const tasks = Array.from(document.getElementsByClassName('task'))

let index = 0;

taskInput.addEventListener('keydown', (event) => {
	if (event.keyCode === 13) {managerTask()}; 
})

taskBtn.addEventListener('click', () =>{
	event.preventDefault();
	managerTask();
})

function managerTask() {
	if (taskInput.value != '') {
		let elemDiv = document.createElement('div');
			elemDiv.className = 'task';
		taskList.insertAdjacentElement('beforeEnd', elemDiv);
		let taskTitle = document.createElement('div');
			taskTitle.className = 'task__title';
			taskTitle.textContent = `${taskInput.value}`;
		elemDiv.insertAdjacentElement('afterBegin', taskTitle);
		let linkRemove = document.createElement('a');
			linkRemove.href = "#";
			linkRemove.className = 'task__remove';
			linkRemove.insertAdjacentHTML('afterBegin','&times;');
		elemDiv.insertAdjacentElement('beforeEnd', linkRemove);
		linkRemove.addEventListener('click', () => {
			event.preventDefault();
			elemDiv.remove();
		})
		taskInput.value = '';
	}
}

