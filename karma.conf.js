/**
 * Created by DNS on 07.11.2017.
 */
module.exports = function (config) {
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
    files: ['frontend/**/*.spec.js'],
    frameworks: ['chai', 'jasmine'],
    // репортеры необходимы для  наглядного отображения результатов
    reporters: ['mocha', 'coverage'],
    preprocessors: {
      'frontend/**/*.spec.js': ['webpack', 'babel', 'sourcemap', 'coverage'],
    },
    babelPreprocessor: {
      options: {
        presets: ['env'],
        sourceMap: 'inline',
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      },
    },
    plugins: [
      'karma-jasmine', 'karma-mocha',
      'karma-chai', 'karma-coverage',
      'karma-webpack', 'karma-phantomjs-launcher',
      'karma-mocha-reporter', 'karma-sourcemap-loader',
      'karma-babel-preprocessor',
    ],
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
