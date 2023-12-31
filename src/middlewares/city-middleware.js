const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');

function validateCreateRequest(req, res, next) {
    console.log("inside city middleware")
    if(!req.body.name) {
        ErrorResponse.message = 'Something went wrong while creating city';
        ErrorResponse.error = new AppError(['City name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}