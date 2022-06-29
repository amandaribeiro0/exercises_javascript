const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
});

const sql = 'DROP DATABASE teste'
// simple query
connection.query(sql, function(err) {
    if(err) throw err
    console.log('Conectado!'); // fields contains extra meta data about results, if available
  }
);
