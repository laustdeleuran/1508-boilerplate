/*  
Current V. 1.0.1
----------------
V. 1.0.1 - RKH - 28/08-2013
V. 1.0.0 - Unknown - ??/??-????
*/

define(['jquery'],
    function ($) {
        var methods = {
            init: function (options) {
                this.each(function () {
                    var defaults, settings, $this;
                    $this = $(this);
                    settings = $this.data('inputFocus');
                    if (typeof (settings) === 'undefined') {

                        defaults = {

                        };

                        settings = $.extend({}, defaults, options);
                        $this.data('inputFocus', settings);
                    } else {
                        settings = $.extend({}, settings, options);
                    }

                    $this.on('focus', function () {
                        // On first focus, check to see if we have the default text saved
                        // If not, save current value to data()
                        if (!$(this).data('defaultText')) $(this).data('defaultText', $(this).val());

                        // check to see if the input currently equals the default before clearing it
                        if ($(this).val() == $(this).data('defaultText')) $(this).val('');
                    });
                    $this.on('blur', function () {
                        // on blur, if there is no value, set the defaultText
                        if ($(this).val() == '') $(this).val($(this).data('defaultText'));
                    });



                });
            }
        };
        $.fn.inputFocus = function (method) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist in jQuery.inputFocus');
            }
        };
    });