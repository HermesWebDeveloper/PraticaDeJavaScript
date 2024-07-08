const {input} = require("./utils")

async function main() {
    string1 = await input("Digite a string 1: ")
    string2 = await input("Digite a string 2: ")

    if (string1 == string2) {
        console.log("As strings são iguais!")
    } else {
        console.log("As strings não são iguais...")
    }
}

main()