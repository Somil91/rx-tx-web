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
                test: /\.js$/,
                use: ["babel-loader","source-map-loader"],
                exclude: "/node_modules/",
                enforce: "pre"
            },
            {
                test: /\.tsx?$/, 
                loader: ["babel-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html.ejs',}),
      ],
    performance: {
        hints: false,
      },
}
