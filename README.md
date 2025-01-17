# brute-force-generator

[![cli-available](https://badgen.net/static/cli/available/?icon=terminal)](#cli)
[![node version](https://img.shields.io/node/v/brute-force-generator.svg)](https://www.npmjs.com/package/brute-force-generator)
[![npm version](https://badge.fury.io/js/brute-force-generator.svg)](https://badge.fury.io/js/brute-force-generator)
[![downloads count](https://img.shields.io/npm/dt/brute-force-generator.svg)](https://www.npmjs.com/package/brute-force-generator)
[![size](https://packagephobia.com/badge?p=brute-force-generator)](https://packagephobia.com/result?p=brute-force-generator)
[![license](https://img.shields.io/npm/l/brute-force-generator.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/brute-force-generator/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/brute-force-generator/actions/workflows/testing.yml)

🔨 Build a dictionary by permuting passed letters (using ES2015+)

## Usage

```javascript
const generate = require('brute-force-generator');

const gen = generate(['a', 'b'], 2);

for (let record of gen) {
    console.log(record); // 'a', 'b', 'aa', 'ab', 'ba', 'bb'
}
```

## CLI

Installation:

```bash
npm install -g brute-force-generator
```

Help:

```bash
brute-force-generator --help

Usage: brute-force-generator -a [string] -l [num]

Options:
  --help          Show help                                            [boolean]
  --version       Show version number                                  [boolean]
  -a, --alphabet                                                      [required]
  -l, --length                                                        [required]
```

Usage:

```bash
# Lowercase latin alphabet — abcdefghijklmnopqrstuvwxyz
brute-force-generator -a abcdefghijklmnopqrstuvwxyz -l 5 > latin-5.dic

# Generate infinity wordlist (may take some time 😈)
brute-force-generator -a abcdefghijklmnopqrstuvwxyz -l Infinity
```

## Related

* [dicts](https://github.com/piecioshka/dicts)
* [test-md5-tools](https://github.com/piecioshka/test-md5-tools)
* [indexed-string-variation](https://github.com/lmammino/indexed-string-variation)

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2019
