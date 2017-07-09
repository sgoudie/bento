module.exports = {
  entry: './app.js',
  output: {
    filename: './build.js',
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        query: {
          presets: ['env']
        }
      }
    ]
  }
};
