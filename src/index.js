'use strict';

/**
 * Generate permutation of passed chars.
 *
 * @example
 * const gen = generate(['a', 'b'], 2);
 * for (let record of gen) {
 *   console.log(record); // 'a', 'b', 'aa', 'ab', 'ba', 'bb'
 * }
 *
 * @param {Array<string>} chars List of letters to permute
 * @param {number} [maxLevels=3] Maximum length of generated word
 */
function generate(chars = [], maxLevels = 3) {

    function * iteratee(prefix, index, level) {
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            const record = (prefix + char);

            if (index >= level) {
                yield record;
            } else {
                yield * iteratee(record, index + 1, level);
            }
        }
    }

    function * loop(string) {
        for (let i = 0; i < maxLevels; i++) {
            yield * iteratee(string, 0, i);
        }
    }

    return loop('');
}

module.exports = {
    generate
};
