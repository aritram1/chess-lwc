const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match all .js files
        exclude: /(node_modules|bower_components)/, // Exclude node_modules and bower_components
        use: {
          loader: 'babel-loader', // Use the babel-loader for this file
          options: {
            presets: ['@babel/preset-env'], // Use the @babel/preset-env preset
          },
        },
      },
      {
        test: /\.css$/, // Match all .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for this file
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match all image files
        type: 'asset/resource', // Use the asset/resource type
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Project',
      template: 'index.html'
    })
  ]
};
