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
		inputFocus();
	});	



	//****************************************************************************************************************
    //Functions
	//****************************************************************************************************************
	
	//Input focus. Used to clear a input on focus.
	//Just add the class "input" to the input. e.g. : <input class="input" type="text" value="indtast søgeord">
	function inputFocus(){
		 $('.input').on('focus', function() {
	        // On first focus, check to see if we have the default text saved
	        // If not, save current value to data()
	        if (!$(this).data('defaultText')) $(this).data('defaultText', $(this).val());

	        // check to see if the input currently equals the default before clearing it
	        if ($(this).val()==$(this).data('defaultText')) $(this).val('');
	    });
	    $('.input').on('blur', function() {
	        // on blur, if there is no value, set the defaultText
	        if ($(this).val()=='') $(this).val($(this).data('defaultText')); 
	    });
	}


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

			        if (rowPixels >= $(section).width() - 2) { //I use - 1 because new and old browsers use different dec numbers

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