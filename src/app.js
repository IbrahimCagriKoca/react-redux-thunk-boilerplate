import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from '../../redux-todo-list-example/src/app/store';

let store = createStore(() => { });


function App(props) {
    const [counter, setCounter] = useState(0);

    return (
        <Provider store={store}>
            <div>
                {counter}
            </div>
            <button onClick={() => setCounter(counter + 1)}>Testin</button>
        </Provider>
    );
}

export default hot(App);