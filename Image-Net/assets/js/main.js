$(document).ready(function(){
	console.log('hello world');

	$('.bttn-about').click(function(){
		$('.about').toggleClass('active');
	}); 

	$('.bttn-filt').click(function(){
		$('.filter').toggleClass('active');
	});

	$('.bttn-create').click(function(){
		$('.create').toggleClass('active');
	});	

	$('.bttn-more').click(function(){
		$('.more').toggleClass('active');
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