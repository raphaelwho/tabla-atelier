// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(css|jpg|png)$": "<rootDir>/tests/empty-module.js"
  }
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      "\\.(css|jpg|png)$": "<rootDir>/tests/empty-module.js"
    }
  };
};