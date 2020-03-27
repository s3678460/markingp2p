import {GET_GROUPS} from "../actions/types"

const initialState = {
    groups:[],
    defaultGroupName:""
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_GROUPS:
            return {
                ...state,
                groups: action.payload,
                defaultGroupName:action.payload[0].groupName
            }
        default:
            return state;
    }
}