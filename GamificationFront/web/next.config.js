const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  webpack: (config, options, isServer) => {
    config.node = {
      fs: 'empty'
    }
    config.module.rules({
      test: /\.tsx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            babelOptions: {
              babelrc: false,
              presets: ['@babel/preset-env', '@emotion/babel-preset-css-prop'],
              plugins: ['@emotion', 'macros']
            },
            babelCore: '@babel/core'
          }
        }
      ]
    })
    config.resolve.extensions.push('.ts', '.tsx', '.jsx')

    return config
  }
}
