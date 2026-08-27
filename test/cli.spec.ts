import { describe, it, expect } from 'vitest';
import { execFileSync } from 'node:child_process';

const cli = new URL('../bin/cli.js', import.meta.url).pathname;

function run(args: string[]): { status: number; stdout: string; stderr: string } {
    try {
        const stdout = execFileSync('node', [cli, ...args], { encoding: 'utf8' });
        return { status: 0, stdout, stderr: '' };
    } catch (error: any) {
        return {
            status: error.status ?? 1,
            stdout: String(error.stdout ?? ''),
            stderr: String(error.stderr ?? ''),
        };
    }
}

describe('cli', () => {
    it('generates permutations for a valid alphabet and length', () => {
        const { status, stdout } = run(['-a', 'ab', '-l', '2']);
        expect(status).toBe(0);
        expect(stdout.trim().split('\n')).toEqual(['a', 'b', 'aa', 'ab', 'ba', 'bb']);
    });

    it('exits 1 when alphabet is missing', () => {
        expect(run(['-l', '2']).status).toBe(1);
    });

    it('exits 1 when -a is passed without a value', () => {
        const { status, stdout } = run(['-a', '-l', '2']);
        expect(status).toBe(1);
        // Must NOT generate permutations of the literal "true".
        expect(stdout).not.toContain('tt');
    });

    it('exits 1 for a non-integer length', () => {
        expect(run(['-a', 'ab', '-l', 'abc']).status).toBe(1);
    });

    it('exits 1 for length below 1', () => {
        expect(run(['-a', 'ab', '-l', '0']).status).toBe(1);
    });

    it('prints the version', () => {
        const pkg = require('../package.json');
        expect(run(['--version']).stdout.trim()).toBe(pkg.version);
    });
});
