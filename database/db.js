const Database = require('better-sqlite3');

const db = new Database('sqlite.db', { verbose: console.log });

db.exec('CREATE TABLE IF NOT EXISTS todos' +
    '(id integer primary key autoincrement,' +
    ' title varchar(255))');

module.exports = db;