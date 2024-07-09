// 3 - Crie uma matriz de notas de alunos [7.5, 8.0, 9.2, 6.5, 5.8]. Remova a primeira nota, adicione a nota 7.0 no início da lista, e crie uma nova matriz contendo apenas as notas entre a segunda e a quarta posição da matriz original.

notas = [7.5, 8.0, 9.2, 6.5, 5.8]

notas.shift()

notas.unshift(7.0)

console.log(notas)

notasSelecionadas = notas.slice(1, 4)

console.log(notasSelecionadas)