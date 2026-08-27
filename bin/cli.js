#!/usr/bin/env node

const minimist = require('minimist');
const argv = minimist(process.argv.slice(2), {
    alias: {
        a: 'alphabet',
        l: 'length',
        h: 'help',
        v: 'version'
    },
    string: ['a'],
    boolean: ['h', 'v']
});

// Quit quietly when the output pipe is closed (e.g. `... | head`).
process.stdout.on('error', (err) => {
    if (err.code === 'EPIPE') process.exit(0);
    throw err;
});

function showHelp() {
    console.log('Usage: brute-force-generator -a [string] -l [num]');
    console.log('');
    console.log('Options:');
    console.log('      --help      Show help                                            [boolean]');
    console.log('      --version   Show version number                                  [boolean]');
    console.log('  -a, --alphabet                                                      [required]');
    console.log('  -l, --length                                                        [required]');
}

// Show help
if (argv.help) {
    showHelp();
    process.exit(0);
}

// Show version
if (argv.version) {
    const pkg = require('../package.json');
    console.log(pkg.version);
    process.exit(0);
}

// Validate required arguments. `-a`/`-l` given without a value are missing too:
// `string: ['a']` turns a bare `-a` into '', and a bare `-l` into `true`.
const hasAlphabet = typeof argv.a === 'string' && argv.a.length > 0;
const hasLength = argv.l !== undefined && argv.l !== true && argv.l !== '';
if (!hasAlphabet || !hasLength) {
    showHelp();
    console.error('');
    const missing = [];
    if (!hasAlphabet) missing.push('a');
    if (!hasLength) missing.push('l');
    console.error(`Missing required argument${missing.length > 1 ? 's' : ''}: ${missing.join(', ')}`);
    process.exit(1);
}

const a = argv.a.split('');
const l = Number(argv.l);

// `-l abc` -> NaN, `-l -1` -> negative: both would silently produce nothing.
if (!Number.isInteger(l) || l < 1) {
    console.error(`Invalid length: "${argv.l}". Expected a positive integer.`);
    process.exit(1);
}

const { generate } = require('../dist/index');

(function main() {
    const gen = generate(a, l);
    for (let record of gen) {
        console.log(record);
    }
})();
