const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database:'teste',
});

const colunaFilmes = [
    'titulo VARCHAR(50) NOT NULL',
    'genero VARCHAR(30) NOT NULL',
    'diretor VARCHAR(60) NOT NULL',
    'ano_lancamento INT NOT NULL',
    'PRIMARY KEY(titulo)'
]
const sql = `CREATE TABLE filmes(${colunaFilmes});`


// simple query
connection.query(sql, function(err) {
    if(err) throw err
    console.log('Tabela criada!'); // fields contains extra meta data about results, if available
  }
);