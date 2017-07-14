const { resolve, join } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.js"
  },
  output: {
    path: resolve(__dirname, "public"),
    publicPath: "/",
    filename: "[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: module =>
        module.context && module.context.indexOf("node_modules") !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest"
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "index.html")
    }),
    new ExtractTextPlugin("style.css")
  ],
  stats: "verbose",
  devtool: "#cheap-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: resolve(__dirname, "src")
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:3]"
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: [".js", ".css"]
  }
};
