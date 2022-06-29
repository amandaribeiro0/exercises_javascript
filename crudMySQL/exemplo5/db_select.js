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

const sql = `SELECT * FROM filmes;`


// select de todos os dados
connection.query(sql, function(err, result) {
    if(err) throw err
    console.log(result); // fields contains extra meta data about results, if available
  }
);


//select de um dado especifico
// connection.query(sql, function(err, result) {
//     if(err) throw err
//     console.log(result[0].titulo); // fields contains extra meta data about results, if available
//   }
// );
