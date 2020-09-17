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

	$('.btn-dist').click(function(){
		$('.item').addClass('hide');
		$('.item.dist').removeClass('hide');
	});

	$('.btn-trans').click(function(){
		$('.item').addClass('hide');
		$('.item.trans').removeClass('hide');
	});

	$('.btn-mont').click(function(){
		$('.item').addClass('hide');
		$('.item.mont').removeClass('hide');
	});

	$('.btn-other').click(function(){
		$('.item').addClass('hide');
		$('.item.other').removeClass('hide');
	});

	$('.btn-col').click(function(){
		$('.item').addClass('hide');
		$('.item.col').removeClass('hide');
	});

	$('.btn-gray').click(function(){
		$('.item').addClass('hide');
		$('.item.gray').removeClass('hide');
	});

	$('.btn-sepia').click(function(){
		$('.item').addClass('hide');
		$('.item.sepia').removeClass('hide');
	});

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
	});


});