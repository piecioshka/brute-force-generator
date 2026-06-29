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
 * @param chars List of letters to permute
 * @param maxLevels Maximum length of generated word
 */
export function generate(
    chars: Array<string | number> = [],
    maxLevels = 3
): Generator<string> {
    function* iteratee(
        prefix: string,
        index: number,
        level: number
    ): Generator<string> {
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            const record = prefix + char;

            if (index >= level) {
                yield record;
            } else {
                yield* iteratee(record, index + 1, level);
            }
        }
    }

    function* loop(string: string): Generator<string> {
        for (let i = 0; i < maxLevels; i++) {
            yield* iteratee(string, 0, i);
        }
    }

    return loop('');
}
