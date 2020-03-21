const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./temp/index.html",
      filename: "index.html",
      chunks: "index",
      inject: "body" 
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'docs')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ] 
      }
    ]
  }
}