const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: process.env.NODE_ENV || "development",
  target: process.env.NODE_ENV === "production" ? "browserslist" : "web",
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)?ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  devtool: "source-map",
  plugins: [new MiniCssExtractPlugin()],
};
