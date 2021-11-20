const path = require('path');

module.exports = {
  pwa: {
    manifestOptions: {
      name: 'PWA Demo Employees',
      short_name: 'PWA Demo',
      theme_color: '#963484',
      background_color: '#28c2ff',
    },
  },
  outputDir: path.resolve(__dirname, '../server/public'),
};
