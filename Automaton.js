class Automaton {

    constructor(alphabet, states, initialState, finalStates) {
        this.alphabet = alphabet;
        this.initialState = initialState;

        this.states = states.reduce((states, state) => {
            const isInitial = state === initialState;
            const isFinal = finalStates.includes(state);
    
            states[state] = {
                isInitial,
                isFinal,
                transitions: {}
            };

            return states;
        }, {});

        this._currentState = initialState;
    }

    createTransition(from, to, transition) {
        if (!this.states[from])
            return;

        if (!this.states[from].transitions[transition])
            this.states[from].transitions[transition] = [];

        this.states[from].transitions[transition].push(to); 
    }

    getCurrentState() {
        return this.states[this._currentState];
    }

    setCurrentState(state) {
        this._currentState = state;
    }

    processTransition(transition) {
        const transitions = this.getCurrentState().transitions[transition] || [];

        if (!transitions.length) return false;

        this.setCurrentState(transitions[0]); // support 1 only transition

        return true;
    }

    validateWord(word) {
        this.setCurrentState(this.initialState);
        for (const transition of word) {
            if (!this.alphabet.includes(transition)) {
                console.warn(`Transition is not present on alphabet symbol: ${transition}`);
                continue;
            }

            const processedTransition = this.processTransition(transition);
            if (!processedTransition)
                return 'reject';
        }

        const isFinalState = this.getCurrentState().isFinal;
        if (isFinalState)
            return 'accept';

        return 'reject';
    }
}

module.exports = Automaton;