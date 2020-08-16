import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Counter} from '../components';
import * as counterActions from '../store/counter';
import '../styles/Counter.css';

const CounterContainer = () => {
    const [count, title] = useSelector(state => [
        state.count, 
        state.title
    ], []); 
    const dispatch = useDispatch();

    const increase = () => dispatch(counterActions.increase());
    const decrease = () => dispatch(counterActions.decrease());
    
    return (
        <Counter
            count={count}
            title={title}
            increase={increase}
            decrease={decrease}
        />
    )
}

export default CounterContainer;