import { useRef } from 'react';

// input 태그가 파라미터로 받아온 state변경함수를 통해 해당 state의 값을 변경하는 것을 수행한다.

const useInput = (setState) => {
    const inputEle = useRef();
    const handleChange = e => {
        setState(e.target.value);
    };
    const clearValue = () => {
        inputEle.current.value = '';
        setState('');
    }

    return [inputEle, handleChange, clearValue];
}

export default useInput;