// Importar todo o módulo utils.js
const utils = require('./utils');

// Função assíncrona para usar as funções importadas
async function main() {
    const userInput = await utils.input('Por favor, insira algo: ');
    console.log(`Você digitou: ${userInput}`);
}

// Executar a função principal
main();