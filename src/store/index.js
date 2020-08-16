import {createStore} from 'redux';
import counter from './counter';

const store = createStore(counter);

store.subscribe(() => {
    console.log("Store Updated", store.getState());
});

export default store;