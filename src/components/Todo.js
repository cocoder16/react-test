import React, {useState, useEffect, useRef} from 'react';
import TodoItem from './TodoItem';
import useInput from '../hooks/useInput';
import '../styles/Todo.css';

const Todo = () => {
    // todo는 개별 값, list는 todo의 집합인 배열
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);
    const [inputEle, inputChangeHandler, inputClearValueHandler] = useInput(setTodo);
    const ulEle = useRef();

    // list가 비면 ul태그의 class명 제거.
    useEffect(() => {
        if (list.length === 0) {
            ulEle.current.classList.remove('todo-list');
        } else {
            ulEle.current.className = 'todo-list';
        }
    }, [list]);

    // todo값 저장
    const addTodo = () => {
        setList([...list, todo]);
        inputClearValueHandler();
    };

    const inputKeyDownHandler = e => {
        if (e.keyCode === 13) {
            addTodo();
        }
    };

    // todo값 제거
    const removeTodo = index => {
        setList(list.filter((cur, i) => i !== index));
    };

    return (
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
                            onChange={inputChangeHandler}
                            onKeyDown={inputKeyDownHandler}
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
    )
};

export default Todo;