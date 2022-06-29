//importar  modules
const bancodados = require('../config/dbConnect');
const Funcionario = require('../models/funcionarioModels');

class funcionarioControllers{
        //-----GET-----
        static async   listarDados(req, res){
            await bancodados.sync()
            let dado = await Funcionario.findAll({ raw: true,})
            res.status(200).json(dado)
        }

        static async  listarDado(req, res){
            let index = req.params.id
            await bancodados.sync()
            let dado = await Funcionario.findByPk(index)
            res.status(200).json(dado.dataValues)
        }

        //-----POST-----
        static async  inserirDado(req, res){
            // const resultadoCreate = await Funcionario.create({
            //     nome: req.body.nome,
            //     idade: req.body.idade,
            //     ni: req.body.ni,
            //     cargo: req.body.cargo
            // })
            const resultadoCreate = await Funcionario.create(req.body)
            res.status(200).send('Dado criado')
        }

        //-----PUT------
        static async  atualizarDados(req, res) {
        
            await Funcionario.update(
                    req.body,
                    {
                        where: {id: req.params.id}
                    }
                )

            res.status(200).send("Atualizado")
        }

        //-----DELETE-----
        static async  deletarDado(req, res) {
            await Funcionario.destroy({ where: { id: req.params.id }});
            res.status(200).send("Deletado")
        }
            
}

module.exports = funcionarioControllers
