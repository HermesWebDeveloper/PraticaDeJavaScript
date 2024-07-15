Ingresso = function(nomeEvento, valorIngresso) {
    this.nomeEvento = nomeEvento
    this.valorIngresso = valorIngresso

    this.exibirValor = function() {
        return valorIngresso.tofixed(2);
    };

    this.__str__ = function() {
        return "O nome do evento é " + this.nomeEvento + " e o valor do ingresso é R$ " + this.valorIngresso;
    };
}

Retangulo = function(largura, altura) {
    this.largura = Number(largura);
    this.altura = Number(altura);

    this.calcularPerimetro = function() {
        return (this.largura * 2) + (this.altura * 2);
    };

    this.calcularArea = function() {
        return this.largura * this.altura;
    };
}

Ponto = function(x, y) {
    this.x = Number(x);
    this.y = Number(y);
}

Lista = function(lista) {
    this.listaNormal = lista;
    
    this.listaSemRepetir = function() {
        var lista = this.listaNormal;
        for (i = 1; i < lista; i++) {
            for (j = 0; j < i; j++) {
                if (lista[i] == lista[j]) {
                    lista[i].splice(i, 1);
                };
            };
        };

        return lista;
    };
}