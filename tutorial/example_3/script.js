$( document ).ready( function () {
   
	var imageList = {
            0: 'tiger.jpg',
            1: 'bridge.jpg',
            2: 'telephon.jpg',
            3: 'viking.jpg',
            4: 'door.jpg',
            5: 'plane.jpg',
    }
	
	var currentImage = 0;
	
	$('#next-button').click(function () {
		$('.test-div').css('background-image', 'url(img/' + imageList[currentImage] + ')');
		currentImage++;
		if ( currentImage > 5 ) currentImage = 0;
	});
	
});
