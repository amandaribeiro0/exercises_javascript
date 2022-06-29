const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.json()) 

const porta = 8080;
const path = 'db/dados.json'

function coletaDados(){
   return JSON.parse(fs.readFileSync(path, 'UTF-8'))
}

function salvaDados(dado){
    fs.writeFileSync(path, JSON.stringify(dado))
}


app.get('/', function (req, res) {
    let contas = coletaDados()
    res.status(200).json(contas)
})

app.get('/:id', function (req, res) {
    let index = req.params.id
    console.log(index)
    let contas = coletaDados()
    res.status(200).json(contas[index])
})

app.delete('/:id', function(req,res){
    let index = req.params.id
    let contas = coletaDados()
    delete contas[index]
    
    salvaDados()

    console.log(contas)
    res.status(200).send ('Item deletado')
})

app.post('', function (req, res) {
    let novoDado = req.body
    let contas = coletaDados()

    let index = Object.keys(contas).length

    contas[index] = novoDado

    salvaDados(contas)

    
    res.status(200).send('Dado inserido')
})

app.put('/:id', function(req, res){
    let index = req.params.id 
    let contas = coletaDados()

    req.body.username === undefined ? '' : contas[index].username = req.body.username
    req.body.email    === undefined ? '' : contas[index].email = req.body.email
    req.body.password === undefined ? '' : contas[index].password = req.body.password

    salvaDados(contas)
    
    res.status(200).send('Dado Atualizado')
})


app.listen(porta, () =>{
    console.log("Servidor em operação ...")
})