import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePageData: profileReducer,
    messagePageData: messageReducer,
    navbarData: navbarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);



export default store;