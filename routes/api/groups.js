const express = require('express');
const router = express.Router();


// Load Model

const Group = require('../../models/Group');


//Test
router.get('/', (req, res)=>{
    res.send("Group api works !!!!")
})

//Get All Group
router.get('/all', (req, res) => {
    Group.find()
        .then(group => res.json(group))
        .catch(err => res.status(500).json({ msg: "Get all group fail!!!" }))
})


//Post new Group

router.post('/newgroup', (req, res) => {
    const newGroup = new Group({
        groupName: req.body.groupName,
        students: req.body.students
    });
    newGroup.save()
        .then(newgroup => res.json(newgroup))
        .catch(err => console.log(err));
})

module.exports = router;