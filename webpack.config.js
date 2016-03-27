module.exports = {
  entry: __dirname + '/src/client/app.js',
  output: {
    path: __dirname + '/build/client',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/src/client',
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};