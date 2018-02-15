const path = require("path")
const webpack = require("webpack")

module.exports = {
	entry: "./components/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: "babel-loader"
			}
		]
	},

	externals: {
		react: {
			root: "react",
			commonjs2: "react",
			commonjs: "react",
			amd: "react"
		},
		"react-dom": "commonjs react-dom"
	}
}
