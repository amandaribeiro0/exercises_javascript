//importar biblioteca
const Sequelize = require('sequelize');

const express = require('express');
const router = express.Router();
//importar modules
const funcionario = require ('../controllers/funcionarioControllers')

// middleware that is specific to this router

// Verbos
router
    .get('/', funcionario.listarDados)
    .get('/:id', funcionario.listarDado)
    .post('/', funcionario.inserirDado)
    .put('/:id', funcionario.atualizarDados)
    .delete('/:id', funcionario.deletarDado);

module.exports = router;