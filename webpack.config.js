const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const HTMLWebpackPlugin = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, './app/index.html'),
	filename: 'index.html',
	inject: 'body'
});

const UGLIFYJsPlugin = new UglifyJsPlugin({
	test: /\.js($|\?)/i
});


module.exports = {
	entry: [
		'babel-polyfill',
		'./app/index.js'
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: [ 'style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,  
				loader: 'url-loader'
			}
		]
	},
	devServer: {
		inline: true,
		port: 8008
	},
	plugins: [
		HTMLWebpackPlugin,
		UGLIFYJsPlugin
	]
};