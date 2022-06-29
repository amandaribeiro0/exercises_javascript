//Importar biblioteca
const Sequelize = require('sequelize')
const express = require('express')
const app = express()
const port = 3000;
app.use(express.json()) 

//Criar conexão com o banco
const bancodados = new Sequelize('exe1','root','',{
    dialect: 'mysql',
    host:'localhost',
    port: '3306'
});

// Criar tabela/model
const Funcionarios = bancodados.define('funcionario',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true,
    },
    nome:Sequelize.STRING,
    idade:Sequelize.INTEGER,
    ni:Sequelize.STRING,
    cargo:Sequelize.STRING
})

// ******** GET ******** 
app.get('', async function(req, res){
    const resultado = await Funcionarios.findAll().then((response)=>res.send(response));
})

// ******** POST ********
    async function addDado(dado){
    await bancodados.sync()
     const dado = await Funcionarios.create({ 
    nome = dado.nome,
    idade = dado.idade,
    ni = dado.ni,
    cargo = dado.cargo
    })
     console.log(dado)
     Funcionarios.syn({force:false})
 }

app.post('/', function(req, res){
    (addDado(req.body), function(err, result){
        if (err) throw err
        res.status(200).send("Novo dado adicionado")
    })
})


app.listen(port,() => {
    console.log('Servidor em operação .')
})