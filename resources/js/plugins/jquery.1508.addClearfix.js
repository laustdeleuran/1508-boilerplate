(function($){

	$.fn.addClearfix = function(options) {
		var defaults, settings, $injectElm, ie7;

		//ie7 support false or true
		ie7 = (-1 < navigator.appVersion.indexOf("MSIE 7."));

		defaults = {
			maxWidth: 100,
			attr: 'data-spot-width',
			injectElm: '<div class="clear">&nbsp;</div>',
			clearWhat: 'left'
		};

		settings = $.extend(defaults, options);
		$injectElm = $(settings.injectElm);

		//container each
		this.each(function(){
			var $spots, i = 0;
			$spots = $(this).find('['+settings.attr+']');

			$spots.each(function() {
				var $this, w;
				$this = $(this);
				w = parseInt(($this.attr(settings.attr) || 0), 10);

				if ((i+w) > settings.maxWidth) {

					if (ie7 === true){
						$injectElm.clone().insertBefore($this);
					} else {
						$this.css('clear', settings.clearWhat);
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
