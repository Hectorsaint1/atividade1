interface Aluno {
    nome: string;
    matricula: number;
    ativo: boolean;
}

const aluno1: Aluno = {
    nome: 'Hector',
    matricula: 12345,
    ativo: true
};

console.log(aluno1);
