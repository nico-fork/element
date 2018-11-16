var webpackConfig = require('../../build/webpack.test');

// no need for app entry during tests
// delete webpackConfig.entry;

module.exports = function(config) {
  var configuration = {
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    frameworks: ['mocha', 'sinon-chai'], // https://www.npmjs.com/package/karma-sinon-chai 配置了以后再测试js里边可以直接使用expect等函数
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    port: 9999,
    preprocessors: { // 这里配置哪些文件需要统计测试覆盖率
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    client: {
      mocha: {
        timeout: 4000
      }
    }
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
