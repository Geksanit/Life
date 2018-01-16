const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: __dirname + '/frontend/scripts/jquery-3.2.1.min.js',
      jQuery: __dirname + '/frontend/scripts/jquery-3.2.1.min.js',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
