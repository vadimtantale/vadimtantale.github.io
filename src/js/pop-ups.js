const wrapper = document.querySelector('.wrapper');

document.addEventListener('click', (event) => {
	// let action = event.target.dataset.action;
	let action = event.target.getAttribute('data-action');
	console.log(action);
	if (action == 'sidebar') {
		openPopup(action);
	} 
	if (action == 'feedback' || action == 'order-call') {
		closePopup('sidebar');
		openPopup(action);
	}
});

function openPopup(action) {
	wrapper.classList.add('wrapper--disactive');
	const popup = document.querySelector(`.${action}`);
	popup.classList.add(`${action}--active`);
	activateCloseButton(action);
}

function activateCloseButton(action) {
	const popup = document.querySelector(`.${action}`);

	const closeButton = popup.querySelector('.button--close');
	closeButton.addEventListener('click', () => {
		closePopup(action);
	}, {once: true});
}

function closePopup(action) {
	wrapper.classList.remove('wrapper--disactive');
	const popup = document.querySelector(`.${action}`);
	popup.classList.remove(`${action}--active`);
}