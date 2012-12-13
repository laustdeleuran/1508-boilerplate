(function($){

	$.fn.addClearfix = function(options) {
		var defaults, settings, $injectElm, ie7;

		//ie7 support false or true
		ie7 = (-1 < navigator.appVersion.indexOf("MSIE 7."));

		defaults = {
			attr: 'data-spot-width',
			injectElm: '<div class="clear">&nbsp;</div>',
			clearWhat: 'left'
		};

		settings = $.extend(defaults, options);
		$injectElm = $(settings.injectElm);

		//container each
		this.each(function(){
			var $section, $spots, sectionWidth = 0, i = 0;
			$section = $(this);
			$spots = $section.find('['+settings.attr+']');
			sectionWidth = $section.width();

			$spots.each(function() {
				var $this, w;
				$this = $(this);
				w = $this.width();

				if ((i+w) > sectionWidth) {

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
