// const {resolve} = require('path');
// const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports =  {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/public',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx']
    },
    module: {
        rules : [
            {
                test: /\.tsx?$/, loader: 'ts-loader' 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html.ejs',}),
      ],
    performance: {
        hints: false,
      },
}
