$(document).ready(function(){
	console.log('hello world');

	$('.bttn-about').click(function(){
		$('.sidebar').addClass('active');
	}); 

	$('.bttn-close').click(function(){
		$('.sidebar').removeClass('active');
	}); 

	$('.heading').hover(function(){
		$('.caption').toggleClass('active');
	}); 

	$('.col1').hover(function(){
		$('.arrow').toggleClass('active');
		$('.col2').toggleClass('active');
	}); 

});	