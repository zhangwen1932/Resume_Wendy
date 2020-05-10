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
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')({
                  "overrideBrowserslist": [
                    ">0.25%",
                    "not dead"
                  ]
                })
              ]
            }
          }
        }, {
          loader: 'less-loader',
          options: {
            "modifyVars": {},
            javascriptEnabled: true,
          }
        }],
        exclude: /node_modules/
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ] 
      }
    ]
  }
}