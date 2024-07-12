let inputNomeEvento = document.getElementById("inputNomeEvento");
let inputValorIngresso = document.getElementById("inputValorIngresso");
let btnEnviarEx01 = document.getElementById("btnEnviarEx01");

let outNomeEvento = document.getElementById("outNomeEvento");
let outValorIngresso = document.getElementById("outValorIngresso");

const ingresso = new Ingresso(inputNomeEvento.value, inputValorIngresso.value);

function atualizarEx01() {
    ingresso.nomeEvento = inputNomeEvento.value;
    ingresso.valorIngresso = inputValorIngresso.value;
    console.log(ingresso)
    outNomeEvento.textContent = ingresso.nomeEvento;
    outValorIngresso.textContent = ingresso.valorIngresso;
}

btnEnviarEx01.addEventListener('click', atualizarEx01);