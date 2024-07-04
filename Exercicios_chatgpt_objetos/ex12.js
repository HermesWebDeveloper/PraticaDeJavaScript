// Escreva uma função que receba um array de objetos aluno com propriedades nome e nota, e retorne a média das notas.

alunos = [
    {nome : "Aluno 1", nota: 10},
    {nome : "Aluno 2", nota: 5},
    {nome : "Aluno 3", nota: 7},
    {nome : "Aluno 4", nota: 8},
    {nome : "Aluno 5", nota: 9},
    {nome : "Aluno 6", nota: 5.6},
    {nome : "Aluno 7", nota: 7},
    {nome : "Aluno 8", nota: 7},
    {nome : "Aluno 9", nota: 5.56},
    {nome : "Aluno 10", nota: 8},
    {nome : "Aluno 11", nota: 4},
    {nome : "Aluno 12", nota: 2},
]

function calcularMediaAlunos (alunos) {
    let soma=0, media, qtd=0;
    
    for (i = 0; i < alunos.length; i++) {
        soma += alunos[i].nota;
        qtd += 1;
    };

    media = soma/qtd;
    console.log("A média de notas dos alunos é: " + media.toFixed(2));
}

calcularMediaAlunos(alunos);