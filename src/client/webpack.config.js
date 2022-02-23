const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: './js/index.js',
        path: path.resolve(__dirname, 'bulid')
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
    mode: 'development',
    externals: {
        './jquery1.12.4.min.js': 'jQuery'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'bulid'),
        },
        compress: true,
        port: 9000,
        open: true,
        //inline: true,
        //hot: true
        liveReload: true,     
    },
    target: 'web'
}