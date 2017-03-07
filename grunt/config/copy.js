// Copies remaining files to places other tasks can use
module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= project.app %>/css',
                dest: '<%= project.temp %>/css/',
                src: '*.css'
            },
            {
                expand: true,
                cwd: '<%= project.app %>',
                dest: '<%= project.temp %>/',
                src: 'index.html'
            }
        ]
    }
};
