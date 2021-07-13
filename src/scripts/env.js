var env;

try {
    env = JSON.parse(require('fs').readFileSync('FILE.TXT', 'utf8'));
} catch {
    env = process.env;
}

module.exports = env;
