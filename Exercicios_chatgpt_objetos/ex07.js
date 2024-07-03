// Crie um objeto livro com propriedades título, autor e um método detalhes que exiba o título e autor do livro.

const {input} = require("./utils")

livro = {
    titulo: "Javeiros Scriptados",
    autor: "Hermes Barbosa",
    exibir: function() {
        return "Título: " + this.titulo + " e autor: " + this.autor
    }
}

async function main() {
    console.log(livro.titulo);
    console.log(livro.autor);
    console.log(livro.exibir());
}

main()