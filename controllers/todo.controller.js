const db = require('../database/db');
const { statusMessage, statusCodes } = require('../configs');

module.exports = {
    getAllTodos: (req, res, next) => {
        try {
           const todos = db.prepare('SELECT * FROM todos').all(req.body);

           res.json(todos)
        } catch (e) {
            next(e);
        }
    },

    createTodo: (req, res, next) => {
        try {
            const { title } = req.body;

            db.prepare("INSERT INTO todos (title) VALUES (?)").run(title);

            res.status(statusCodes.created).json(statusMessage.created);
        } catch (e) {
            next(e);
        }
    },
    updateTodo: (req, res, next) => {
        try {
            const { id } = req.params;
            const { title } = req.body;

            db.prepare('UPDATE todos SET title = ? WHERE id = ?').run(title, id);

            res.status(statusCodes.updated).json(statusMessage.updated);
        } catch (e) {
            next(e);
        }
    },
    deleteTodo: (req, res, next) => {
        try {
            const { id } = req.params;

            db.prepare('DELETE FROM todos WHERE id = ?').run(id);

            res.status(statusCodes.deleted).json(statusMessage.deleted);
        } catch (e) {
            next(e);
        }
    },
    getTodo: (req, res, next) => {
        try {
            const { id } = req.params;

            const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(id);

            res.json(todo);
        } catch (e) {
            next(e);
        }
    }
};