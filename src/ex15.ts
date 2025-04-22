interface Aluno {
    nome: string;
    matricula: number;
    ativo: boolean;
}

const alunos: Aluno[] = [
    { nome: 'Hector', matricula: 1, ativo: true },
    { nome: 'Maria', matricula: 2, ativo: false },
    { nome: 'João', matricula: 3, ativo: true }
];

for (const aluno of alunos) {
    if (aluno.ativo) {
        console.log(aluno.nome);
    }
}