// Main
console.log('FullStack Vietnam!')
$(document).ready(function () {
	$(".home_trademark .owl-carousel").owlCarousel({
		items: 2,
		loop: true,
		dots: false,
		margin: 5,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive : {
			480 : {
				items: 3,
				margin: 10,
			},
			768 : {
				items: 4,
			},
			992: {
				items: 6,
				nav: true
			}
		}
	});
});
