# brute-force-generator

[![npm version](https://badge.fury.io/js/brute-force-generator.svg)](https://badge.fury.io/js/brute-force-generator)
[![downloads count](https://img.shields.io/npm/dt/brute-force-generator.svg)](https://www.npmjs.com/~piecioshka)
[![dependencies](https://david-dm.org/piecioshka/brute-force-generator.svg)](https://github.com/piecioshka/brute-force-generator)
[![travis](https://img.shields.io/travis/piecioshka/brute-force-generator.svg)](https://travis-ci.org/piecioshka/brute-force-generator)
[![coveralls](https://coveralls.io/repos/github/piecioshka/brute-force-generator/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/brute-force-generator?branch=master)
[![snyk](https://snyk.io/test/github/piecioshka/brute-force-generator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/piecioshka/brute-force-generator?targetFile=package.json)

:hammer: Build a dictionary by permuting passed letters (using ES2015+)

## Installation

```bash
npm install [-g] brute-force-generator
```

## Usage

```javascript
const gen = generate(['a', 'b'], 2);

for (let record of gen) {
    console.log(record); // 'a', 'b', 'aa', 'ab', 'ba', 'bb'
}
```

## CLI

```bash
> brute-force-generator --help
Usage: brute-force-generator -a [string] -l [num]

Options:
  --help          Show help                                            [boolean]
  --version       Show version number                                  [boolean]
  -a, --alphabet                                                      [required]
  -l, --length                                                        [required]
```

Example of using:

```bash
# Lowercase latin alphabet — abcdefghijklmnopqrstuvwxyz
brute-force-generator -a abcdefghijklmnopqrstuvwxyz -l 5 > latin-5.dic

# Generate infinity wordlist
brute-force-generator -a abcdefghijklmnopqrstuvwxyz -l Infinity
```

## Unit tests

```bash
npm test
```

## Code coverage

```bash
npm run coverage
```

## Related

* [dicts](https://github.com/piecioshka/dicts)
* [test-md5-tools](https://github.com/piecioshka/test-md5-tools)
* [indexed-string-variation](https://github.com/lmammino/indexed-string-variation)

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019
