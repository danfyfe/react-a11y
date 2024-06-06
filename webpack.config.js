const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development', // default to 'development' if not set
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      library: 'my-react-library',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
