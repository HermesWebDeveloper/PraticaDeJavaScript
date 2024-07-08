const {input} = require("./utils")

async function main() {
    let nome = await input("Digite seu nome: ")
    let i = 0

    for (char in nome) {
        i ++;
    }

    console.log(`O tamanho da string é: ${i}`)
}

main()