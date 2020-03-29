const express = require('express');
const router = express.Router();


// Load Model

const Group = require('../../models/Group');

const validateGroupInput = require('../../validations/group')

//Test
router.get('/', (req, res)=>{
    res.send("Group api works !!!!")
})

//Get All Group
router.get('/all', (req, res) => {
    Group.find()
    .then(group => res.json(group))
    .catch(err => res.status(500).json({ msg: "Get all group fail!!!" }))
    // Group.find({students:{'$elemMatch':{studentName: "Khanh"}}}, function(err,student) {
    //     if(err){
    //         return res.status(400).json(err)
    //     }
    //     else{
    //         return res.json(student)
    //     }
    // })
        
        // .catch(err => res.status(500).json({ msg: "Get all group fail!!!" }))
})


//Post new Group
router.post('/newgroup', (req, res) => {

    const {isValid, errors} = validateGroupInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const newGroup = new Group({
        groupName: req.body.groupName,
        students: req.body.students
    });
    newGroup.save()
        .then(newgroup => res.json(newgroup))
        .catch(err => console.log(err));
})

//Delete a group
router.delete('/:_id', (req, res)=>{
    Group.findByIdAndRemove(req.params._id)
    .then(removedGroup =>res.send(removedGroup))
    .catch(err => res.status(404).json({msg: false}))
})

//Update a group
router.put('/update', (req, res)=>{
    // var update = req.body
    const newScore = req.body.studentScore
    const groupName = req.body.groupName
    const studentNumber = req.body.studentNumber
   
    Group.findOneAndUpdate(
        {groupName: groupName},
        {studentScore: newScore},
        {fields:
            {
                students:
                {
                    $elemMatch:{
                        studentNumber: studentNumber,
                        
                    }
                }
        }}
    )
    // Group.findByIdAndUpdate(req.params._id,update)
    .then((group) => res.json(group))
    .catch(err => res.status(404).json({ update: false }));
})

module.exports = router;