// 5 - Crie uma lista de nomes de colegas de trabalho ["Ana", "Bruno", "Carlos", "Diana"]. Adicione "Eduardo" no início e no final da lista. Em seguida, remova o terceiro nome e crie uma nova matriz contendo todos os nomes, exceto o primeiro e o último.

lista = ["Ana", "Bruno", "Carlos", "Diana"]
console.log(lista)

lista.push("Eduardo")
console.log(lista)

lista.unshift("Eduardo")
console.log(lista)

lista.splice(2, 1)
console.log(lista)

novaLista = lista
novaLista.shift()
novaLista.pop()
console.log(novaLista)