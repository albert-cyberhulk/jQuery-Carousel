// The actual grunt server settings
module.exports = {
    options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729,
        base: {
            path: '<%= project.temp %>',
            options: {
                index: 'index.html'
            }
        }
    },
    livereload: {
        options: {
            open: true,
            base: [
                '<%= project.temp %>',
                '<%= project.app %>'
            ]
        }
    },
    test: {
        options: {
            port: 9001,
            base: [
                '<%= project.temp %>',
                '<%= project.test %>',
                '<%= project.app %>'
            ]
        }
    }
};
