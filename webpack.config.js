const path = require("path");
const portFinderSync = require('portfinder-sync');
const browserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*', '.css']
  },
  plugins:
    [
      new browserSyncPlugin({
        host: 'localhost',
        port: 3000,
        files: ['./dist/*.html','./src/*'],
        server: { baseDir: ['dist'] }
      }),
      new MiniCssExtractPlugin()
    ],
  module:
  {
    rules:
    [
      // HTML
      {
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
      }, {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      }, {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'assets/images',
            },
          },
        ],
      },
      // CSS
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  }
};