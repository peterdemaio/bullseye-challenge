let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlDB1!',
    database: 'bullseye-challenge'
})

connection.connect(function (err) {
    if (err) {
        return console.error('Error: ', err.message)
    }
    console.log('Connected to MySQL server.');
});

module.exports = connection


