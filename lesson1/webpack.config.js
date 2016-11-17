const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './home',  // which module to pack
  output: {
    filename: 'build.js',
    library: 'home'
  },
  watch: NODE_ENV == 'development',
  devtool: NODE_ENV == 'development' ? "source-map": null,

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
}
