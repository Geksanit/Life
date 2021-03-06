
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const baseConfig = {
  context: __dirname + '/frontend',
  entry: {
    'index': './index.ts',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    library: 'scripts',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: __dirname + '/frontend/scripts/jquery-3.2.1.min.js',
      jQuery: __dirname + '/frontend/scripts/jquery-3.2.1.min.js',
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new HtmlWebpackPlugin({ filename: 'index.html', chunks: ['index'], template: './index.pug' }),
  ],
  cache: true,
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'tslint-loader',
      options: { configFile: './tslint.json' },
    }, /*{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env'],
      },
    }, */{
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader',
        options: {
          onlyCompileBundledFiles: true,
        },
      },
      exclude: /node_modules/,
    }, {
      test: /\.pug$/,
      use: {
        loader: 'pug',
        options: {
          pretty: true,
        },
      },
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style',
        use: 'css',
      }),
    }, {
      test: /\.styl$/,
      use: ExtractTextPlugin.extract({
        use: [{ loader: 'css' }, { loader: 'stylus' }],
      }),
    }, {
      test: /\.(png|ipg|svg|ttf|eot|woff|woff2|jpg|mp4)$/,
      loader: 'file?name=[path][name].[ext]',
    },
    ],
  },
};
const productionConfig = () => baseConfig;
const developmentConfig = () => {
  const config = {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
      },
    },
  };
  return Object.assign({}, baseConfig, config);
};

module.exports = (env) => {
  if (env === 'production') {
    return productionConfig();
  }
  return developmentConfig();
};
