const config = require('../../.eslintrc');

module.exports = {
    ...config,
    ignorePatterns: ['build', 'node_modules'],
};
