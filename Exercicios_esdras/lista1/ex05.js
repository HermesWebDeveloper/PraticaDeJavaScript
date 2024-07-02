// 5) Faça um algoritmo que converta uma temperatura lida em graus Kelvin para graus Fahrenheit, usando a fórmula: K = ((5/9)*(F-32))+ 273.

const { input } = require("../utils")

async function main(){
    let tempKelvin = Number(await input("Digite a temperatura em Kelvin: "))

    let tempFah = (tempKelvin - 273,15) * 9/5 + 32

    console.log(`A temperatura em Fahrenheit é de: ${tempFah}`)
}

main()