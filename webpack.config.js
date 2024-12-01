const HtmlWebpackPlugin = require("html-webpack-plugin");
const { default: test } = require("node:test");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const loader = require("sass-loader");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/bundle.js",
    publicPath: "",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/img", to: "img" },
        /* { from: "./src/img/icons", to: "img/icons" }, */
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],

  externals: {
    Swiper: "Swiper",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      /* {
        test: /\.html$/,
        use: "html-loader",
      }, */

      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      ,
      /* {
        test: /\.scss$/,
        use: [
          {loader
            MiniCssExtractPlugin.loader}
             "style-loader" 
             /* "css-loader" */ /*    , "sass-loader"],
      }, */

      {
        test: /\.{ttf|eot|woff|woff2}$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]", // Установка пути для шрифтов
        },
      },
    ],
  },
};
