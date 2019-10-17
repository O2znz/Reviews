const {defaults} = require('jest-config');

module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
};