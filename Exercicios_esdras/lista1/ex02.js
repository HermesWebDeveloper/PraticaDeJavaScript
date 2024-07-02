// 2) Faça um algoritmo que leia as duas bases de um trapézio e a distância entre elas e calcule a sua área.

const utils = require("../utils")

async function main(){
    baseMaior = Number(await utils.input("Digite a base maior do trapézio: "))
    console.log(baseMaior)

    baseMenor = Number(await utils.input("Digite a base menor: "))
    console.log(baseMenor)

    dist = Number(await utils.input("Digite a distância entre as bases: "))
    console.log(dist)

    area = (((baseMaior + baseMenor) * dist)/2)

    console.log(`A área do trapézio é de: ${area};`)
}

main()