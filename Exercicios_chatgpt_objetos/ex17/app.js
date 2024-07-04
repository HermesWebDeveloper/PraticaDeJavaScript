// Crie um objeto agenda que permita adicionar contatos com propriedades nome, telefone e um método para listar todos os contatos.

const {input} = require("../utils")

agenda = {
    contatos : [],
    listarContatos : function (qtd) {
        for (i = 0; i < qtd; i++) {
            console.log("----------------------------------")
            console.log("Contato " + this.contatos[i].id + "-->>>>");
            console.log("Nome: " + this.contatos[i].nome);
            console.log("Telefone: " + this.contatos[i].telefone);
            console.log("----------------------------------");
        }
    }
}

async function main() {
    let sair = false;
    qtd = 0
    console.log("Digite 'sair' como nome caso queira encerrar.");
    while (sair == false) {
        inputNome = await input("Digite o nome do contato: ");
        if (inputNome.toUpperCase() == "SAIR" ) {
            break;
        };
        inputTelefone = await input("Digite o telefone do contato: ");

        qtd += 1;
        contato = {
            id : qtd,
            nome : inputNome,
            telefone : inputTelefone,
        };

        agenda.contatos.push(contato);
        agenda.listarContatos(qtd);
    }
}

main()