//Importar biblioteca
const Sequelize = require('sequelize')

//Criar conexão com o banco
const bancodados = new Sequelize('exe1','root','',{
    dialect: 'mysql',
    host:'localhost',
    port: '3306'
});

//Testando conexão
// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

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

// GET 
bancodados.sync()
    .then(()=>{
        Funcionarios.findAll()
            .then((data)=>{
                console.log(data)
            })
    });


//Inserindo dados
// const jane = Funcionarios.create({
//     nome: 'Amanda',
//     idade:17,
//     ni:'80456982',
//     cargo:'CEO'
//  });
 

// UPDATE

async function up(){
    await bancodados.sync()
    const atualiza = await Funcionarios.findByPk(1);
    //console.log(produto);
    atualiza.nome = "juão";

    const resultadoSave = await atualiza.save();
    console.log(resultadoSave);
}
//up()


//DELETE
async function deletar(){
    const deleta = await Funcionarios.findByPk(1);
    deleta.destroy();
}
//deletar()

