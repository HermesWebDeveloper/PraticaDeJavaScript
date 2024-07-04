// Crie um objeto retângulo com propriedades largura e altura e métodos para calcular área e perímetro.

const {input} = require("./utils");

Retangulo = function (largura, altura) {
    this.largura = largura;
    this.altura = altura;
    this.area = function() {
        return largura * altura;
    };
    this.perimetro = function() {
        return (largura*2) + (altura*2);
    };
}

async function main() {
    l = Number(await input("Digite a largura do ret1: "));
    a = Number(await input("Digite a altura do ret1: "));
    ret1 = new Retangulo (l, a);
    console.log("Área de ret1: " + ret1.area());
    console.log("Perímetro de ret1: " + ret1.perimetro());
}

main();