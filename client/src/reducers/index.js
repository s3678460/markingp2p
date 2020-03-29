import {combineReducers} from 'redux';
import groupReducer from './groupReducer'
import errorReducer from './errorReducer'
import userStatusReducer from "./userStatusReducer";
export default combineReducers({
    groups: groupReducer,
    errors: errorReducer,
    userStatus: userStatusReducer
})
