module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 1508,
                    base: './',
                    open: true,
                    debug: true,
                    keepalive: true
                }
            }
        },
        clean: {
            release: ['dist/**']
        },
        requirejs: {
            compile: {
                options: {
                    name:'almond',
                    wrap: true,
                    preserveLicenseComments:false,
                    insertRequire: ['main'],
                    baseUrl: "resources/js/plugins",
                    mainConfigFile: "resources/js/config.js",
                    out: "dist/resources/js/script.js"
                }
            },
            dev: {
                options: {
                    name:'almond',
                    wrap: true,
                    insertRequire: ['main'],
                    optimize: 'none',
                    preserveLicenseComments:false,
                    generateSourceMaps: true,
                    baseUrl: "resources/js/plugins",
                    mainConfigFile: "resources/js/config.js",
                    out: "dist/resources/js/script-debug.js"
                }
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'resources/config.rb',
                    basePath: 'resources',
                    cssDir: '../dist/resources/css',
                    noLineComments: true,
                    outputStyle:'compressed',
                    environment:'production'
                }
            }
        },
        copy: {
            release: {
                files: [
                  {src: ['resources/images/**',
                         'resources/fonts/**',
                         'resources/sounds/**',
                         'resources/js/standalone/**'],
                   dest: 'dist/'},
                ]
            }
        },
        smushit: {
            release: {
                src: 'dist/resources/images'
            }
        },
        sassdown: {
            files: {
                expand: true,
                cwd: 'resources/sass',
                src: ['*.scss'],
                dest: 'public/styleguide/'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-smushit');
    grunt.loadNpmTasks('sassdown');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['clean','requirejs', 'compass', 'copy', 'smushit']);

};