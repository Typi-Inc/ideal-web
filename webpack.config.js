const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const SOURCE_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, '..', 'ideal-server', 'public');

const common = {
  entry: path.resolve(SOURCE_PATH, 'index.js'),
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [
          SOURCE_PATH,
          path.resolve(ROOT_PATH, 'node_modules', 'react-spinkit')
        ]
      },
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: SOURCE_PATH
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Insta Deal',
      template: 'index.html'
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      proxy: {
        '/model.json*': {
          target: 'http://localhost:9090',
          secure: true
        }
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
} else {
  module.exports = merge(common, {
    output: {
      path: BUILD_PATH,
      filename: 'bundle.js'
    }
  });
}
