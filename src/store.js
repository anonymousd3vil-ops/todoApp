import {createStore, combineReducers} from 'redux';

import todoReducer from './reducers/todoReducer.js';

const reducers = combineReducers({todo: todoReducer});

const store = createStore(reducers);

export default store;