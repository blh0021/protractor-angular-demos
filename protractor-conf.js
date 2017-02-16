exports.config = {

    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    suites: { "main" : ["spec/**/*.js"]},

    capabilities: {
        "browserName": "chrome"
    },

    baseUrl: "http://localhost:8000/",

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: parseInt(process.env.TIMEOUT) || 30000,
        verbose: true,
        realtimeFailure: true,
        //print: function() {}
    },

    resultJsonOutputFile: 'result.json',

    onPrepare: function() {},

    afterLaunch: function(exitCode) {}
};
