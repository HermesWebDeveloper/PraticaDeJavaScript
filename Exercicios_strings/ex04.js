const {input} = require("./utils")

async function main() {
    nome = await input("Digite seu nome: ")

    console.log(`As quatro primeiras letras do seu nome são: ${nome.substring(0, 4)}`)
}

main()