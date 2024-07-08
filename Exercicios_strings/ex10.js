const {input} = require("./utils")

async function main() {
    let palavra = await input("Digite uma palavra: ")
    let lista = palavra.split("")
    console.log(lista)
    let listaInvertida = []

    for (let char in lista) {
        listaInvertida.splice(0, 0, lista[char])
    }

    let palavraInvertida = listaInvertida.join("")

    console.log("A palavra invertida: " + palavraInvertida)
}

main()