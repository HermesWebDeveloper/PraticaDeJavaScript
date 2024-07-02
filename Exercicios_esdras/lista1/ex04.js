// 4) Faça um algoritmo que leia os valores de cada cateto de um triângulo retângulo, calcule e escreva sua hipotenusa.

const { input } = require("../utils");

async function main(){
    let cat1 = Number(await input("Digite o cateto 1: "))
    let cat2 = Number(await input("Digite o cateto 2: "))

    let hipotenusa = Math.sqrt((cat1 ** 2) + (cat2 ** 2)).toFixed(2)

    console.log(`A hipotenusa é de: ${hipotenusa}`)
}

main()