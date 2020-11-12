$(document).ready(function(){
	console.log('hello world');

	$('.bttn-about').click(function(){
		$('.about').toggleClass('active');
	}); 

	$('.bttn-filt').click(function(){
		$('.filter').toggleClass('active');
	});

	$('.bttn-more').click(function(){
		$('.more').toggleClass('active');
	});

	$('.btn-pol').click(function(){
		$('.item').addClass('hide');
		$('.item.pol').removeClass('hide');
	});

	$('.btn-brick').click(function(){
		$('.item').addClass('hide');
		$('.item.brick').removeClass('hide');
	});

	$('.btn-emo').click(function(){
		$('.item').addClass('hide');
		$('.item.emo').removeClass('hide');
	});

	$('.btn-con').click(function(){
		$('.item').addClass('hide');
		$('.item.con').removeClass('hide');
	});

	$('.btn-soc').click(function(){
		$('.item').addClass('hide');
		$('.item.soc').removeClass('hide');
	});

	$('.btn-tile').click(function(){
		$('.item').addClass('hide');
		$('.item.tile').removeClass('hide');
	});

	$('.btn-com').click(function(){
		$('.item').addClass('hide');
		$('.item.com').removeClass('hide');
	});

	$('.btn-met').click(function(){
		$('.item').addClass('hide');
		$('.item.met').removeClass('hide');
	});

	$('.btn-for').click(function(){
		$('.item').addClass('hide');
		$('.item.for').removeClass('hide');
	});

	$('.btn-obj').click(function(){
		$('.item').addClass('hide');
		$('.item.obj').removeClass('hide');
	});	

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
	});


});