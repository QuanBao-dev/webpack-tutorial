const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: process.env.NODE_ENV || "development",
  target: process.env.NODE_ENV === "production" ? "browserslist" : "web",
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)?ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  devtool: "source-map",
  plugins: [new MiniCssExtractPlugin()],
};
