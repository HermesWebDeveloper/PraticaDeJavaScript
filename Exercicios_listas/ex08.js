// 8 - Dada uma matriz de palavras ["sol", "lua", "estrela", "cometa"], remova a primeira palavra, adicione "galáxia" no início da matriz e crie uma nova matriz resultante da união desta com ["planeta", "meteoro"].

astros = ["sol", "lua", "estrela", "cometa"];
console.log(astros)

astros.shift();

astros.unshift("galáxia");
console.log(astros)

novosAstros = astros.concat(["planeta", "meteoro"]);
console.log(novosAstros)