import axios from 'axios';
import {
    GET_GROUPS,
    GET_GROUP,
    DELETE_GROUP,
    ADD_GROUP,
    UPDATE_GROUP
} from './types';

//add all group
export const getGroups = () => async dispatch => {
    const res = await axios.get('/api/groups/all')
    dispatch({
        type: GET_GROUPS,
        payload: res.data
    })
    
}

//add a group
export const addGroup = (groupData)=> dispatch =>{
    axios.post('/api/groups/newgroup', groupData)
    .then(res => dispatch({
        type: ADD_GROUP,
        payload: res.data
    }))
    
    // .catch(err)
}

//update a group
export const updateGroup = (id, editedGroup) => dispatch =>{
}