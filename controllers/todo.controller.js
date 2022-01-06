
const { statusMessage, statusCodes } = require('../configs');
const db = require('../app')

module.exports = {
    getAllTodos: (req, res, next) => {
        try {

        } catch (e) {
            next(e);
        }
    },
    createTodo: (req, res, next) => {
        try {

            //const stmt = db.prepare('INSERT INTO todos VALUES (?)');
            //console.log(stmt);
            console.log(db);

           const stmt = db.prepare('INSERT INTO todos VALUES ($title)');

            stmt.run(req.body.title);

            res.status(statusCodes.created).json(statusMessage.created);
        } catch (e) {
            next(e);
        }
    },
    updateTodo: (req, res, next) => {
        try {


            res.status(statusCodes.updated).json(statusMessage.updated);
        } catch (e) {
            next(e);
        }
    },
    deleteTodo: (req, res, next) => {
        try {
            const { id } = req.params;

            res.status(statusCodes.deleted).json(statusMessage.deleted);
        } catch (e) {
            next(e);
        }
    },
    getTodo: (req, res, next) => {
        try {
            const { id } = req.params;

            res.json(todo);
        } catch (e) {
            next(e);
        }
    }
};