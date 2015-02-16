$(document).ready(function() {

// update copyright
	function copyright() {
		var today = new Date();
		var year = today.getFullYear();

		if (year === 2014) {
		    $('#copyright').html('&copy; ' + year);
		} 
		else {
		    $('#copyright').html('&copy; 2014&#8211;' + year);
		}
	}

	copyright();

// mobile menu slider

	$('nav p, nav ul li').click(function() {
		$('nav ul').slideToggle(300);
	});

});

$( window ).resize(function() {

	// show hero image on resize
    $("#home").backstretch("http://jdominiak.com/img/marina_city_1200.jpg");
	
	// show/hide nav ul on resize
	if ($(window).width() >= 751) {
		$('nav ul').show();
	};

	if ($(window).width() < 751) {
		$('nav ul').hide();
	};
});