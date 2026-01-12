#!/usr/bin/env node

const minimist = require('minimist');
const argv = minimist(process.argv.slice(2), {
    alias: {
        a: 'alphabet',
        l: 'length',
        h: 'help',
        v: 'version'
    }
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

// Validate required arguments
if (!argv.a || !argv.l) {
    showHelp();
    console.error('');
    const missing = [];
    if (!argv.a) missing.push('a');
    if (!argv.l) missing.push('l');
    console.error(`Missing required argument${missing.length > 1 ? 's' : ''}: ${missing.join(', ')}`);
    process.exit(1);
}

const a = String(argv.a).split('');
const l = Number(argv.l);

const { generate } = require('../src');

(function main() {
    const gen = generate(a, l);
    for (let record of gen) {
        console.log(record);
    }
})();
