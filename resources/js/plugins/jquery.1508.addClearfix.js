// Courtesy of HKJ
(function($){

	$.fn.addClearfix = function(options) {
		var defaults, settings, $injectElm;

		defaults = {
			maxWidth: 100,
			attr: 'data-spot-width',
			injectElm: '<div class="clear">&nbsp;</div>',
			injectCss: '"clear", "left"'
		};

		settings = $.extend(defaults, options);
		$injectElm = $(settings.injectElm);
		console.log('test');
		//container each
		this.each(function(){
			var $spots, i = 0;
			$spots = $(this).find('['+settings.attr+']');

			$spots.each(function() {
				var $this, w;
				$this = $(this);
				w = parseInt(($this.attr(settings.attr) || 0), 10);

				if ((i+w) > settings.maxWidth) {
					$injectElm.clone().insertBefore($this);
					i=w;
				} else {
					i = i+w;
				}
			});
		});

		return this;
	};

}(jQuery));
