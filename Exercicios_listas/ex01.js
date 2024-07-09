// 1 - Crie uma lista de compras contendo os itens "maçã", "banana", "laranja" e "uva". Adicione "melancia" no final da lista. Em seguida, remova o primeiro item e adicione "morango" no início da lista.

let listaCompras = ["maçã", "banana", "laranja", "uva"]

listaCompras.push("melancia")

listaCompras.shift()

listaCompras.unshift("morango")

console.log(listaCompras)