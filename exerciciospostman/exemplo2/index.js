const express = require('express')
const app = express()

const porta = 8080

const alunos = [
  {id: 1,
  'nome': 'Amanda',
  'idade': '17'},

  {id: 2,
    'nome': 'Paula',
    'idade': '20'}
]

var contador = 0

app.get('/', function (req, res) {
  res.status(200)
  res.send(`contador: ${contador}`)
})

app.post('/', function(req,res){
  contador =+1
  res.status(200)
  res.send('contador modificado')
})

app.listen(porta, ()=>{
  console.log('Funcionou!')
})