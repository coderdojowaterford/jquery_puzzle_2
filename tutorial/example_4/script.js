$( document ).ready( function () {
   
	var levels = {
            0: {image: "tiger.jpg", difficulty: 10, moves: 0},
            1: {image: "bridge.jpg", difficulty: 30, moves: 0},
            2: {image: "telephon.jpg", difficulty: 80, moves: 0},
            3: {image: "viking.jpg", difficulty: 200, moves: 0},
            4: {image: "cars.jpg", difficulty: 500, moves: 0},
            5: {image: "paris.jpg", difficulty: 1000, moves: 0},
    } 
	
	var currentLevel = 0;
	
	var displayLevel = function (level) {
		$('#level-title').html('Level ' + level);
		$('#level-image').html('Level image: ' + levels[level].image);
		$('#level-difficulty').html('Level difficulty: ' + levels[level].difficulty);
		$('#level-moves').html('Level moves: ' + levels[level].moves);
	}
	
	$('#next-level').click(function () {
		currentLevel++;
		if (currentLevel > 5) currentLevel = 0;
		displayLevel(currentLevel);
		$('#play').prop('disabled', false);
		$('#next-level').prop('disabled', true);
	});
	
	$('#play').click(function () {
		$('#play').prop('disabled', true);
		$('#next-level').prop('disabled', false);
	});
	
	$('#move').click(function () {
		levels[currentLevel].moves++;
		displayLevel(currentLevel);
		
	});
	
	displayLevel(currentLevel);
	
	$('#play').prop('disabled', false);
	$('#next-level').prop('disabled', true);
	
});
