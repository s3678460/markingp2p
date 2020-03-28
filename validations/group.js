const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateGroupInput(data) {
    let errors = {};

    data.groupName = !isEmpty(data.groupName) ? data.groupName : '';


    if (Validator.isEmpty(data.groupName)){
        errors.groupName = 'Group name must not be empty';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}