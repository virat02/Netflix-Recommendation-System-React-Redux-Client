import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from '../reducers/RootReducer';

let store = createStore(RootReducer, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
    )
);

export default store;