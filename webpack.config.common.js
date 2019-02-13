const path = require("path");
// const {CheckerPlugin} = require('awesome-typescript-loader');
require('@babel/polyfill');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');


module.exports =  {
    entry:  ['@babel/polyfill', './src/index.tsx'],
    // output: {
    //     path: __dirname + '/public',
    //     filename: 'app.bundle.js'
    // },
    output: {
		path: path.join(__dirname, "public"),
		filename: '[name].[contenthash].js',
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
        new BundleAnalyzerPlugin(),
        new DynamicCdnWebpackPlugin()
      ],
    performance: {
        hints: false,
    },
    optimization: {
		splitChunks: {
            chunks: 'all',
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
}
