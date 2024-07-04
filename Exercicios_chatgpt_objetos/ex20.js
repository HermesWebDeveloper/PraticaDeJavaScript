// Escreva uma função que receba um array de objetos cliente com propriedades nome e saldo, e retorne o cliente com o maior saldo.

let nome, saldo = 10;

Cliente = function (nome, saldo) {
    this.nome = nome;
    this.saldo = saldo;
}

function sortearItem (lista) {
    indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}

function verificarMaiorCliente (listaClientes) {
    saldoMaior = listaClientes[0].saldo;
    let indiceMaiorCliente = 0;
    for (i = 0; i < listaClientes.length; i++) {
        if (saldoMaior < listaClientes[i].saldo) {
            indiceMaiorCliente = i;
        }
    }
    return indiceMaiorCliente;
}

nomes = ['Hermes', "Lucas", "Caio", "Tâmires", "Borges", "Melo", "Sales", "Antônio", "Valderys", "Keven", "Dâmarys", "Cesar", "Hellen"];
listaClientes = [];

for (i = 0; i < 6; i++) {
    nome = sortearItem(nomes);
    saldo = saldo += 12
    cliente = new Cliente(nome, saldo)
    listaClientes.push(cliente);
}

console.log(listaClientes);

let indice = verificarMaiorCliente(listaClientes)
maiorCliente = listaClientes[indice].nome;

console.log("Maior cliente: " + maiorCliente)