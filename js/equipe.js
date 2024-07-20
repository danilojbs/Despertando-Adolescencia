var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 55,
	fade: 'true',
	centerSlide: 'true',
	grabCursor: 'true',
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 2500,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		520: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 3,
		},
	},
});