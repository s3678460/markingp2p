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
export const addGroup = (groupData) => dispatch => {
    axios.post('/api/groups/newgroup', groupData)
        .then(res => dispatch({
            type: ADD_GROUP,
            payload: res.data
        }))
        .then(res => dispatch(getGroups()))

    // .catch(err)
}

//delete a group
export const deleteGroup = (id) => dispatch => {
    axios.delete(`/api/groups/${id}`)
        .then(res => dispatch({
            type: DELETE_GROUP,
            payload: id
        }))
        .then(res => dispatch(getGroups()))
}