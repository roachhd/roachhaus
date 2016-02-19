
  $('#screen').click( function() {
  $('#input1').show(300, function() {
    $('#input1').css("float","none");
        $('#input2').show(1000, function(){
    		$('#input3').show(300, function(){
    			$('#input3').css("float","none");
    				$('#mainscreen').load('http://games.roachhaus.com/games/gameDirectory/default.html', function(){
              $('#loading').show(5000, function(){
                window.location.href = "http://games.roachhaus.com/games/gameDirectory/default.html";    
              });

            
          });
    		});
    });

  });

});
