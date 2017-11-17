/**
 * Created by DNS on 07.11.2017.
 */
var webpackConfig = require('./testing.webpack');
module.exports=function(config) {
    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        hostname: 'localhost',
        port: 9050,
        browserNoActivityTimeout: 60000,
        //singleRun: true, //just run once by default

        // конфигурация репортов о покрытии кода тестами
        coverageReporter: {
            dir:'tmp/coverage/',
            reporters: [
                { type:'html', subdir: 'report-html' },
                { type:'lcov', subdir: 'report-lcov' }
            ],
            instrumenterOptions: {
                istanbul: { noCompact:true }
            }
        },
        // spec файлы, условимся называть по маске **_*.spec.js_**
        files: [
            'frontend/**/*.spec.js',
            'spec/fixtures/*.html',
    ],
        frameworks: ['chai', 'jasmine', 'fixture'],
        // репортеры необходимы для  наглядного отображения результатов
        reporters: ['mocha', 'coverage'],
        preprocessors: {
            'spec/fixtures/*.html': ['html2js'],
            'frontend/**/*.spec.js': ['webpack', 'sourcemap','coverage']
        },
        plugins: [
            'karma-jasmine', 'karma-mocha',
            'karma-chai', 'karma-coverage',
            'karma-webpack', 'karma-phantomjs-launcher',
            'karma-mocha-reporter', 'karma-sourcemap-loader',
            'karma-fixture',
            'karma-html2js-preprocessor',
        ],
        // передаем конфигурацию webpack
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo:true
        }
    });
};