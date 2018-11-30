const path = require('path');
const pkg = require('./package');

module.exports = {
  entry: [
    'src/polyfills.js',
    'src/index.js',
  ],
  output: {
    publicUrl: '/dist',
  },
  html: {
    title: pkg.productName,
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs'),
  },
  postcss: {
    plugins: [],
  },
  presets: [
    require('poi-preset-bundle-report')(),
  ],
  plugins: [],
};
