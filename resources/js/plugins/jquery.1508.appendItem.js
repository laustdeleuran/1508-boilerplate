/*  V. 0.0.1 Created by RKH 
    Current V. 0.0.1 - RKH
*/

define(['jquery'],
    function ($) {
        var methods = {
            init: function (options) {
                this.each(function () {
                    var defaults, settings, $this;
                    $this = $(this);
                    settings = $this.data('appendItem');
                    if (typeof (settings) === 'undefined') {

                        defaults = {
                            container: '.selector',
                            resize: true,
                            oldContainer: '.oldContainer',
                            mq: '1024px'
                        };

                        settings = $.extend({}, defaults, options);
                        $this.data('appendItem', settings);
                    } else {
                        settings = $.extend({}, settings, options);
                    }

                    if ((settings.resize) === true) {
                        if (Modernizr.mq('only screen and (max-width: ' + (settings.mq) + ')')) {
                            $(settings.container).append($this);
                        }
                        $(window).resize(function () {
                            if (Modernizr.mq('only screen and (max-width: ' + (settings.mq) + ')')) {
                                $(settings.container).append($this);
                                
                            } else {
                                $(settings.oldContainer).append($this);
                            }
                        });

                    } else {
                        if (Modernizr.mq('only screen and (max-width: ' + (settings.mq) + ')')) {
                            $(settings.container).append($this);
                        }
                    }
                });
            }
        };
        $.fn.appendItem = function (method) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist in jQuery.appendItem');
            }
        };
    });