// This root reducer brings together all the reducers
import { combineReducers } from 'redux';
import workerReducer from './workerReducer';

export default combineReducers({
    worker: workerReducer
});
