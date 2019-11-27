const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

const styledComponentsTransformer = createStyledComponentsTransformer();
const env = dotenv.config().parsed;

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './static/images/',
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
    }),
    new FaviconsWebpackPlugin({
      logo: './public/images/favicon.png',
      prefix: 'static/favicons/',
      favicons: {
        appName: 'Marc Malignan',
        background: env.THEME,
        theme_color: env.THEME,
      },
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        windows: false,
        yandex: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    compress: true,
    hot: true,
    open: true,
  },
};
