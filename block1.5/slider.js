const slider = document.querySelector('.swiper-container');

let swiper;

function mobileSlider() {
	if (window.innerWidth < 768) {
		swiper = new Swiper(slider, {
			slidesPerView: 'auto',
			spaceBetween: 16,
			slidesOffsetBefore: 16,
			slidesOffsetAfter: 16,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				slideToClickedSlide: true,
			},
		});
	
		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth >= 768 && slider.dataset.mobile == 'true') {
		slider.dataset.mobile = 'false';

		if (slider.classList.contains('swiper-container-initialized')) {
			swiper.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', function() {
	mobileSlider();
});



// Отображение элементов по нажатию на "Показать всё" и обратно
const showAll = document.querySelector('.brands__button');

function showContent () {
		slider.classList.toggle('brands__content--visible');
		showAll.classList.toggle('brands__button--active');
		if (showAll.classList.contains('brands__button--active')) {
			showAll.textContent = 'Скрыть';
		} else {
			showAll.textContent = 'Показать все';
		}
}

showAll.addEventListener('click', function() {
	showContent();
});







