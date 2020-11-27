const output_path = __dirname + '/build'

module.exports = {
	mode: 'development',
	entry: {
		js: './js/app.js',
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader'},
		]
	},
	output: {
		path: output_path,
		filename: '[name].bundle.js'
	}
}