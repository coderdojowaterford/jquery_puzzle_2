$( document ).ready( function () {
   
	   
	$('#first-button').click(function () {
		$('.test-div').css('background-image', 'url(img/boats.jpg)');
	});
	
	$('#second-button').click(function () {
		$('.test-div').css('background-image', 'url(img/paris.jpg)');
	});
	
	$('#third-button').click(function () {
		$('.test-div').css('background-image', 'url(img/door.jpg)');
	});
	
});
