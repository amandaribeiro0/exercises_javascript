const express = require('express')
const app = express()

const porta = 8080

// alunos["Silvana", "Maria", "Eduardo", "Durval"]
// console.log(alunos[2])
// --> Eduardo

const alunos = [
    {id: 0, "nome": "Amandica", "idade": "17"},
    {id: 1, "nome": "José", "idade": "17"},
    {id: 2, "nome": "Guigas", "idade": "18"},
]

var contador = 0

app.get('/alunos', function(req, res){
    res.status(200).json(alunos)
})

app.get('/alunos/:id', function(req, res){
    var index = req.params.id
    res.status(200).json(alunos[index])
})

app.post('/alunos', function(req,res){
    alunos.push({id: 3, 'nome': 'Hugo','idade':'50'})
    res.status(200).send('Item adicionado')
  })

app.delete('/alunos', function(req, res){
    var arr = alunos.splice(1,1)
    res.status(200).send('Item deletado')
})

app.listen(porta,() => {
    console.log('Servidor em operação ...')
})