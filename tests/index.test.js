const { describe, it } = require('node:test');
const assert = require('node:assert');

const { execSync } = require('child_process')
const excuteFile = (filename, word) => execSync(`echo '${word}' | node index.js ${filename}`).toString();

describe('test automaton definition from a file', () => {
    describe('test using file "AFD_example_01.txt"', () => {

        describe('should accept words', () => {
            it('should accept word "a"', () => {
                const word = 'a';
    
                const result = excuteFile('AFD_example_01.txt', word);
    
                assert.match(
                    result,
                    /The automaton ACCEPT this word/
                );
            });
        
            it('should accept word "aaaa"', () => {
                const word = 'aaaa';
    
                const result = excuteFile('AFD_example_01.txt', word);
    
                assert.match(
                    result,
                    /The automaton ACCEPT this word/
                );
            });
    
            it('should accept word "aba"', () => {
                const word = 'aba';
    
                const result = excuteFile('AFD_example_01.txt', word);
    
                assert.match(
                    result,
                    /The automaton ACCEPT this word/
                );
            });
    
            it('should accept word "aabbba"', () => {
                const word = 'aabbba';
    
                const result = excuteFile('AFD_example_01.txt', word);
    
                assert.match(
                    result,
                    /The automaton ACCEPT this word/
                );
            });
        });
    
        describe('should reject words', () => {
            it('should reject word "bb"', () => {
                const word = 'bb';
    
                const result = excuteFile('AFD_example_01.txt', word);
    
                assert.match(
                    result,
                    /The automaton REJECT this word/
                );
            });
    
            it('should reject word "abab"', () => {
                const word = 'abab';
    
                const result = excuteFile('AFD_example_01.txt', word);
    
                assert.match(
                    result,
                    /The automaton REJECT this word/
                );
            });
        });
    });

    describe('test using file "AFD_example_02.txt"', () => {

        describe('should accept words', () => {
            it('should accept word "a"', () => {
                const word = 'a';
    
                const result = excuteFile('AFD_example_02.txt', word);
    
                assert.match(
                    result,
                    /The automaton ACCEPT this word/
                );
            });
        
            it('should accept word "aba"', () => {
                const word = 'aba';
    
                const result = excuteFile('AFD_example_02.txt', word);
    
                assert.match(
                    result,
                    /The automaton ACCEPT this word/
                );
            });
            
        });
    
        describe('should reject words', () => {
            it('should reject word "aa"', () => {
                const word = 'aa';
    
                const result = excuteFile('AFD_example_02.txt', word);
    
                assert.match(
                    result,
                    /The automaton REJECT this word/
                );
            });

            it('should reject word "ab"', () => {
                const word = 'ab';
    
                const result = excuteFile('AFD_example_02.txt', word);
    
                assert.match(
                    result,
                    /The automaton REJECT this word/
                );
            });
    
            it('should reject word "b"', () => {
                const word = 'b';
    
                const result = excuteFile('AFD_example_01.txt', word);
    
                assert.match(
                    result,
                    /The automaton REJECT this word/
                );
            });
        });
    });
});