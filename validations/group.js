const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateGroupInput(data) {
    let errors = {};
    data.groupName = !isEmpty(data.groupName) ? data.groupName : '';


    if (Validator.isEmpty(data.groupName)) {
        errors.groupName = 'Group name must not be empty';
    }
    if (data.students.length == 1) {
        data.students.forEach(student => {
            if (Validator.isEmpty(student.studentName)) {
                errors.studentName = 'Student number must not be empty';
            }

            if (!Validator.isNumeric(student.studentNumber)) {
                errors.studentNumber = 'Student number is invalid';
            }

            if (!Validator.isLength(student.studentNumber, { max: 7 })) {
                errors.studentNumber = 'Student number must be under 7 characters'
            }

        });

    } else {
        for (let index = 0; index < data.students.length; index++) {
            if (index == 0) {
                if (Validator.isEmpty(data.students[index].studentName)) {
                    errors.studentName = 'Student number must not be empty';
                }

                if (!Validator.isNumeric(data.students[index].studentNumber)) {
                    errors.studentNumber = 'Student number is invalid';
                }

                if (!Validator.isLength(data.students[index].studentNumber, { max: 7 })) {
                    errors.studentNumber = 'Student number must be under 7 characters'
                }
            }

            else {
                if (Validator.isEmpty(data.students[index].studentName)) {
                    errors.studentName2 = 'Student number must not be empty';
                }

                if (!Validator.isNumeric(data.students[index].studentNumber)) {
                    errors.studentNumber2 = 'Student number is invalid';
                }

                if (!Validator.isLength(data.students[index].studentNumber, { max: 7 })) {
                    errors.studentNumber2 = 'Student number must be under 7 characters'
                }
            }



        }
    }




    return {
        errors,
        isValid: isEmpty(errors)
    }

}