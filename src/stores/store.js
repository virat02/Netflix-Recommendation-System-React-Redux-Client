import {createStore} from 'redux';
import RootReducer from '../reducers/RootReducer';

let store = createStore(RootReducer);

export default store;