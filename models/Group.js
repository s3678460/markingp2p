const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Group Schema

const GroupSchema = new Schema({
    groupName: {
        type: String,
        require: true
    },
    students: [
        {
            studentNumber: {
                type: String,
                require: true
            },
            studentScore: {
                type: Number,
                require: true
            }
        }
    ]
});

module.exports = Group = mongoose.model('groups', GroupSchema);