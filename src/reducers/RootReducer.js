import {combineReducers} from 'redux';

import LoginReducer from './LoginReducer';
import LocalStorageReducer from './LocalStorageReducer';
import AlertReducer from './AlertReducer';
import RegisterReducer from './RegisterReducer';
import MoviesReducer from './movieReducer';

const RootReducer = combineReducers({
    LoginReducer,
    LocalStorageReducer,
    AlertReducer,
    RegisterReducer,
    MoviesReducer
});

export default RootReducer;