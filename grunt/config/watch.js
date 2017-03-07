// Watches files for changes and runs tasks based on the changed files
module.exports = {
    index: {
        options: {
            livereload: true
        },
        files: [
            '<%= project.app %>/index.html',
            '<%= project.app %>/css/*.css',
            '<%= project.app %>/js/*.js'
        ],
        tasks: ['copy:dist']
    }
};
