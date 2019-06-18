import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import LocalStorageReducer from './LocalStorageReducer';

const RootReducer = combineReducers({
    LoginReducer,
    LocalStorageReducer
});

export default RootReducer;