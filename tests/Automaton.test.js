const { describe, it, before } = require('node:test');
const assert = require('node:assert');

const Automaton = require('../Automaton');

describe('test Automaton from firts example', () => {

    let automaton;
    before(() => {
        const initialState = 'q0';
        const alphabet = ['a', 'b'];
        const states = ['q0', 'q1', 'q2', 'q3'];
        const finalStates = ['q0', 'q1', 'q2', 'q3'];

        automaton = new Automaton(alphabet, states, initialState, finalStates);

        automaton.createTransition('q0', 'q1', 'a');
        automaton.createTransition('q1', 'q1', 'a');
        automaton.createTransition('q1', 'q2', 'b');
        automaton.createTransition('q2', 'q1', 'b');
        automaton.createTransition('q2', 'q3', 'a');
    });

    describe('should accept words', () => {
        it('should accept word "a"', () => {
            const word = 'a';

            const result = automaton.validateWord(word);

            assert.strictEqual(result, 'accept')
        });
    
        it('should accept word "aaaa"', () => {
            const word = 'aaaa';

            const result = automaton.validateWord(word);

            assert.strictEqual(result, 'accept')
        });

        it('should accept word "aba"', () => {
            const word = 'aba';

            const result = automaton.validateWord(word);

            assert.strictEqual(result, 'accept')
        });

        it('should accept word "aabbba"', () => {
            const word = 'aabbba';

            const result = automaton.validateWord(word);

            assert.strictEqual(result, 'accept')
        });
    });

    describe('should reject words', () => {
        it('should reject word "bb"', () => {
            const word = 'bb';

            const result = automaton.validateWord(word);

            assert.strictEqual(result, 'reject')
        });

        it('should reject word "abab"', () => {
            const word = 'abab';

            const result = automaton.validateWord(word);

            assert.strictEqual(result, 'reject')
        });
    });

});