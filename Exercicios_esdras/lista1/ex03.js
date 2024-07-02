// 3) Faça um algoritmo que leia os lados de um polígono, calcule e escreva o seu perímetro.

const {input} = require("../utils")

async function main(){
    let nLados = Number(await input("Digite o número de lados do polígono: "))
    let perimetro = 0
    
    for (let i=0; i<nLados; i++) {
        lado = Number(await input(`Digite o comprimento do lado ${i+1}: `))
        perimetro += lado
    }

    console.log(`O perímetro é: ${perimetro}`)
}

main()