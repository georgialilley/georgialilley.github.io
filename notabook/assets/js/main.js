$(document).ready(function(){
	console.log('hello world');

	$('.button').click(function(){
		$('.sidebar').addClass('active');
	}); 

	$('.bttn-close').click(function(){
		$('.sidebar').removeClass('active');
	}); 

	$('.plus').click(function(){
		$('.options').toggleClass('active');
	});

	$('.tab1').hover(function(){
		$('.note1').toggleClass('active');
	});

	$('.tab2').hover(function(){
		$('.note2').toggleClass('active');
	}); 

	$('.tab3').hover(function(){
		$('.note3').toggleClass('active');
	});  

});	