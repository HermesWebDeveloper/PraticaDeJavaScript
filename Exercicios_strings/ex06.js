const { Console } = require("console")
const {input} = require("./utils")

async function main() {
    nome = await input("Digite o nome: ")
    sexo = (await input("Digite o sexo (M|F): ")).toUpperCase()
    idade = Number(await input("Digite a idade: "))

    if ( sexo == "F" & idade < 25) {
        console.log(nome)
        console.log("ACEITA")
    } else {
        console.log(nome)
        console.log("NÃO ACEITA ")
    }
}

main()