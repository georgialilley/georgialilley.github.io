$(document).ready(function(){
	console.log('hello world');

	$('.bttn-about').click(function(){
		$('.sidebar').addClass('active');
	}); 

	$('.bttn-close').click(function(){
		$('.sidebar').removeClass('active');
	}); 

});	