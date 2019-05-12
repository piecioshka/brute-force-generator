#!/usr/bin/env node

const yargs = require('yargs');
const argv = yargs
    .usage('Usage: $0 -a [string] -l [num]')
    .alias('a', 'alphabet')
    .alias('l', 'length')
    .demandOption(['a', 'l'])
    .argv;

const a = String(argv.a).split('');
const l = Number(argv.l);

const { generate } = require('../src');

(function main() {
    const gen = generate(a, l);
    for (let record of gen) {
        console.log(record);
    }
})();
