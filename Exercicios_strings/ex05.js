const {input} = require("./utils")

async function main() {
    nome = await input("Digite um nome: ")

    qtd = nome.trim().replaceAll(" ", "").length

    console.log("A quantidade de letras no seu nome é: " + qtd)
}

main()