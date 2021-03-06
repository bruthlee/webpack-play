var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './main.js'
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].js'
    },
    devServer: {
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}