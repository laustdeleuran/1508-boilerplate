// Courtesy of HKJ
(function($){

	$.fn.addClearfix = function(options) {
		var defaults, settings, $injectElm, clearCss, navigatorVersion, ie7;

		navigatorVersion = navigator.appVersion.indexOf("MSIE 7.");

		defaults = {
			maxWidth: 100,
			attr: 'data-spot-width',
			injectElm: '<div class="clear">&nbsp;</div>',
			clearCss: 'left'
		};

		settings = $.extend(defaults, options);

		$injectElm = $(settings.injectElm);

		clearCss = settings.clearCss;

		//ie7 support false or true

		if(navigatorVersion != -1){
			ie7 = true;
		}else{
			ie7 = false;
		}

		//container each
		this.each(function(){
			var $spots, i = 0;
			$spots = $(this).find('['+settings.attr+']');

			$spots.each(function() {
				var $this, w;
				$this = $(this);
				w = parseInt(($this.attr(settings.attr) || 0), 10);

				if ((i+w) > settings.maxWidth) {

					if(ie7 === true){
						$injectElm.clone().insertBefore($this);
					}else{
						$this.css('clear', clearCss);
					}

					i=w;
				} else {
					i = i+w;
				}
			});
		});

		return this;
	};

}(jQuery));
