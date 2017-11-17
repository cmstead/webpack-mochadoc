var webpack = require('webpack');
const Mochadoc = require('./index.js');

module.exports = {
  context: __dirname,
  devtool: false,
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/*.js",
    filename: "scripts.min.js"
  },
  plugins: [
    new Mochadoc({
        test: {
            config: './.mochadocrc'
        }
    })
  ],
};