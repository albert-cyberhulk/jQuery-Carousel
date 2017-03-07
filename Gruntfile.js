'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'gruntify-*']});

    //compile config from separate files
    var config = require('load-grunt-configs')(grunt, {
        config: {
            src: 'grunt/config/*.js'
        }
    });

    // Define the configuration for all the tasks
    grunt.initConfig(config);

    grunt.registerTask('serve', function (target) {

        grunt.task.run([
            'clean',
            'copy:dist',
            'connect:livereload',
            'watch:index'
        ]);

    });
};
