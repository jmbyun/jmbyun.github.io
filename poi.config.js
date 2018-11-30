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
    title: 'Jeongmin Byun',
    // description: pkg.description,
    template: path.join(__dirname, 'index.ejs'),
  },
  postcss: {
    plugins: [
      // Your postcss plugins
    ],
  },
  presets: [
    require('poi-preset-bundle-report')(),
  ],
};
