const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nodeFilePath = 'nodeDist'

const rootDir = path.resolve(__dirname, '../../');
const distDir = path.join(rootDir, nodeFilePath);

module.exports = {
  mode: 'development',
  target: 'electron-main',
  entry: {
    main: './electron/main.ts',
    preload: './electron/preload.ts',
  },
  output: {
    path: distDir,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
     alias: { 
        "el": path.resolve("electron"),
        "shared": path.resolve("shared"),
      },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /electron/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(rootDir, '/electron/script/python'),
          to: path.join(rootDir, `${nodeFilePath}/script/python`)
        }
      ]
    })
  ]
};