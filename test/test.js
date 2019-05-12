const fs = require('fs');
const path = require('path');

const letters = ['a', 'b', 'c'];
const fixture1 = fs.readFileSync(path.join(__dirname, 'fixtures/1.txt')).toString();
const fixture2 = fs.readFileSync(path.join(__dirname, 'fixtures/2.txt')).toString();
const fixture3 = fs.readFileSync(path.join(__dirname, 'fixtures/3.txt')).toString();
const fixture4 = fs.readFileSync(path.join(__dirname, 'fixtures/4.txt')).toString();

const { generate } = require('../src');

function check(fixture, level) {
    const output = fixture.trim();
    const chars = letters.slice();

    const gen = generate(chars, level);
    const result = [];

    for (let char of gen) {
        result.push(char);
    }

    expect(result.join('\n')).toEqual(output);
}

it('should be a function', () => {
    expect(generate).toEqual(jasmine.any(Function));
});

it('should return list of all values when string size equals 1', () => {
    const level = 1;
    check(fixture1, level);
});

it('should return list of all values when string size equals 2', () => {
    const level = 2;
    check(fixture2, level);
});

it('should return list of all values when string size equals 3', () => {
    const level = 3;
    check(fixture3, level);
});

it('should return list of all values when string size equals 4', () => {
    const level = 4;
    check(fixture4, level);
});
