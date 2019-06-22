import {combineReducers} from 'redux';

import LoginReducer from './LoginReducer';
import LocalStorageReducer from './LocalStorageReducer';
import AlertReducer from './AlertReducer';
import RegisterReducer from './RegisterReducer';
import MoviesReducer from './movieReducer';
import ModalReducer from './ModalReducer';
import UserReducer from './UserReducer';
import ActorReducer from './ActorReducer';
import ActivatePillReducer from "./ActivatePillReducer";
import ButtonReducer from "./ButtonReducer";

const RootReducer = combineReducers({
    LoginReducer,
    LocalStorageReducer,
    AlertReducer,
    RegisterReducer,
    MoviesReducer,
    ModalReducer,
    UserReducer,
    ActorReducer,
    ActivatePillReducer,
    ButtonReducer
});

export default RootReducer;