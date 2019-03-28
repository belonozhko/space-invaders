const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};