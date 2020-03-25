const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Vote Schema
const VoteSchema = new Schema({
    studentNumber: {
        type: String,
        required: true
    },
    voterNumber: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        default: "N/A"
    }
})

module.exports = Vote = mongoose.model('votes', VoteSchema);