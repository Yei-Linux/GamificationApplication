const path = require('path')
module.exports = {
  webpack: (config, options, isServer) => {
    config.node = {
      fs: 'empty'
    }
    config.externals =  {
      'react': "commonjs react",
      'react-dom': "commonjs react-dom"
    },
    config.module.unknownContextCritical = false
    config.module.exprContextCritical = false
    config.module.rules.push({
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
              plugins: ['@emotion','macros']
            },
            babelCore: '@babel/core'
          }
        }
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx', '.jsx')

    return config
  }
}
