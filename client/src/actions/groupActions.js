import axios from 'axios';
import {
    GET_GROUPS,
    GET_GROUP,
    DELETE_GROUP,
    ADD_GROUP,
    UPDATE_GROUP,
    GET_ERRORS
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
        .catch(err => dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        }))

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

//Update student score in group

export const updateScore = (id, updatedGroup) => dispatch => {
    return new Promise((resolve,reject) => {
        axios
            .put(`api/groups/${id}`,updatedGroup)
            .then (res => {
                dispatch({
                    type:UPDATE_GROUP,
                    payload: res.data
                })
                resolve(true);
            })
            .then(res => dispatch(getGroups))
            .catch(err => {
                dispatch({
                    type:GET_ERRORS,
                    payload:err.response.data
                })
                resolve(false)
            })
    })
}