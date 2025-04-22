"use strict";
function descreverPessoa(name, age, profession) {
    console.log('o nome da pessoa é:', name);
    console.log('a idade da pessoa é:', age);
    console.log('a proffisão da pessoa é:', profession);
}
const pessoaum = {
    nome: 'hector',
    idade: 22,
    profissao: 'programador'
};
descreverPessoa(pessoaum.nome, pessoaum.idade, pessoaum.profissao);
