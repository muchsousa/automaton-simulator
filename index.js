const readline = require('node:readline');
const { readFileSync } = require('node:fs');
const path = require('node:path');

const Automaton = require('./Automaton');

const filename = path.resolve(__dirname, process.argv[2]);
const fileData = readFileSync(filename, 'utf8');

const [initialState, alphabet, states, finalStates, ...transitions] = fileData
    .split(/\r?\n/) // split lines
    .map(line => line.split(' '));

// ----------------------------------------------------------------

const automaton = new Automaton(alphabet, states, initialState, finalStates);

transitions.forEach(([from, to, transition]) => automaton.createTransition(from, to, transition));

// ----------------------------------------------------------------

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

rl.question('Which word do you want to validate? ', word => {
    const result = automaton.validateWord(word);

    console.log(`The automaton ${result.toUpperCase()} this word`);

    rl.close();
});
