// Crie uma função construtora ContaBancária que receba nome do titular, saldo inicial e métodos para depositar e sacar dinheiro.

let inputNomeTitular = document.getElementById("inputNomeTitular");
let inputValorOperacao = document.getElementById("inputValorOperacao");
let btnDepositar = document.getElementById("btnDepositar");
let btnSacar = document.getElementById("btnSacar");
let btnAtualizarNome = document.getElementById("btnAtualizarNome");
let outNomeTitular = document.getElementById("outNomeTitular");
let outValorSaldo = document.getElementById("outValorSaldo");

function ContaBancaria (titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo = this.saldo + valor;
    }
    this.sacar = function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true
        } else {
            return false
        }
    }
}

let conta1 = new ContaBancaria("Unknow", 20);
atualizarSaldo();

function atualizarTitular() {
    let nomeTitular = inputNomeTitular.value;
    conta1.titular = nomeTitular;
    outNomeTitular.textContent = nomeTitular;
}

function atualizarSaldo(){
    outValorSaldo.textContent = conta1.saldo.toFixed(2);
}

function sacar() {
    let valor = inputValorOperacao.value;
    if(conta1.sacar(valor)) {
        alert("Saque ocorrido com sucesso!");
        atualizarSaldo();
    } else {
        alert("Saque impossível!");
    }
}

function depositar() {
    let valor = inputValorOperacao.value;
    console.log(valor)
    conta1.depositar(valor);
    atualizarSaldo();
}

btnAtualizarNome.addEventListener("click", atualizarTitular);
btnSacar.addEventListener("click", sacar)
btnDepositar.addEventListener("click", depositar)