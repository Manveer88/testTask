// store.js
import { createStore } from 'redux';
import tableReducer from './reducer';

const store = createStore(tableReducer);

export default store;
