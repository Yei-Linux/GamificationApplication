var path = require("path");

console.log("???????");

module.exports = {
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    alias: {
      react: path.resolve("node_modules/react"),
    },
  },
  module: {
    rules: [
      {
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelOptions: {
            babelrc: false,
            presets: ["@babel/preset-env", "@emotion/babel-preset-css-prop"],
            plugins: ["@emotion", "macros"],
          },
          babelCore: "@babel/core",
        },
      },
    ],
  },
};
