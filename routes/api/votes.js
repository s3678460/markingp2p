const express = require('express');
const router = express.Router();

//Load model
const Vote = require('../../models/Vote');

// Load Validation
const validateVoteInput = require('../../validations/vote')

//Test
router.get('/test', (req, res) => {
    res.send("Alright!!!")
})

//Get all votes
router.get('/all', (req, res) => {
    Vote.find()
        .then(votes => res.json(votes))
        .catch(err => res.status(404).json({ msg: "Get all votes fail!!!!" }))
})

//Post new Vote
router.post('/newvote', (req, res) => {

    const {errors, isValid} = validateVoteInput(req.body)
    if(!isValid){
        return res.status(400).json(errors);
    }

    const scoreInt = parseInt(req.body.score);

    Vote.findOne({voterNumber: req.body.voterNumber, studentNumber:req.body.studentNumber}).then(voted => {
        if (voted){
            errors.voterNumber = "You have already voted for this student"
            return res.status(400).json(errors)
        }
        else{
            const newVote = new Vote({
                studentNumber: req.body.studentNumber,
                voterNumber: req.body.voterNumber,
                score: scoreInt,
                comment: req.body.comment
            })
            newVote.save()
                .then(newVote => res.json(newVote))
                .catch(err => console.log(err))
        }
    })

    
})
//Delete a vote
router.delete('/:_id', (req, res) => {
    Vote.findByIdAndRemove(req.params._id)
        .then(removedVote => res.send(removedVote))
        .catch(err => res.status(404).json({ msg: false }))
})

//Update a vote
router.put('/:_id', (req, res) => {
    var update = req.body
    Vote.findByIdAndUpdate(req.params._id, update)
        .then(() => res.json({ update: true }))
        .catch(err => res.status(404).json({ update: false }));
})
module.exports = router;