const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// webpack-bundle-analyzer
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      //load typescript files
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      //load css files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //load svg files
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },
  performance: {
    maxAssetSize: 300000,
    maxEntrypointSize: 400000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new BundleAnalyzerPlugin(),
  ],
};
