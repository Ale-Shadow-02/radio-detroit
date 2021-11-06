//Menu
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

let arrow = document.querySelector(".arrow");
let subNav = document.querySelector('.sub-nav__radio');
arrow.addEventListener('click', function () {
	subNav.classList.toggle('nav__active');
	arrow.classList.toggle('arrow__active');
})