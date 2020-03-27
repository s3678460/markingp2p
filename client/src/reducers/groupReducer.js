import {GET_GROUPS, DELETE_GROUP} from "../actions/types"

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
        case DELETE_GROUP:
            return {
                ...state,
                groups: state.groups.filter(group => group._id !== action.payload)
            }
        default:
            return state;
    }
}