const inputFilme = document.getElementById("inputFilme")
const inputDuracao = document.getElementById("inputDuracao")
const outNomeFilme = document.getElementById("outFilme")
const outDuracao = document.getElementById("outDuracao")
const btnConverterTempo = document.getElementById("btnConverterTempo")

function converterTempo() {
    let nomeFilme = inputFilme.value;
    let duracaoEmMinutos = Number(inputDuracao.value);

    let outDuracaoHoras = Math.floor(duracaoEmMinutos / 60);
    let outDuracaoMinutos = duracaoEmMinutos%60;

    outNomeFilme.textContent = nomeFilme;
    outDuracao.textContent = `${outDuracaoHoras} hora(s) e ${outDuracaoMinutos} minuto(s)`;
}

btnConverterTempo.addEventListener('click', converterTempo)