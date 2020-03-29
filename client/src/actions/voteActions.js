import axios from 'axios';
import {ADD_VOTE, GET_ERRORS,UPDATE_GROUP} from '../actions/types'

// Add vote

export const addVote = (voteData) => dispatch =>{
    axios.post('api/votes/newvote',voteData)
    .then(res => {
    dispatch({
        type:ADD_VOTE,
        payload: res.data,
        
    })

    alert('Submit Successfull')
    window.location.reload(false)

    }       
    )
    .catch(err =>
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        }))
   
   
}