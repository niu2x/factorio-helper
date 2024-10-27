const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const webpack = require('webpack')

module.exports = {
  entry : './web/index.tsx',
  module : {
    rules : [ {
      test : /\.tsx?$/,
      use : 'ts-loader',
      exclude : /node_modules/,
    } ]
  },
  resolve : {
    extensions : [ '.ts', '.js', '.tsx' ],
    fallback : {
      "zlib" : require.resolve("browserify-zlib"),
      "buffer" : require.resolve("buffer/"),
      "assert" : require.resolve("assert/"),
      "stream" : require.resolve("stream-browserify")
    }
  },
  output : {
    filename : "bundle.[contenthash].js",
    path : path.resolve(__dirname, 'dist-web')
  },
  plugins :
          [
            new HtmlWebpackPlugin(
                {title : 'project', template : 'web/index.html'}),
            new WebpackAssetsManifest(),
            new webpack.ProvidePlugin({
              process : 'process/browser',
            }),
          ],
}