import React from 'react';

const Todo = ({
    index, value, removeTodo
}) => {
    const handleRemoveItem = () => {
        removeTodo(index);
    };

    return (
        <li className='todo-txt'>
            {value}
            <button
                type='button' 
                name='button'
                onClick={handleRemoveItem}
            >-</button>
        </li>
    )
};

export default Todo;