const path = require("path");
const babelPresetEnv = require("@babel/preset-env");

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  entry: {
    "non-interactive": "./non_interactive.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /core-web\/modules/,
        use: {
          loader: "babel-loader",
          options: {
            comments: false,
            presets: [
              [
                babelPresetEnv,
                {
                  corejs: "^3.6.3",
                  targets: {
                    browsers: [
                      "chrome >= 40",
                      "edge >= 12",
                      "firefox >= 35",
                      "opera >= 27",
                      "safari >= 9",
                      "ie >= 11"
                    ]
                  },
                  useBuiltIns: "usage"
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|core-web\/modules)/,
        use: {
          loader: "babel-loader",
          options: {
            comments: false,
            plugins: [
              [
                "@mrhenry/core-web",
                {
                  browsers: {
                    chrome: "40",
                    firefox: "35",
                    edge: "12",
                    opera: "27",
                    safari: "9",
                    ie: "11"
                  }
                }
              ]
            ],
            presets: [
              [
                babelPresetEnv,
                {
                  corejs: "^3.6.3",
                  targets: {
                    browsers: [
                      "chrome >= 40",
                      "edge >= 12",
                      "firefox >= 35",
                      "opera >= 27",
                      "safari >= 9",
                      "ie >= 11"
                    ]
                  },
                  useBuiltIns: "usage"
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
