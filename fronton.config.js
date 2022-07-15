const { grid } = require('@fronton/postcss-plugin').presets;

module.exports = {
  plugins: [require('@fronton/postcss-plugin').plugin],
  theme: {
    layout: {
      breakpoints: grid.lmruGrid
    }
  }
};
