// 6 - Dada uma matriz de números [3, 7, 2, 9, 4], encontre e imprima o terceiro elemento da matriz. Em seguida, remova o último elemento e adicione os números 6 e 8 no final da matriz.

matriz = [3, 7, 2, 9, 4]

console.log(matriz)
console.log("Terceiro elemento da matriz: " + matriz[2])

matriz.pop()
console.log(`Removido o último elemento da matriz: ${matriz}`)

matriz.splice(matriz.length, 0, [6, 8])
console.log("Matriz com adição de 6 e 8: " + matriz)