import Swiper, { Pagination } from 'swiper';
Swiper.use(Pagination);

let slider = document.querySelector('.swiper-container');


function mobileSlider() {
	if (window.innerWidth < 768) {
		swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			spaceBetween: 16,
			slideToClickedSlide: true,
			slidesOffsetBefore: 16,
			slidesOffsetAfter: 16,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
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


window.addEventListener('resize', function() {
	mobileSlider();
});