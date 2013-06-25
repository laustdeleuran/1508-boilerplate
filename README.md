# 1508 Interface Boilerplate #
-------------------------------------------------------

##General Description##
1508 Interface Boilerplate is a boilerplate we use on almost all our projects as the foundation stone. It's updated regularly as the technology evolves.<br>
<b>In order to get 100% out of this boilerplate, knowledge about SASS, Require.js and Grunt is highly recommended</b>


##Specifics##

###BOILERPLATE:###
HTML5 Boilerplate with no-js + sass sticky footer setup + cleargrid js & markup.<br>
The boilerplate includes a CSS3 sass animations library + built in require and grunt, ready for building.

###COMPASS:###
Navigate to the folder where config.rb is located with your favorite terminal program.<br>
Do a ```compass watch``` and compass should start watching for changes in your scss files.

Alternativly you can use our CompassWatch.cmd (Windows) or CompassWatchMac.command (MAC), which executes the ```compass watch``` in the folder it is sitting in.<br> The CompassWatch.cmd and CompassWatchMac.command is included in the boilerplate, and located according to the boilerplates config.rb.

###JAVASCRIPT:###
1508 Boilerplate contains the following javascript libraries:
- almond.0.2.5.js *(amd shimmer for require.js)*
- jquery.hammer *(Extended touch support)*
- jquery-1.9.0.min.js *(Currently using < 1.9 since >2.0 removed support for legacy browsers)*
- selectivizr-min.js
- require.js


1508 Boilerplate contains the following standalone javascript:
- modernizr.min.js *(CSS3, Html5, touch, mq and prefixed)*

###1508 CUSTOM PLUGINS:###

Check the github wiki-pages for detailed information about the plugins, and how to use them.<br>
<a href="https://github.com/1508/1508-boilerplate/wiki/jquery.1508.appendItem">jquery.1508.appendItem.js</a>

*If you create your own custom plugins remember to wrap your plugin in the define required by require.js, and include it in the main.js file*

Example:
```javascript
define(['jquery', 'whateverdependenciestheremightbe'],
    function ($) {
    var methods = {
        init: function (options) {
            this.each(function () {
                var defaults, settings;
                $this = $(this);
                settings = $this.data('mycustomplugin');
                if (typeof (settings) === 'undefined') {

                    defaults = {
                        option: '.selector'
                    };

                    settings = $.extend({}, defaults, options);
                    $this.data('mycustomplugin', settings);
                } else {
                    settings = $.extend({}, settings, options);
                }
                //Plugin logic
            });
        }
    };
    $.fn.mycustomplugin = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist in jQuery.mycustomplugin');
        }
    };
});
```

###GRUNT:###
*Grunt should only be run when your project is ready for production. You must also have Node.js installed*

1. run the following cmdlet in the directory your GruntFile.js and package.json is located ```npm install grunt```
2. run the following cmdlet in the same directory ```npm install``` which installs the depencies defined in your package.json.
3. run the cmdlet ```grunt``` which builds your resources folder. The compiled files should now be located in the dist folder.
4. finally correct your script includes in your html to point to the script.js file and the new css file.

##Setup (Sublime Text):##

1. Open Fetch.sublime-settings through sublime: Ctrl+Shift+P - Navigate to Fetch: Manage.
2. Under "Packages" add the following line: "html5_boilerplate": "https://github.com/1508/1508-boilerplate/zipball/master"
3. Save
4. Rock & Roll - Ctrl+Shift+P - Fetch: Package - Boom

##Setup (Visual Studio):##

1. Create your web project in VS.
2. Find the "1508 Interface Boilerplate" through NuGet and install the package from there.