const path = require('path');
const pkg = require('./package');

module.exports = {
  entry: [
    'src/polyfills.js',
    'src/index.js',
  ],
  output: {
    publicUrl: '/',
  },
  html: {
    title: pkg.productName,
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs'),
    publicPath: '/dist/',
  },
  postcss: {
    plugins: [],
  },
  presets: [
    require('poi-preset-bundle-report')(),
  ],
  plugins: [],
};
