'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {

    devtool: "source-map",

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index'),
    ],

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel-loader'
        }]
    }
}