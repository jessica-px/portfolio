const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production'; 

module.exports = {
  mode: "production", 
  entry: [
    './src/script.ts'
  ],
  plugins: [
    new ExtractTextPlugin("styles.css")
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
        use: ExtractTextPlugin.extract({
            use: [ 
                'css-loader',
                'less-loader'
            ]
        })
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