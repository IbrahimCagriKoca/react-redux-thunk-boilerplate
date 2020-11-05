import { createStore } from 'redux';

const initialState = {
    counterValue: 0
}

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, counterValue: state.counterValue + action.payload }
        default:
            return state
    }
}

const store = createStore(counterReducer, initialState);

export default store;
