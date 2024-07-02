const utils = require('../utils');

async function main(){
    let raio = await utils.input("Digite o raio da circunferência:")
    let comprimento = (Math.PI * 2 * raio).toFixed(2)
    console.log(`O comprimento é de: ${comprimento}`)
}

main()