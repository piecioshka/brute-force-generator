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
 * @param {Array<string|number>} [chars=[]] List of letters to permute
 * @param {number} [maxLevels=3] Maximum length of generated word
 */
function generate(chars = [], maxLevels = 3) {

    function * iteratee(prefix, index, level) {
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            const record = (prefix + char);
            yield record;

            if (index < level - 1) {
                yield * iteratee(record, index + 1, level);
            }
        }
    }

    return iteratee('', 0, maxLevels);
}

module.exports = {
    generate
};
