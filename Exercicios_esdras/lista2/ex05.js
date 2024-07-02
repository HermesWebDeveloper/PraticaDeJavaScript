// 5) Faça um programa para verificar se um número inteiro é divisível por outro.

const {input} = require("../utils")

async function main(){
    dividendo = Number(await input("Digite o dividendo: "))
    divisor = Number(await input("Digite o divisor: "))

    if (dividendo % divisor == 0) {
        console.log(`O ${dividendo} é SIM divisível pro ${divisor}`);
    } else {
        console.log(`O ${dividendo} NÃO é divisível por ${divisor}`);
    };
}

main()