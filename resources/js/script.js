(function($){ 

	//Document ready
	$(function(){ 
		$('.section').addClearfix({

		});
	});

	//Window resize
	$(window).resize(function () {

	});
  
	//Window load
	$(window).load(function (){
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
	
	
})( jQuery );