// Exercício 1:

let inputNomeEvento = document.getElementById("inputNomeEvento");
let inputValorIngresso = document.getElementById("inputValorIngresso");
let btnEnviarEx01 = document.getElementById("btnEnviarEx01");
let outEventoIngresso__str__ = document.getElementById("outEventoIngresso__str__");

let outNomeEvento = document.getElementById("outNomeEvento");
let outValorIngresso = document.getElementById("outValorIngresso");

const ingresso = new Ingresso(inputNomeEvento.value, inputValorIngresso.value);

function atualizarEx01() {
    ingresso.nomeEvento = inputNomeEvento.value;
    ingresso.valorIngresso = inputValorIngresso.value;
    // console.log(ingresso)
    outNomeEvento.textContent = ingresso.nomeEvento;
    outValorIngresso.textContent = ingresso.valorIngresso;
    outEventoIngresso__str__.textContent = ingresso.__str__();
}

btnEnviarEx01.addEventListener('click', atualizarEx01);

// Exercício 2:

let inputLarguraRetangulo = document.getElementById("inputLarguraRetangulo");
let inputAlturaRetangulo = document.getElementById("inputAlturaRetangulo");
let btnEnviarEx02 = document.getElementById("btnEnviarEx02");

let outPerimetroRetangulo = document.getElementById("outPerimetroRetangulo");
let outAreaRetangulo = document.getElementById("outAreaRetangulo");

retangulo = new Retangulo(Number(inputLarguraRetangulo.value), Number(inputAlturaRetangulo.value));

function atualizarEx02() {
    retangulo.largura = Number(inputLarguraRetangulo.value);
    retangulo.altura = Number(inputAlturaRetangulo.value);

    outPerimetroRetangulo.textContent = retangulo.calcularPerimetro();
    outAreaRetangulo.textContent = retangulo.calcularArea();
}

btnEnviarEx02.addEventListener('click', atualizarEx02);

// Exercício 3:

let inputPontoX = document.getElementById("inputPontoX");
let inputPontoY = document.getElementById("inputPontoY");
let btnEnviarEx03 = document.getElementById("btnEnviarEx03");
let btnZerarLista = document.getElementById("btnZerarLista");

let outListaPontos = document.getElementById("outListaPontos");

let ponto = new Ponto(Number(inputPontoX.value), Number(inputPontoY.value));
let listaPontos = []
listaPontos[0] = ponto

function atualizarEx03 () {
    ponto.x = Number(inputPontoX.value);
    ponto.y = Number(inputPontoY.value);
    listaPontos[listaPontos.length] = ponto;

    outListaPontos.innerHTML += `<li> Ponto ${listaPontos.length-1}: (${ponto.x}, ${ponto.y}) </li>`;
}

function zerarLista() {
    listaPontos = [];
    outListaPontos.innerHTML = ""
}

btnEnviarEx03.addEventListener('click', atualizarEx03);
btnZerarLista.addEventListener('click', zerarLista);

// Exercício 4:

let inputElementoLista = document.getElementById("inputElementoLista");
let btnAdicionarElemeto = document.getElementById("btnAdicionarElemeto");

let outLista = document.getElementById("outLista");
let outListaSemRepetir = document.getElementById("outListaSemRepetir");

let array = [];
let lista = new Lista(array);

function atualizarEx04() {
    lista.listaNormal.push(String(inputElementoLista.value))
    outLista.innerHTML = `[${lista.listaNormal}]`

    outListaSemRepetir.innerHTML = `[${lista.listaSemRepetir()}]`
}

btnAdicionarElemeto.addEventListener('click', atualizarEx04);