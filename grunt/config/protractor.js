module.exports = {
    options: {
        configFile: "test/e2e/protractor-conf.js"
    },
    e2e: {
        options: {
            keepAlive: true,
            noColor: false,
            args: {
                seleniumAddress: 'http://localhost:4444'
            }
        }
    }
};