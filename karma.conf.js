const webpackConfig = require('./webpack.karma.config');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    hostname: 'localhost',
    port: 9050,
    browserNoActivityTimeout: 60000,
    // singleRun: true, //just run once by default

    // конфигурация репортов о покрытии кода тестами
    coverageReporter: {
      dir: 'tmp/coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
      ],
      instrumenterOptions: {
        istanbul: { noCompact: true },
      },
    },
    files: ['frontend/**/*.spec.ts'],
    frameworks: ['chai', 'mocha', 'sinon'],
    // репортеры необходимы для  наглядного отображения результатов
    reporters: ['mocha', 'coverage'],
    preprocessors: {
      'frontend/**/*.spec.ts': ['webpack', 'sourcemap', 'coverage'],
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },
    plugins: [
      'karma-mocha',
      'karma-chai', 'karma-coverage',
      'karma-webpack', 'karma-phantomjs-launcher',
      'karma-mocha-reporter', 'karma-sourcemap-loader',
      'karma-babel-preprocessor', 'karma-sinon',
    ],
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
