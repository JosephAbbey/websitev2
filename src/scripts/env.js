var env;

try {
    env = require('../../.env.json');
} catch {
    env = process.env;
}

module.exports = env;
