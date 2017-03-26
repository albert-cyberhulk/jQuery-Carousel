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
            'connect:livereload',
            'watch:index'
        ]);
    });

    grunt.registerTask('test', [
        'clean:tmp',
        'qunit'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'jshint:all',
        'test',
        'copy:dist',
        'uglify'
    ]);
};
