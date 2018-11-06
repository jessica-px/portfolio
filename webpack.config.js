const path = require('path');

module.exports = {
  entry: [
    './src/script.ts'
  ],
  module: {
    rules: [
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.less', '.css']
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist')
  }
};