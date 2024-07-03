// 7) Leia um número inteiro positivo e calcule o seu fatorial.

const {input} = require("../utils")

async function main() {
    let num = Number(await input("Digite um número inteiro positivo: "))
    let fat = num;
    if (num % 1 == 0){
        for (i = 1; i < num; i++) {
            fat = fat * i;
        }
        console.log("O valor do fatorial de " + num + " é " + fat)
    } else {
        console.log("Número inválido!")
    }
}

main()