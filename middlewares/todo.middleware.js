const ErrorHandler = require ( '../errors/ErrorHandler');

const { statusMessage, statusCodes } = require('../configs');
module.exports = {
    isTodoIdValid: (req, res, next) => {
        try {
            //const { id } = req.params;


            // if(!isValid) {
            //     throw new ErrorHandler(statusMessage.isNotValidId, statusCodes.isNotValid)
            // }

            next();
        } catch (e) {
            next(e);
        }
    },
}