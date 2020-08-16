import {useReducer, useEffect} from 'react';

// 비동기 데이터 요청을 할 때 사용할 hook.
// 요청 상태를 action type값으로 하여 reducer를 통해 관리
// export하는 useAsync의 첫번째 파라미터는 ajax 데이터 요청 함수
// 두번째 파라미터는 초기에 실행할 ajax 요청함수에 넘겨줄 파라미터 값을 배열로 받음.
// 세번째 파라미터는 dependencies
// useAsync가 반환하는 배열의 첫번째 인덱스는 state,
// 두번째 인덱스는 useAsync의 첫번째 파라미터 함수를 이용해 
// 데이터 요청을 실행하는 함수.

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const useAsync = (callback, initialParamArr, deps = []) => { //deps= dependencies
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false
    });

    const fetchData = async (paramsArr) => {
        dispatch({type: 'LOADING'});
        try {
            const data = await callback(...paramsArr);
            dispatch({type: 'SUCCESS', data});
        } catch (e) {
            dispatch({type: 'ERROR', error: e});
        }
    };

    useEffect(() => {
        fetchData(initialParamArr);
    }, deps);

    return [state, fetchData];
}

export default useAsync;