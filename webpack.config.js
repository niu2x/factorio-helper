const path = require('path')

module.exports = {
	entry: './index.ts',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js'],
		fallback: { 
			"zlib": require.resolve("browserify-zlib") ,
			"buffer": require.resolve("buffer/"),
			"assert": require.resolve("assert/"),
			"stream": require.resolve("stream-browserify")
		}
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist-web')
	}
}