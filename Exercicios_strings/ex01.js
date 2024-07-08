const {input} = require("./utils");

async function main() {
    nome = await input("Digite seu nome: ")
    console.log("Seja bem vindo " + nome + "!")
}

main()