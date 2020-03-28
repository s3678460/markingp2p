import {combineReducers} from 'redux';
import groupReducer from './groupReducer'
import errorReducer from './errorReducer'
export default combineReducers({
    groups: groupReducer,
    errors: errorReducer
})
