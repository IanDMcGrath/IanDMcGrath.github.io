const path = require("path");
const browserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";


module.exports = {
  entry: './index.jsx',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins:
    [
      new browserSyncPlugin({
        host: 'localhost',
        port: 3000,
        files: ['./dist/*.html','./src/*'],
        server: { baseDir: ['dist'] }
      }),
    ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
  module:
  {
    rules:
    [
      { // HTML
        test: /\.(html)$/i,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              {
                tag: "meta",
                attribute: "content",
                type: "src",
                filter: (tag, attribute, attributes, resourcePath) => {
                  if (
                    attributes.value === "og:image" ||
                    attributes.name === "twitter:image"
                  ) {
                    return true;
                  }
                  return false;
                }
              },
            ]
          }
        }
      }, { // .js and .jsx
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      }, { // images
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'assets',
            // publicPath: 'assets',
          },
        },
      }, { // CSS
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
    ]
  }
};