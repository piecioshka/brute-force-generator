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

// Show help
if (argv.help) {
    console.log('Usage: brute-force-generator -a [string] -l [num]');
    console.log('');
    console.log('Options:');
    console.log('      --help      Show help                                            [boolean]');
    console.log('      --version   Show version number                                  [boolean]');
    console.log('  -a, --alphabet                                                      [required]');
    console.log('  -l, --length                                                        [required]');
    process.exit(0);
}

// Show version
if (argv.version) {
    const pkg = require('../package.json');
    console.log(pkg.version);
    process.exit(0);
}

// Validate required arguments
if (!argv.a) {
    console.error('Usage: brute-force-generator -a [string] -l [num]');
    console.error('');
    console.error('Options:');
    console.error('      --help      Show help                                            [boolean]');
    console.error('      --version   Show version number                                  [boolean]');
    console.error('  -a, --alphabet                                                      [required]');
    console.error('  -l, --length                                                        [required]');
    console.error('');
    if (!argv.a && !argv.l) {
        console.error('Missing required arguments: a, l');
    } else if (!argv.a) {
        console.error('Missing required argument: a');
    } else {
        console.error('Missing required argument: l');
    }
    process.exit(1);
}

if (!argv.l) {
    console.error('Usage: brute-force-generator -a [string] -l [num]');
    console.error('');
    console.error('Options:');
    console.error('      --help      Show help                                            [boolean]');
    console.error('      --version   Show version number                                  [boolean]');
    console.error('  -a, --alphabet                                                      [required]');
    console.error('  -l, --length                                                        [required]');
    console.error('');
    console.error('Missing required argument: l');
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
