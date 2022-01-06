const express = require('express');

const app = express();
const todoRouter = require('./routers/todo.router');

const Database = require('better-sqlite3');

const db = new Database('sqlite.db', { verbose: console.log });
console.log(db);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/todos', todoRouter);

app.listen(5000, () => {
    console.log( 'listening on port 5000...');
});

module.exports = db;

