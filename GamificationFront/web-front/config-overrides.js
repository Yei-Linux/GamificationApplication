module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
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
  });

  return config;
};
