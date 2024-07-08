const {input} = require("./utils")

async function main() {
    let string = await input("Digite uma string: ")
    let vogais = ['a', 'e', 'i', 'o', 'u']

    for (let char in string) {
        for (let vogal in vogais) {
            if (string[char] == vogais[vogal]) {
                delete string[char]
            }
        }
    }

    console.log(string)
}

main()