import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import navbarReducer from './navbarReducer';

let reducers = combineReducers({
    profilePageData: profileReducer,
    messagePageData: messageReducer,
    navbarData: navbarReducer,
});

let store = createStore(reducers);



export default store;