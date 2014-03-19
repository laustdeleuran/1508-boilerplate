module.exports = function(grunt) {
	'use strict';

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);
	
	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Config
	var config = {
		dev: 'resources',
		dist: 'dist',
		host: 'localhost'
	};

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: config,
		connect: {
			server: {
				options: {
					port: 1509,
					hostname: '<%= config.host %>',
					base: './',
					open: true,
					//keepalive: true
				}
			},
			prototype: {
				options: {
					port: 1508,
					hostname: '<%= config.host %>',
					base: './prototype',
					open: true,
					//keepalive: true
				}
			},
		},
		express: {
			prototype: {
				options: {
					port: 1510,
					hostname: '<%= config.host %>',
					bases: ['./prototype'],
					livereload: true
				}
			}
		},
		open: {
			all: {
				path: 'http://<%= config.host %>:<%= connect.server.options.port %>'
			}
		},
		clean: {
			release: ['dist/**'],
			prototype: ['prototype/**']
		},
		requirejs: {
			compile: {
				options: {
					name: 'almond',
					wrap: true,
					preserveLicenseComments: false,
					insertRequire: ['main'],
					baseUrl: 'resources/js/plugins',
					mainConfigFile: 'resources/js/config.js',
					out: target + '/dist/js/script.js'
				}
			},
			dev: {
				options: {
					name: 'almond',
					wrap: true,
					insertRequire: ['main'],
					optimize: 'none',
					preserveLicenseComments: false,
					generateSourceMaps: true,
					baseUrl: 'resources/js/plugins',
					mainConfigFile: 'resources/js/config.js',
					out: target + '/dist/js/script-debug.js'
				}
			}
		},
		compass: {
			dev: {
				options: {
					config: 'resources/config.rb',
					basePath: 'resources',
					cssDir: '../' + target + '/dist/css',
					noLineComments: true,
					outputStyle: 'compressed',
					environment: 'production'
				}
			},
			dist: {
				options: {
					config: 'resources/config.rb',
					basePath: 'resources',
					cssDir: '../' + target + '/dist/css',
					noLineComments: true,
					outputStyle: 'compressed',
					environment: 'production'
				}
			}
		},
		copy: {
			release: {
				files: [{
					expand: true,
					cwd: 'resources/',
					src: ['images/**', 'fonts/**', 'js/standalone/**'],
					dest: target + '/dist/',
					filter: 'isFile'
				}, ]
			},
			prototype: {
				files: [{
					src: ['resources/css/**', 'resources/images/**', 'resources/fonts/**', 'resources/html/static/**', 'resources/js/**'],
					dest: 'prototype/'
				}, ]
			}
		},
		smushit: {
			release: {
				src: 'dist/resources/images'
			}
		},
		watch: {
			sass: {
				files: ['resources/sass/**/*.scss'],
				tasks: ['compass:dev'],
			},
			livereload: {
				files: ['resources/css/{,*/}*.css', 'resources/js/{,*/}*.js', 'resources/images/{,*/}*.{png,jpg,jpeg,gif,webp}'],
				tasks: ['copy:prototype'],
				options: {
					livereload: true,
				}
			},
			process: {
				files: ['./*.html', 'html_includes/{,*/}*.html'],
				tasks: ['preprocess:pages'],
			},
			prototype: {
				files: ['prototype/*.html'],
				options: {
					livereload: true,
				}
			},
		},
		preprocess: {
			pages: {
				files: [{
					expand: true,
					cwd: '.',
					src: ['*.html'],
					dest: 'prototype/',
					ext: '.html',
				}, ],
			},
			modules: {
				files: [{
					expand: true,
					cwd: '.',
					src: ['*.html'],
					dest: 'prototype/',
					ext: '.html',
				}, ],
			},
		},
	});

	// Default task(s).
	// Build for distribution
	grunt.registerTask('build', [
		'clean:release',
		'requirejs',
		'compass:dist',
		'copy:release',
		'smushit'
	]);

	// Run simple server
	grunt.registerTask('server', [
		'compass:dev',
		'connect:server',
		'watch'
	]);

	// Run prototype server
	grunt.registerTask('prototype', [
		'clean:prototype',
		'compass:dev',
		'copy:prototype',
		'preprocess:modules',
		'express:prototype',
		'open',
		'watch'
	]);
};