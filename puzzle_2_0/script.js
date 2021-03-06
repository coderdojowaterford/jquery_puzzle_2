$( document ).ready( function () {
    console.log( "ready!" );

    var moves = 0;
    var iters = 15;

    // store the positions of the pieces in an array
    var pieces = {
            0: {id: "piece_1_1", initial_x: 0, initial_y: 0, x: 0, y: 0 },
            1: {id: "piece_2_1", initial_x: 1, initial_y: 0, x: 1, y: 0 },
            2: {id: "piece_3_1", initial_x: 2, initial_y: 0, x: 2, y: 0 },
            3: {id: "piece_1_2", initial_x: 0, initial_y: 1, x: 0, y: 1 },
            4: {id: "piece_2_2", initial_x: 1, initial_y: 1, x: 1, y: 1 },
            5: {id: "piece_3_2", initial_x: 2, initial_y: 1, x: 2, y: 1 },
            6: {id: "piece_1_3", initial_x: 0, initial_y: 2, x: 0, y: 2 },
            7: {id: "piece_2_3", initial_x: 1, initial_y: 2, x: 1, y: 2 },
    }
    
    // store the position of the empty piece
    var empty_piece = {x: 10, y: 10};

    // this is a function that places a piece in a chosen position
    function place_piece( index, x, y ) {
        pieces[index].x = x;
        pieces[index].y = y;
        $('#' + pieces[index].id).css('left', (x * 33.5) + '%');
        $('#' + pieces[index].id).css('top', (y * 33.5) + '%');
    }    
    
    // try to move a piece if possible
    function move_piece( index ) {

        var current_x = pieces[index].x;
        var current_y = pieces[index].y;
        // move this piece to the empty spot if possible
        if (Math.abs( current_x - empty_piece.x) + Math.abs( current_y - empty_piece.y) == 1 ){
            place_piece( index, empty_piece.x, empty_piece.y );
            empty_piece.x = current_x;
            empty_piece.y = current_y;
            return true;
        } else {
        	return false;
        }
    }
    
    // what to do when a piece is clicked
    $('.puzzle-piece').click(function () {
        // find the corresponding piece
        for( var k = 0 ; k < 8 ; k++ ) {
            if ( this.id == pieces[k].id ){
            	if (move_piece( k )) {
            		moves++;
            		$('#counter').html( moves );
            		detect_win();
            	}
            }
        }
    });
    
    // mix the pieces when playing
    $('#play').click(function () {

        // console.log( $('#difficulty').text());
        // console.log( $('#difficulty').val( $(this).prop('data-val') ));

    	// reset the pieces
    	restGame();
    	empty_piece.x = 2;
        empty_piece.y = 2;
        $('.fixed-piece').css('opacity', 0.2);
        
        for ( var k = 0 ; k < iters ; k++ ) {
            var random_index = Math.floor(Math.random()*(7.99));
            move_piece( random_index );
        }
        $('#play').prop('disabled', true);
        $('#win').hide();
        $('#counter').html( moves );
    });
    
    //detect if the game is won
    function detect_win() {
        var win = true;
        for( k = 0 ; k < 8 ; k++ ) {
            if ( (pieces[k].initial_x != pieces[k].x ) || (pieces[k].initial_y != pieces[k].y )) {
                win = false;
            }
        }
        if (win) {
            $('#total_moves').html( moves );
            $('.fixed-piece').css('opacity', 1);
            $('#win').show();
            $('#play').prop( 'disabled', false );
            empty_piece.x = 10;
            empty_piece.y = 10;
        }
    }
    
    function restGame() {
    	for ( var i in pieces ){
            var piece = pieces[i];
            place_piece( i, piece.initial_x, piece.initial_y );
        }
        moves = 0;
        empty_piece.x = 10;
        empty_piece.y = 10;
        $('.fixed-piece').css('opacity', 1);
        
    }
    
    $('#resetGame' ).click(function () {
    	restGame();
        $('#counter').html( moves );
        $('#play').prop('disabled', false );
    });


    $('.dropdown-item').click(function (e) {
        iters = $(this).attr( 'data-val' );
        $('#difficultyVal').html($(this).html());
        e.preventDefault();
    })
    
});
