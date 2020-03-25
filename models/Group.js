const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Sub Schema
const subSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    studentNumber: {
        type: String,
        required: true
    },
    studentScore: {
        type: Number,
        default: 0
    }
}, { _id: false });
//Create Group Schema
const GroupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    students: [subSchema]
});

module.exports = Group = mongoose.model('groups', GroupSchema);