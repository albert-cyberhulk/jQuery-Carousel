module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: ['Gruntfile.js', '<%= project.test %>/*.js', '<%= project.app %>/js/*.js']
};