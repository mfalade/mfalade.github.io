const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['styleguideSS'] = path.join(__dirname, 'styleguideSS');
    return config;
  },
});
