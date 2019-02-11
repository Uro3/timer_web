const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js?[hash]',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 8080,
    watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./src/index.pug"
    })
  ]
};

module.exports = config;
