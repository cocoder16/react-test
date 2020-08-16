import React from 'react';
import TodoItem from './TodoItem';

const Todo = ({
    //ref
    ulEle, inputEle,
    //state
    todo, list,
    //function
    addTodo, removeTodo, handleInputChange, handleInputKeyDown
}) => (
    <div className='todo'>
        <h2>Todo</h2>
        <ul ref={ulEle}>
            {list.map((cur, i) => {
                return (
                    <TodoItem
                        key={i}
                        index={i}
                        value={cur}
                        removeTodo={removeTodo}
                    />
                )
            })}
        </ul>
        {
            list.length !== 5 ? 
                <div className='add-todo'>
                    <input 
                        ref={inputEle}
                        value={todo}
                        type='text' 
                        name='inputTodo' 
                        maxLength='15' 
                        placeholder='What needs to be done?'
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                    />
                    <button type='button' name='button'
                        onClick={addTodo}
                    >
                        +
                    </button>
                </div>
            :
                <p className='msg'>The list is full.</p>
        }
    </div>
);

export default Todo;