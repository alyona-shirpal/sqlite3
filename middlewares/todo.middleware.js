const  db = require("../database/db");
const ErrorHandler = require ( '../errors/ErrorHandler');
const { statusMessage, statusCodes } = require('../configs');

module.exports = {
    isTodoIdValid: (req, res, next) => {
        try {
            const { id } = req.params;

            const isValid = db.prepare('SELECT id FROM todos WHERE id = ? ').get(id);

            if(!isValid) {
                throw new ErrorHandler(statusMessage.isNotValidId, statusCodes.isNotValid);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
