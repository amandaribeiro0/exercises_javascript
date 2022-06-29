//importar biblioteca
const Sequelize = require('sequelize');

//importa models
const bancodados = require('../config/dbConnect');

//Criar a tabela (modelo/model -> M(model)VC)
const Funcionario = bancodados.define('funcionario',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: Sequelize.STRING,
    idade: Sequelize.INTEGER,
    ni: Sequelize.STRING,
    cargo: Sequelize.STRING
})

module.exports = Funcionario