const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateVoteInput(data) {
    let errors = {};

    data.voterNumber = !isEmpty(data.voterNumber) ? data.voterNumber : '';

    if (!Validator.isNumeric(data.voterNumber)){
        errors.voterNumber = 'Voter number is invalid';
    }

    if (Validator.isEmpty(data.voterNumber)){
        errors.voterNumber = 'Voter number must not be empty';
    }

    if (!Validator.isLength(data.voterNumber,{max:7})){
        errors.voterNumber = 'voter number must be under 7 characters'
    }

    if (Validator.isEmpty(data.studentNumber)){
        errors.studentNumber = 'You must choose one student';
    }

    if (Validator.isEmpty(data.score)){
        errors.score = 'Score must be given';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}