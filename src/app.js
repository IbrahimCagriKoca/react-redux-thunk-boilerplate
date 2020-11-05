import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import './index.scss';
import store from './components/counter/reducers'
import Counter from './components/counter/counter';

function App(props) {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}

export default hot(App);