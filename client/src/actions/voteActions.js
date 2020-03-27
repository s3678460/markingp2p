import axios from 'axios';
import {ADD_VOTE} from '../actions/types'

// Add vote

export const addVote = (voteData) => dispatch =>{
    axios.post('api/votes/newvote',voteData)
    .then(res => dispatch({
        type:ADD_VOTE,
        payload: res.data
    }))
}