$(document).ready(function(){
	console.log('hello world');

	$('.btn-about').click(function(){
		$('.about').addClass('active');
	});

	$('.close').click(function(){
		$('.about').addClass('hide');
	});

	$('.btn-cat').click(function(){
		$('.nav').addClass('active');
	});

	$('.btn-return').click(function(){
		$('.nav').addClass('return');
	});

	$('.btn-art').click(function(){
		$('.artists').toggleClass('active');
	});	

	$('.btn-info').click(function(){
		$('.info').toggleClass('active');
	});		

});