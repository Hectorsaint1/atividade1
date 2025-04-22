let notas: number[] =  [7.5, 8.0, 9.0, 6.0 ]

let soma= 0
for (let index = 0; index < notas.length; index++) {
    soma += notas[index]; 
}

const media: number = soma/notas.length

console.log('a media dos alunos é:', media)