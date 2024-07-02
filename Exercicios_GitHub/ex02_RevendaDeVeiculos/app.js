const inputModelo = document.getElementById("inputModelo")
const inputPreco = document.getElementById("inputPreco")
const outValorEntrada = document.getElementById("outValorEntrada")
const outSaldoParcelado = document.getElementById("outSaldoParcelado")
const btnCalcular = document.getElementById("btnCalcular")

function calcularVenda(){
    modeloCarro = inputModelo.value
    precoCarro = Number(inputPreco.value)

    valorEntrada = (precoCarro/2).toFixed(2)
    valorParcela = (precoCarro/24).toFixed(2)

    outValorEntrada.textContent = `Valor de entrada: R$ ${valorEntrada}`
    outSaldoParcelado.textContent = `Saldo: 12x de R$ ${valorParcela}`
}

btnCalcular.addEventListener("click", calcularVenda)