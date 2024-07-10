// 10 - Dada uma matriz de cores ["vermelho", "azul", "verde", "amarelo"], remova a cor "verde", adicione "roxo" no final da lista e crie uma nova matriz contendo apenas as cores "azul" e "roxo".

cores = ["vermelho", "azul", "verde", "amarelo"]
console.log(cores)

cores.splice(cores.indexOf("verde"), 1)
cores.push("roxo")
console.log(cores)

novaMatriz = cores.filter(cor => cor === "azul" || cor === "roxo")
console.log(novaMatriz)