const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

const initialState = {
    count: 0,
    title: 'waiting..'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE :
            return {count: state.count + 1, title: 'increment'};
        case DECREASE :
            return {count: state.count - 1, title: 'decrement'};
        default :
            return state;
    }
};

export default reducer;