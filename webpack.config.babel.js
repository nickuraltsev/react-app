import webpack from 'webpack';
import path from 'path';

const srcPath = path.join(__dirname, 'src');

export default {
  entry: path.join(srcPath, 'index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: srcPath,
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [srcPath, "node_modules"],
  },
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: srcPath,
    port: 6789,
    proxy: {
      '/api': {
        target: 'http://localhost:5678',
      },
    },
  },
};
