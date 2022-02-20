const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: './js/index.js',
        path: resolve(__dirname, 'bulid')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './css/index.css'
        })
    ],
    mode: 'production'
}