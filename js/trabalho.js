var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 300,
	fade: 'true',
	grabCursor: 'true',
	rewind: true,
	autoHeight: true,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

swiper.on('slideChange', function() {
	const element = document.querySelector('.swiper-slide-active');
	if (element.classList.contains('swiper-slide-active') && element.classList.contains('myvideo')) {
		document.getElementById("myVideo").pause();
	}
});