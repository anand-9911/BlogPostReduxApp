import { combineReducers } from 'redux';
import GetPostReducer from './GetPostReducer';
import userReducer from './userReducer';

export default combineReducers({
    posts: GetPostReducer,
    users: userReducer
});