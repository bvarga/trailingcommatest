module.exports = function(config) {

  var customLaunchers = {
    sl_ie_8: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '8'
    },
  };

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['*.js'],
    reporters: ['junit', 'saucelabs'],
    junitReporter: {
      outputFile: 'test-results-saucelabs.xml',
      suite: ''
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    captureTimeout: 600000,
    sauceLabs: {
      'idle-timeout': 180
    },
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    singleRun: true,
    browserNoActivityTimeout: 100000
  });
};
