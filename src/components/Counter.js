import React from 'react';

const Counter = ({
    //state
    count, title,
    //action
    increase, decrease
}) => (
    <div className='counter'>
        <h2>Counter</h2>
        <button 
            className='button-increase'
            onClick={increase}
        >
            +
        </button>
        <span className='count-value'>{count}</span>
        <button 
            className='button-decrease'
            onClick={decrease}
        >
            -
        </button>
        <div className='count-title'>
            Count title :
            <span className='title-txt'>{title}</span>
        </div>
    </div>
);

export default Counter;