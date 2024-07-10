// Crie uma lista de cidades que você deseja visitar ["Paris", "Nova York", "Tóquio", "Sidney"]. Remova a última cidade, adicione "Londres" e "Berlim" no final da lista e crie uma nova matriz contendo apenas as duas últimas cidades.


cidades = ["Paris", "Nova York", "Tóquio", "Sidney"]
console.log(cidades)

cidades.pop()

cidades.push("Londres", "Berlim")
console.log(cidades)

novaLista = cidades.slice(cidades.length-2)
console.log(novaLista)