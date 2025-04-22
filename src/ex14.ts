function descreverPessoa(name: string, age: number, profession: string){
    console.log('o nome da pessoa é:', name)
    console.log('a idade da pessoa é:', age)
    console.log('a proffisão da pessoa é:', profession)
}




interface Pessoa{
    nome : string;
    idade: number;
    profissao: string;
}

const pessoaum: Pessoa ={
    nome: 'hector',
    idade: 22,
    profissao: 'programador'

};

descreverPessoa(pessoaum.nome, pessoaum.idade, pessoaum.profissao)