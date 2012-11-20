(function($){ 

	//Define your markup section and grid
	var cleargridSection = '.section';
	var cleargridGrid = '.grid';

	//Document ready
	$(function(){ 


	});

	//Window resize
	$(window).resize(function () {

		cleargrid(cleargridSection, cleargridGrid);

	});
  
	//Window load
	$(window).load(function (){

    	cleargrid(cleargridSection, cleargridGrid);

	});	



	//****************************************************************************************************************
    //Functions
	//****************************************************************************************************************
	
	//Cleargrid (courtesy of Johan Rough )
	function cleargrid(section, grid){

		$('.cleargrid').remove();	

		$(section).each(function() {

		    var rowPixels = 0;

		    $(this).children(grid).each(function () {

		    	var gridWidth = $(this).width(); //Width used when '.grid' has no margin
		        var gridWidthOuter = $(this).outerWidth(true);

		        if(gridWidth === gridWidthOuter){ // If margin is 0

		        	rowPixels += gridWidth;

			        if (rowPixels >= $(section).width() - 1) { //I use - 1 because new and old browsers use different dec numbers
			        	
			            if($(this).parent().is('ul')){
							$(this).after('<li class="clear cleargrid"></li>');
						}else{
							$(this).after('<div class="clear cleargrid"></div>');
						}	
			            rowPixels = 0;
			        }

		        }else{ //If margin is used in the grid.

			        rowPixels += gridWidthOuter;

			        if (rowPixels >= $(section).width() - 1) { //I use - 1 because new and old browsers use different dec numbers

			            if($(this).parent().is('ul')){
							$(this).after('<li class="clear cleargrid"></li>');
						}else{
							$(this).after('<div class="clear cleargrid"></div>');
						}	
			            rowPixels = 0;
			        }
		        }
		    });
		}); 		
	}
	
	
})( jQuery );

