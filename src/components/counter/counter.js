import React from 'react';
import { increment } from './actions';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterValue);
    return (
        <div className={"container"}>
            <span>{counter}</span>
            <button onClick={() => dispatch(increment())}>Increase</button>
        </div>
    )
}

export default Counter;