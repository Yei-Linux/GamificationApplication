// const fs = require('fs')

// const { resolve } = require("path")
const path = require('path')

// const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
module.exports = {
  webpack: (config, options, isServer) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    // config.module.rules.unshift({
    //   test: /\.ts|\.tsx$/,
    //   use: 'null-loader'
    // })
    config.module.rules.push({
      //   test: /\.ts|\.tsx$/,
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
              plugins: ['@emotion']
            },
            babelCore: '@babel/core'
          }
        }
      ],
      resolve: {
        alias: {
          react: path.resolve('./node_modules/react')
          // 'react-dom': path.resolve('./node_modules/react')
        }
      }
    })
    // resolve :{
    //     alias: {
    //         react: path.resolve('./node_modules/react'),
    //         'react-dom': path.resolve('./node_modules/react-dom'),
    //       }
    // }
    config.resolve.extensions.push('.ts', '.tsx', '.jsx')
    // config.plugins.push(
    //   new FilterWarningsPlugin({
    //     exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
    //   })
    // )

    return config
  }
}

// module.exports = ({ config }) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     loader: require.resolve('babel-loader'),
//     options: {
//       presets: [require.resolve('babel-preset-react-app')]
//     }
//   })

//   config.resolve.extensions.push('.ts', '.tsx')
//   return config
// }
