const teste = {
    nome:'amanda',
    idade:17,
    cidade:'são paulo'
};

// deletar prop:
//delete teste.idade;

console.log(teste.idade)

//add propriedade:
teste.estado = 'SP';

console.log(teste);

//copiar propriedades de outto obj
const copiar = {
    sexo:'F'
};
Object.assign(teste, copiar);

console.log(teste);

console.log(typeof(teste))