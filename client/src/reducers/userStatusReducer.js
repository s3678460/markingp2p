import { SET_USER_STATUS } from "../actions/types";

const initialState = window.localStorage.getItem('adminData') 
? {isUserStatus: true}
: {isUserStatus: false}


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_STATUS:
            return {
                ...state,
                isUserStatus: action.payload
            }
        default:
            return state;
    }
}