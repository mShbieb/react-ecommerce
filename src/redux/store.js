import { createStore, applyMiddleware } from 'redux';
import loggor from 'redux-logger';
import rootReducer from './root-reducer';

const  middlewares = [loggor];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
