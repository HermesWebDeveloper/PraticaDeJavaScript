Ingresso = function(nomeEvento, valorIngresso) {
    this.nomeEvento = nomeEvento
    this.valorIngresso = valorIngresso

    this.exibirValor = function() {
        return valorIngresso.tofixed(2)
    }

    this.__str__ = function() {
        return "O nome do evento é " + this.nomeEvento + " e o valor do ingresso é R$ " + this.valorIngresso
    }
}