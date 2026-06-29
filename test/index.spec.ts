import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

import { generate } from '../src/index';

const letters: Array<string> = ['a', 'b', 'c'];

const fixturesDir = new URL('./fixtures/', import.meta.url);
const fixture1 = readFileSync(new URL('1.txt', fixturesDir)).toString();
const fixture2 = readFileSync(new URL('2.txt', fixturesDir)).toString();
const fixture3 = readFileSync(new URL('3.txt', fixturesDir)).toString();
const fixture4 = readFileSync(new URL('4.txt', fixturesDir)).toString();

function check(fixture: string, level?: number): void {
    const output = fixture.trim();
    const chars = letters.slice();

    const gen = generate(chars, level);
    const result: Array<string> = [];

    for (const char of gen) {
        result.push(char);
    }

    expect(result.join('\n')).toEqual(output);
}

describe('brute-force-generator', () => {
    it('should be a function', () => {
        expect(generate).toEqual(expect.any(Function));
    });

    it('should not generate any items when passed empty alphabet', () => {
        const gen = generate();
        let empty = true;

        for (const _record of gen) {
            empty = false;
        }

        expect(empty).toBeTruthy();
    });

    it('should return list of all values when string size is default', () => {
        check(fixture3);
    });

    it('should return list of all values when string size equals 1', () => {
        check(fixture1, 1);
    });

    it('should return list of all values when string size equals 2', () => {
        check(fixture2, 2);
    });

    it('should return list of all values when string size equals 3', () => {
        check(fixture3, 3);
    });

    it('should return list of all values when string size equals 4', () => {
        check(fixture4, 4);
    });
});
