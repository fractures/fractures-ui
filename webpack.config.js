const path = require("path")
const webpack = require("webpack")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		libraryTarget: "umd",
		globalObject: "this"
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: "babel-loader", exclude: [/node_modules/] },
			{ test: /\.css$/, loader: "raw-loader" }
		]
	},
	externals: {
		react: {
			amd: "react",
			commonjs: "react",
			commonjs2: "react",
			root: "react"
		},
		"react-dom": "commonjs react-dom"
	}
}
