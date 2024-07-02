// 6) Leia um número inteiro e verifique se ele é primo.

const {input} = require("../utils")

async function main(){
    let num = Number(await input("Digite um número inteiro: "));
    let nDivisores = 0;

    for (let i = num; i > 0; i--) {
        if (num % i == 0){
            nDivisores += 1;
        };
    };

    if (nDivisores == 2){
        console.log("É um número primo!")
    } else {
        console.log("Não é um número primo...")
    }
}

main()