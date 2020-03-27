import {combineReducers} from 'redux';
import groupReducer from './groupReducer'

export default combineReducers({
    groups: groupReducer
})
