# 1508 Interface Boilerplate #
-------------------------------------------------------

##General Description##
1508 Interface Boilerplate is a boilerplate we use on almost all our projects as the foundation stone. It's updated regularly as the technology evolves.


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
- almond.0.2.5.js
- jquery.hammer

###1508 CUSTOM PLUGINS:###

Check the github wiki-pages for detailed information about the plugins, and how to use them.
<a href="https://github.com/RuneKobberoe/Required-modules/wiki/_pages">WIKI</a>

###GRUNT:###
> Decription missing

##Setup (Sublime):##
"HTML5 Boilerplate + Compass + Semantic Grid" is created for the purpose of fetching it as a package, through sublime text.

1. Open Fetch.sublime-settings through sublime: Ctrl+Shift+P - Navigate to Fetch: Manage.
2. Under "Packages" add the following line: "html5_boilerplate": "https://github.com/1508/1508-boilerplate/zipball/master"
3. Save
4. Rock & Roll - Ctrl+Shift+P - Fetch: Package - Boom