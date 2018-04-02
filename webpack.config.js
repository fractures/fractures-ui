const path = require("path")
const webpack = require("webpack")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: "babel-loader" },
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
