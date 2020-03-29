import {  SET_USER_STATUS} from "./types";

//set user status

export const removeUserStatus = (userStatus) => dispatch =>{
    window.localStorage.removeItem('adminData')
    dispatch({
        type: SET_USER_STATUS,
        payload: userStatus
    })
}
export const setUserStatus = (userStatus) => dispatch =>{
    dispatch({
        type: SET_USER_STATUS,
        payload: userStatus
    })
}