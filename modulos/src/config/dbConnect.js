//importar biblioteca
const Sequelize = require('sequelize');

//Conectar banco
const bancodados = new Sequelize('exe1', 'root', '', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

module.exports = bancodados