exports.config = {
    seleniumServerJar: '../../node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.45.0.jar',
    specs: ['../unit/main.spec.js'],
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': './node_modules/phantomjs-prebuilt/bin/phantomjs',
        'phantomjs.cli.args': '--debug=true --webdriver=4444 --webdriver-logfile=webdriver.log --webdriver-loglevel=DEBUG'
    },
    baseUrl: 'http://localhost:9000',
    ignoreUncaughtExceptions: true,
    chromeOnly: true,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};