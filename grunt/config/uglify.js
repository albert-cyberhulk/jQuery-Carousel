module.exports = {
    my_target: {
        files: {
            '<%= project.dist %>/cc_script.min.js': ['<%= project.app %>/js/cc_script.js']
        }
    }
};