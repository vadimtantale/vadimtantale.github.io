const buttonsShowAll = document.querySelectorAll('.button--show-all');

for (let i = 0; i < buttonsShowAll.length; i += 1) {
	activateButton(buttonsShowAll[i]);
}

function activateButton(button) {
	button.addEventListener ('click', () => {
		chooseAction(button);
	});
}

function chooseAction(button) {
	// const attr = button.dataset.section;
	const attr = button.getAttribute('data-section');
	const item = document.querySelector(`.${attr}__items`);

	item.classList.toggle(`${attr}__items--visible`);
	button.classList.toggle('button--show-all--active');
	if (item.classList.contains(`${attr}__items--visible`)) {
		button.textContent = 'Скрыть';
	} else {
		if (attr == 'about') {
			button.textContent = 'Читать далее';
		} else {
			button.textContent = 'Показать всё';
		}
	}
}