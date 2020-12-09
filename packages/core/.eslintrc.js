const config = require('../../.eslintrc');

module.exports = {
    ...config,
    ignorePatterns: ['dist', 'node_modules'],
};
