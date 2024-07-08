const {input} = require("./utils")

async function main() {
    string = await input("Digite algo com números: ")
    console.log(string.replaceAll("0", "1"))
}

main()