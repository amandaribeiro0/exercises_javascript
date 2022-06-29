//Importar as bibliotecas
const express = require('express')
const app = express()

//Importa modules
const bancodados = require('./config/dbConnect');
const Funcionario = require('./models/funcionarioModels');
const rotaFuncionario = require('./routes/funcionarioRoutes');

//Set infromação como json
app.use(express.json())

// conexão c a rota
app.use('/funcionario', rotaFuncionario)


//Variaveis
const port = 3000

//Servidor
app.listen(port,() => {
    console.log('Servidor em operação ...')
})
