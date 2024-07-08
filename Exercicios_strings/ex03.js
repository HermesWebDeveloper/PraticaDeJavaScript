const {input} = require("./utils")


async function main() {
    nome = await input("Digite um nome: ")

    if (nome.toUpperCase().charAt(0) == "A") {
        console.log(nome)
    }
}

main()