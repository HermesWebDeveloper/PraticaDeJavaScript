// 4 - Dada uma matriz de preços de produtos [15.99, 29.99, 10.50, 23.75], adicione o preço 19.99 no final da matriz e remova o segundo preço. Em seguida, crie uma nova matriz combinando a matriz resultante com [9.99, 12.49].

precoProdutos = [15.99, 29.99, 10.50, 23.75]

precoProdutos.splice(1, 1, 19.99)

console.log(precoProdutos)

matrizResultante = precoProdutos.concat([9.99, 12.49])

console.log(matrizResultante)