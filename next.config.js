const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['styleguide'] = path.join(__dirname, 'styleguide');
    return config;
  }
});
