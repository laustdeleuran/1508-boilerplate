(function($){ 

	//Documen ready
	$(function(){ 
		
	});

	//Window resize
	$(window).resize(function () {
		cleargrid();
	});
  
	//Window load
	$(window).load(function (){
    	cleargrid();
	});	

	//****************************************************************************************************************
    //Functions
	//****************************************************************************************************************
	
	//Clear grid
	function cleargrid(){
		$('.cleargrid').remove();
		var section = $('.section');
		$(section).each(function() {
		    var rowPixels = 0;
		    $(this).children('.grid').each(function () {

		        var gridWidth = $(this).width();
		        rowPixels += gridWidth;

		        if (rowPixels >= $(section).width() - 1) { //I use - 1 because new and old browsers use different dec numbers

		            if($(this).parent().is('ul')){
						$(this).after('<li class="clear cleargrid"></li>');
					}else{
						$(this).after('<div class="clear cleargrid"></div>');
					}	
		            rowPixels = 0;
		        }
		    });
		}); 		
	}
	
	
})( jQuery );