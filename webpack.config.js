const path = require("path");

const postCSSPlugins = [require("autoprefixer")];

module.exports = {
  entry: "./app/assets/scripts/APP.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    before: function (app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    host: "0.0.0.0",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Step3: Creates `style` nodes from JS strings
          "style-loader",
          // Ste2: Translates CSS into CommonJS
          "css-loader",
          // Step: 1Compiles Sass to CSS
          "sass-loader",
          { loader: "postcss-loader", options: { plugins: postCSSPlugins } },
        ],
      },
    ],
  },
};
