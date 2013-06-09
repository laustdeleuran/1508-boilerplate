define(['jquery'],
    function ($) {
    var methods = {
        init: function (options) {
            this.each(function () {
                var defaults, settings, $this, height, $wrapper, $body, $text, textHeight;

                $this = $(this);
                settings = $this.data('accordion');
                if (typeof (settings) === 'undefined') {

                    defaults = {
                        btn: '.mobileBtn',
                        animate: false,
                        menu: '.service'
                    };

                    settings = $.extend({}, defaults, options);
                    $this.data('accordion', settings);
                } else {
                    settings = $.extend({}, settings, options);
                }
                              
                height = $(this).closest('.module').outerHeight(true);
                $wrapper = $(this).closest('.module');
                $body = $(this).closest('.body');
                $text = $(this).siblings('.bodyTxt');
                textHeight = $text.outerHeight(true);

                $(this).on('click', function (e) {
                    e.preventDefault();
                    if ($wrapper.hasClass('expanded')) {
                        $wrapper.css({'height': height, 'z-index': '2'});
                        $body.css('height', height);
                        $wrapper.removeClass('expanded');
                        $text.css('height', textHeight);
                    } else {
                        $wrapper.css({'height': (height*2), 'z-index': '999'});
                        $body.css('height', (height * 2));
                        $wrapper.addClass('expanded');
                        $text.css('height', 'auto');
                    }
                });

            });

        }
    };

    $.fn.accordion = function (method) {

        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist in jQuery.accordion');
        }

    };



});