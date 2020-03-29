import axios from 'axios';
import { ADD_VOTE, GET_ERRORS, UPDATE_GROUP, GET_VOTES } from '../actions/types'

// Add vote

export const addVote = (voteData) => dispatch => {
    axios.post('api/votes/newvote', voteData)
        .then(res => {
            dispatch({
                type: ADD_VOTE,
                payload: res.data,

            })

            alert('Submit Successfull')
            window.location.reload(false)

        }
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))


}

//get all votes
export const getVotes = () => dispatch => {
    axios.get('api/votes/all')
        .then(res => dispatch({
            type: GET_VOTES,
            payload: res.data
        }))
}