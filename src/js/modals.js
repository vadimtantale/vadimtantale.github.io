const wrapper = document.querySelector('.wrapper');
const modals = document.querySelectorAll('[data-name]');

document.addEventListener('click', (event) => {
	const action = event.target.getAttribute('data-action');
	
	if (action && action !== 'close') {
		const modal = document.querySelector(`.${action}`);
		const sidebarActive = document.querySelector('.sidebar--active');
	
		if (sidebarActive) {
			sidebarActive.classList.remove('sidebar--active');
			wrapper.classList.remove('wrapper--disactive');
		}
	
		openModal(modal, action);
	}

	if (action === 'close') {
		wrapper.classList.remove('wrapper--disactive');
		deleteActiveClass(modals);
	}

	if (action === 'wrapper') {
		if(!wrapper.classList.contains('wrapper--disactive')) return;

		wrapper.classList.remove('wrapper--disactive');
		deleteActiveClass(modals);
	}
});

function deleteActiveClass(lists) {
	for (let elem of lists) {
		const modal = elem.getAttribute('data-name');
		
		if (elem.classList.contains(`${modal}--active`)) {
			elem.classList.remove(`${modal}--active`);
		}
	}
}

function openModal(elem, act) {
	wrapper.classList.add('wrapper--disactive');
	elem.classList.add(`${act}--active`);
};
