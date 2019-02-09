// const {resolve} = require('path');
// const {CheckerPlugin} = require('awesome-typescript-loader');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports =  {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/public',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules : [
            {
                test: /\.tsx?$/, loader: 'ts-loader' 
            }
        ]
    }
}
