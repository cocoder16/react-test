import React, {useState, useEffect, useRef} from 'react';
import {Todo} from '../components';
import useInput from '../hooks/useInput';
import '../styles/Todo.css';

const TodoContainer = () => {
    // todo는 개별 값, list는 todo의 집합인 배열
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);
    const [inputEle, handleInputChange, clearInputValue] = useInput(setTodo);
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
        clearInputValue();
    };

    const handleInputKeyDown = e => {
        if (e.keyCode === 13) {
            addTodo();
        }
    };

    // todo값 제거
    const removeTodo = index => {
        setList(list.filter((cur, i) => i !== index));
    };

    return (
        <Todo
            ulEle={ulEle}
            inputEle={inputEle}
            todo={todo}
            list={list}
            addTodo={addTodo}
            removeTodo={removeTodo} 
            handleInputChange={handleInputChange} 
            handleInputKeyDown={handleInputKeyDown}
        />
    )
};

export default TodoContainer;