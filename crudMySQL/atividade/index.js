const mysql = require('mysql2');
const express = require('express')
const app = express()
const port = 3000;
app.use(express.json()) 

const banco = 'exercicio'
const table = 'alunos'
const colunas = ['MATRICULA','CPF','NOME','IDADE']

// create the connection to database
const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database: banco
})

//-------------Funções
function select(){
    return `SELECT * FROM ${table}`
}

function input(dado){
    return `INSERT INTO ${table} (${colunas[0]},${colunas[1]},${colunas[2]},${colunas[3]}) 
    VALUES ("${dado[colunas[0]]}","${dado[colunas[1]]}","${dado[colunas[2]]}",${dado[colunas[3]]})`
}

function att(coluna, up, index) {
    return `UPDATE ${table} SET ${coluna}="${up}" WHERE id = ${index}`
}

function del(index) {
    return `DELETE FROM ${table} WHERE id = ${index}`
}

//----------Verbos
// **** GET *****
app.get('/', function(req, res){
    conection.query(select(), function(err, result){
        if (err) throw err
        res.status(200).json(result)
    })
})

//**** POST *****
app.post('/', function(req, res){
    conection.query(input(req.body), function(err, result){
        if (err) throw err
        res.status(200).send("Novo dado adicionado")
    })
})

//**** PUT ****
app.put('/:id', function (req, res) {
    let index = req.params.id
    let up = req.body
    for (var prop in up) {
        conection.query(att(prop,up[prop],index), function (err, result) {
            if (err) throw err
        })
    }
    res.status(200).send("Dado atualizado")
})

//**** DELETE *****
app.delete('/:id', function (req, res) {
    let index = req.params.id
    conection.query(del(index), function (err, result) {
        if (err) throw err
        res.status(200).send("Deletado")
    })
})

//-------Servidor 
app.listen(port,() => {
    console.log('Servidor em operação ...')
})